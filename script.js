if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("PWA aktif");
    } catch (e) {
      console.log("Gagal:", e);
    }
  });
}if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("SW aktif");
    } catch (err) {
      console.log("SW gagal:", err);
    }
  });
}
