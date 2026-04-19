/**
 * Sistema de Confeti - Capa Delantera
 * Segunda capa de partículas para efecto de profundidad
 * Similar a Confeti.js pero con clearRect en lugar de fillRect
 */

// Evitar menú contextual
window.oncontextmenu = function () {
  return false;
};

// ============================================
// 1. INICIALIZACIÓN DEL CANVAS
// ============================================

const canvasConfeti2 = document.getElementById("canvas2");
const ctxConfeti2 = canvasConfeti2.getContext("2d");

let ancho2 = (canvasConfeti2.width = window.innerWidth);
let alto2 = (canvasConfeti2.height = window.innerHeight);

let confetis2 = [];

// Paleta de colores rosa para el confeti
const coloresConfeti2 = [
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
function crearConfeti2() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    confetis2.push({
      x: Math.random() * ancho2,           // Posición horizontal aleatoria
      y: Math.random() * -alto2,           // Posición vertical (arriba)
      r: Math.random() * 5 + 2,            // Radio 2-7 píxeles
      color: coloresConfeti2[Math.floor(Math.random() * coloresConfeti2.length)],
      velocidadY: Math.random() * 2 + 1,   // Velocidad de caída
    });
  }
}

// ============================================
// 3. ANIMAR Y DIBUJAR CONFETI
// ============================================

/**
 * Función principal de animación
 * Dibuja las partículas y actualiza su posición cada frame
 * Usa clearRect para permitir ver capas detrás
 */
function animarConfeti2() {
  // Limpiar canvas completamente (permite ver fondo)
  ctxConfeti2.clearRect(0, 0, ancho2, alto2);

  // Animar cada partícula
  for (let i = 0; i < confetis2.length; i++) {
    let c = confetis2[i];
    
    // Dibujar círculo
    ctxConfeti2.beginPath();
    ctxConfeti2.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctxConfeti2.fillStyle = c.color;
    ctxConfeti2.fill();
    
    // Actualizar posición (caída libre)
    c.y += c.velocidadY;
    
    // Reciclar partículas cuando caen fuera de pantalla
    if (c.y > alto2) {
      c.y = -10;
      c.x = Math.random() * ancho2;
    }
  }

  // Llamar nuevamente en el próximo frame
  requestAnimationFrame(animarConfeti2);
}

// ============================================
// 4. INICIALIZACIÓN
// ============================================

// Crear partículas iniciales
crearConfeti2();

// Esperar 1.5 segundos antes de iniciar la animación
setTimeout(() => {
  animarConfeti2();
}, 1500);