// Año automático en el pie de página.
document.getElementById("year").textContent = new Date().getFullYear();

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker.register(
      "./service-worker.js"
    )
    .then(registration => {
      console.log(
        "Trash Hunters PWA instalada:",
        registration.scope
      );
    })
    .catch(error => {
      console.error(
        "Error al registrar la PWA:",
        error
      );
    });

  });

}
