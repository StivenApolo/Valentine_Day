// Foto Retrato
function abrirFoto() {
  document.getElementById("modalFoto").classList.add("activo");
}

function cerrarFoto(event) {
  if (event && event.stopPropagation) {
    event.stopPropagation();
  }
  document.getElementById("modalFoto").classList.remove("activo");
}

// Cerrar modal de foto con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarFoto();
  }
});

// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");
const tempFoto = document.getElementById("tempFoto");
const tempFotoImg = document.getElementById("tempFotoImg");

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

function mostrarFotoTemporal(x, y) {
  const nombreFoto = fotosSorpresa[Math.floor(Math.random() * fotosSorpresa.length)];
  tempFotoImg.src = `jpg/${nombreFoto}`;
  
  // Posicionar en las coordenadas del click (centrado en el punto)
  tempFoto.style.left = (x - 80) + "px";
  tempFoto.style.top = (y - 80) + "px";
  
  tempFoto.classList.add("activo");

  setTimeout(() => {
    tempFoto.classList.remove("activo");
  }, 1800);
}

// Evento de la llama para apagar y pasar de pantalla oscura
llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards"; // forwards -> Ultimo frame (to)

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});

// Click en cualquier lugar excepto portaretrato y regalo para mostrar fotos
document.addEventListener("click", (e) => {
  const portaretrato = document.querySelector(".portaretrato");
  const marco = document.querySelector(".marco");
  const regalo = document.querySelector(".regalo");
  const regalos = document.querySelector(".regalos");
  
  // Solo permitir fotos si el overlay NO está visible
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
