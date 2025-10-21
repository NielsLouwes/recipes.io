export const useWakeLock = () => {
  if (!import.meta.client) {
    return {
      isSupported: ref(false),
      requestWakeLock: () => {},
      releaseWakeLock: () => {},
    }
  }

  if (!navigator) {
    return {
      isSupported: ref(false),
      requestWakeLock: () => {},
      wakelock: ref(null),
    }
  }

  const isSupported = ref(false)
  const isLocked = ref(false)

  if ('wakeLock' in navigator) {
    isSupported.value = true
  } else {
    console.error('wakelock not supported!')
  }

  const wakelock = ref()

  const requestWakeLock = async () => {
    try {
      wakelock.value = await navigator.wakeLock.request('screen')
      isLocked.value = true
    } catch (err) {
      console.error('Error with locking screen', err)
    }
  }

  const releaseWakeLock = async () => {
    if (!wakelock.value) return null

    try {
      await wakelock.value.release()
      isLocked.value = false
    } catch (err) {
      console.error('Error with turning off lock screen!')
    }
  }

  return { isSupported, requestWakeLock, releaseWakeLock, isLocked }
}
