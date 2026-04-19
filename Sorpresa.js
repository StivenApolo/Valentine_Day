/**
 * SORPRESA.JS - Gestión de Eventos e Interacciones
 * Controlador de modales, fotos sorpresa y eventos de cumpleaños
 */

// ============================================
// 1. MODAL DE FOTO DEL RETRATO
// ============================================

/**
 * Abre el modal que muestra la foto del retrato ampliada
 */
function abrirFoto() {
  document.getElementById("modalFoto").classList.add("activo");
}

/**
 * Cierra el modal de foto con prevención de propagación
 * @param {Event} event - Evento del click
 */
function cerrarFoto(event) {
  if (event && event.stopPropagation) {
    event.stopPropagation();
  }
  document.getElementById("modalFoto").classList.remove("activo");
}

// Permitir cerrar modal con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarFoto();
  }
});

// ============================================
// 2. MODAL DE CARTA DE CUMPLEAÑOS
// ============================================

const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

// Abrir carta al hacer click en regalo
regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

// Cerrar carta al hacer click fuera
modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// ============================================
// 3. EVENTOS DE VELA Y CONFETI
// ============================================

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");
const tempFoto = document.getElementById("tempFoto");
const tempFotoImg = document.getElementById("tempFotoImg");

// ============================================
// 4. FOTOS SORPRESA
// ============================================

/**
 * Array de nombres de archivos de fotos disponibles en /jpg
 * Se selecciona una aleatoria para mostrar en cada click
 */
const fotosSorpresa = [
  "IMG-20181201-WA0001.jpg",
  "IMG-20190621-WA0000.jpg",
  "IMG-20190621-WA0007.jpg",
  "IMG-20190621-WA0008.jpg",
  "IMG-20190621-WA0009.jpg",
  "IMG-20230508-WA0076.jpg",
  "IMG-20230508-WA0080.jpg",
  "IMG-20230508-WA0100.jpg",
  "IMG_20181208_104616.jpg",
  "IMG_20181208_111406.jpg",
  "IMG_20190406_095103.jpg",
  "IMG_20191030_181722.jpg",
  "IMG_20191030_181836.jpg",
  "IMG_20210710_180316.jpg",
  "IMG_20210710_180321.jpg"
];

/**
 * Muestra una foto sorpresa de tamaño pequeño en la posición del click
 * @param {number} x - Coordenada X del click
 * @param {number} y - Coordenada Y del click
 */
function mostrarFotoTemporal(x, y) {
  // Seleccionar foto aleatoria
  const nombreFoto = fotosSorpresa[Math.floor(Math.random() * fotosSorpresa.length)];
  tempFotoImg.src = `jpg/${nombreFoto}`;
  
  // Posicionar centrado en el punto de click
  tempFoto.style.left = (x - 80) + "px";
  tempFoto.style.top = (y - 80) + "px";
  
  // Mostrar con transición
  tempFoto.classList.add("activo");

  // Ocultar después de 1.8 segundos
  setTimeout(() => {
    tempFoto.classList.remove("activo");
  }, 1800);
}

// ============================================
// 5. EVENTO DE LA VELA - APAGAR Y MÚSICA
// ============================================

/**
 * Al hacer click en la vela:
 * 1. Reproduce efecto de soplido
 * 2. Anima la vela apagándose
 * 3. Reproduce canción de cumpleaños
 * 4. Oculta la pantalla oscura para permitir interacciones
 */
llama.addEventListener("click", () => {
  // Reproducir efecto de soplido
  soplido.currentTime = 0;
  soplido.play();

  // Animar apagado de la vela
  llama.style.animation = "apagar 0.5s forwards";

  // Después del apagado, reproducir canción y revelar la página
  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});

// ============================================
// 6. EVENTO DE CLICK EN PANTALLA - FOTOS SORPRESA
// ============================================

/**
 * Muestra fotos sorpresa al hacer click en cualquier lugar
 * EXCEPTO en portaretrato y regalo (que tienen sus propios eventos)
 * Solo funciona DESPUÉS de apagar la vela (cuando el overlay está hidden)
 */
document.addEventListener("click", (e) => {
  const portaretrato = document.querySelector(".portaretrato");
  const marco = document.querySelector(".marco");
  const regalo = document.querySelector(".regalo");
  const regalos = document.querySelector(".regalos");
  
  // No permitir interacciones mientras la pantalla está oscura (vela sin apagar)
  if (!overlay.classList.contains("hidden")) {
    return;
  }
  
  // Si el click NO es en portaretrato, marco, regalo o regalos, mostrar foto
  if (!e.target.closest(".portaretrato") && 
      !e.target.closest(".marco") && 
      !e.target.closest(".regalo") && 
      !e.target.closest(".regalos")) {
    mostrarFotoTemporal(e.clientX, e.clientY);
  }
});
