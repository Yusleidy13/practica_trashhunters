const boton = document.getElementById("startButton");
const mensaje = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function() {

    puntos += 10;

    mensaje.textContent =
        "¡Juego iniciado! Puntos: " + puntos;

    boton.textContent = "Recolectar basura";
});