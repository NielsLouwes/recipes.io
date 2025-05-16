import NoSleep from "nosleep.js";

export default defineNuxtPlugin(() => {
  const noSleep = new NoSleep();

  return {
    provide: {
      noSleep,
      enableNoSleep: () => {
        try {
          noSleep.enable();
        } catch (e) {
          console.error("Failed to enable noSleep:", e);
        }
      },
      disableNoSleep: () => {
        try {
          noSleep.disable();
        } catch (e) {
          console.error("Failed to disable noSleep:", e);
        }
      },
    },
  };
});
