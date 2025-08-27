const colores = ["rojo", "azul", "verde", "amarillo"];
let secuencia = [];
let secuenciaUsuario = [];
let nivel = 0;

const botones = document.querySelectorAll(".color");
const btnIniciar = document.getElementById("btn-iniciar");
const mensaje = document.getElementById("mensaje");

// Iniciar juego
btnIniciar.addEventListener("click", iniciarJuego);

function iniciarJuego() {
    secuencia = [];
    nivel = 0;
    siguienteNivel();
}

// Mostrar un nuevo color
function siguienteNivel() {
    nivel++;
    mensaje.textContent = Nivel ${nivel};
    secuenciaUsuario = [];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    secuencia.push(colorAleatorio);
    reproducirSecuencia();
}

// Reproduce la secuencia visualmente
function reproducirSecuencia() {
    let i = 0;
    const intervalo = setInterval(() => {
        iluminarColor(secuencia[i]);
        i++;
        if (i >= secuencia.length) {
            clearInterval(intervalo);
        }
    }, 1000);
}

// Efecto de iluminar color
function iluminarColor(color) {
    const boton = document.querySelector(.${color});
    boton.style.opacity = 1;
    setTimeout(() => boton.style.opacity = 0.8, 500);
}

// Cuando el usuario hace clic en un color
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const color = boton.dataset.color;
        secuenciaUsuario.push(color);
        iluminarColor(color);
        verificarRespuesta(secuenciaUsuario.length - 1);
    });
});

function verificarRespuesta(indice) {
    if (secuenciaUsuario[indice] !== secuencia[indice]) {
        mensaje.textContent = "😢 ¡Perdiste! Pulsa iniciar para jugar otra vez.";
        return;
    }
    if (secuenciaUsuario.length === secuencia.length) {
        setTimeout(siguienteNivel, 1000);
    }
}
