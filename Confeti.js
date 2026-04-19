/**
 * Sistema de Confeti - Capa Trasera
 * Animación de partículas usando Canvas API
 * Proporciona el efecto de confeti cayendo en el fondo
 */

// Evitar menú contextual
window.oncontextmenu = function () {
  return false;
};

// ============================================
// 1. INICIALIZACIÓN DEL CANVAS
// ============================================

const canvasConfeti = document.getElementById("canvas1");
const ctxConfeti = canvasConfeti.getContext("2d");

let ancho = (canvasConfeti.width = window.innerWidth);
let alto = (canvasConfeti.height = window.innerHeight);

let confetis = [];

// Paleta de colores rosa para el confeti
const coloresConfeti = [
  "rgba(255, 155, 170, 1)",   // Rosa fuerte
  "rgba(224, 130, 144, 1)",   // Rosa claro
  "rgba(251, 208, 214, 1)",   // Rosa muy claro
  "rgba(248, 93, 116, 1)",    // Rosa rojo
  "rgba(246, 121, 139, 1)",   // Rosa medio
  "rgba(238, 174, 184, 1)",   // Rosa pastel
  "rgba(255, 255, 255, 1)",   // Blanco
];

// ============================================
// 2. CREAR PARTÍCULAS DE CONFETI
// ============================================

/**
 * Crea 100 partículas de confeti con propiedades aleatorias
 */
function crearConfeti() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    confetis.push({
      x: Math.random() * ancho,           // Posición horizontal aleatoria
      y: Math.random() * -alto,           // Posición vertical (arriba)
      r: Math.random() * 5 + 2,           // Radio 2-7 píxeles
      color: coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)],
      velocidadY: Math.random() * 2 + 1,  // Velocidad de caída
    });
  }
}

//
// 3. ANIMAR Y DIBUJAR CONFETI
//

/**
 * Función principal de animación
 * Dibuja las partículas y actualiza su posición cada frame
 */
function animarConfeti() {
  // Limpiar canvas con fondo rosa
  ctxConfeti.fillStyle = "rgba(255, 182, 193, 1)";
  ctxConfeti.fillRect(0, 0, ancho, alto);

  // Animar cada partícula
  for (let i = 0; i < confetis.length; i++) {
    let confetiActual = confetis[i];

    // Dibujar círculo
    ctxConfeti.beginPath();
    ctxConfeti.arc(
      confetiActual.x,
      confetiActual.y,
      confetiActual.r,
      0,
      Math.PI * 2
    );
    ctxConfeti.fillStyle = confetiActual.color;
    ctxConfeti.fill();

    // Actualizar posición (caída libre)
    confetiActual.y += confetiActual.velocidadY;

    // Reciclar partículas cuando caen fuera de pantalla
    if (confetiActual.y > alto) {
      confetiActual.y = -10;
      confetiActual.x = Math.random() * ancho;
    }
  }

  // Llamar nuevamente en el próximo frame
  requestAnimationFrame(animarConfeti);
}

crearConfeti();

// Esperar 1 segundo antes de iniciar el confeti
setTimeout(() => {
  animarConfeti();
}, 1500);