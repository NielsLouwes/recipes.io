export const useWakeLock = () => {
  if (!import.meta.client) {
    return {
      isSupported: ref(false),
      supportMessage: ref('Wake Lock API not supported in this environment'),
      requestWakeLock: () => {},
      releaseWakeLock: () => {},
    }
  }
  console.log('running client side!')
  console.log('navigator.wakeLock:', navigator.wakeLock)
  console.log('wakelock in navigator:', 'wakelock' in navigator)
  if (!navigator || typeof window === 'undefined') {
    return {
      isSupported: ref(false),
      supportMessage: ref('Wake Lock API not supported in this environment'),
      requestWakeLock: () => {},
      wakelock: ref(null),
    }
  }

  const isSupported = ref(false)
  const supportMessage = ref()

  if ('wakeLock' in navigator) {
    isSupported.value = true
    supportMessage.value = 'wakelock supported'
  } else {
    console.log('wakelock not supported!')
    supportMessage.value = 'wakelock not supported'
  }

  const wakelock = ref()
  console.log('wakelock', wakelock)

  const requestWakeLock = async () => {
    try {
      wakelock.value = await navigator.wakeLock.request('screen')
    } catch (err) {
      console.error('Error with locking screen', err)
    }
  }

  const releaseWakeLock = async () => {
    if (!wakelock.value) return null

    try {
      await wakelock.value.release()
    } catch (err) {
      console.error('Error with turning off lock screen!')
    }
  }

  return { isSupported, supportMessage, requestWakeLock, releaseWakeLock }
}
