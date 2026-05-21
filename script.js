if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => console.log("Service Worker aktif"))
      .catch(err => console.log("SW gagal:", err));
  });
}console.log("Nasi Timbel Bawean UI Modern aktif 🚀");
