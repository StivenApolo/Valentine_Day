// Variables globales
let currentPhotoIndex = 0;
const photoList = [
    'jpg/IMG-20181201-WA0001.jpg',
    'jpg/IMG-20190621-WA0000.jpg',
    'jpg/IMG-20190621-WA0007.jpg',
    'jpg/IMG-20190621-WA0008.jpg',
    'jpg/IMG-20190621-WA0009.jpg',
    'jpg/IMG-20230508-WA0076.jpg',
    'jpg/IMG-20230508-WA0080.jpg',
    'jpg/IMG-20230508-WA0100.jpg',
    'jpg/IMG_20181208_104616.jpg',
    'jpg/IMG_20181208_111406.jpg',
    'jpg/IMG_20190406_095103.jpg',
    'jpg/IMG_20191030_181722.jpg',
    'jpg/IMG_20191030_181836.jpg',
    'jpg/IMG_20210710_180316.jpg',
    'jpg/IMG_20210710_180321.jpg'
];

// Control de música
const audio = document.getElementById('birthdayMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

audio.volume = 0.5;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicToggle.textContent = '🔇';
        isPlaying = false;
    } else {
        audio.play();
        musicToggle.textContent = '🔊';
        isPlaying = true;
    }
});

// Auto-play cuando se hace click en la página
document.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            musicToggle.textContent = '🔊';
        }).catch(() => {
            console.log('No se pudo reproducir el audio');
        });
    }
}, { once: true });

// Función para iniciar la celebración
function startBirthday() {
    const welcomeSection = document.getElementById('welcomeSection');
    const mainSection = document.getElementById('mainSection');
    
    // Crear confeti
    createConfetti();
    
    // Animar transición
    welcomeSection.style.animation = 'fadeOut 0.8s ease-out';
    
    setTimeout(() => {
        welcomeSection.style.display = 'none';
        mainSection.style.display = 'block';
        mainSection.style.animation = 'slideUp 0.8s ease-out';
        
        // Reproducir música
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            musicToggle.textContent = '🔊';
        }
    }, 800);
}

// Galería de fotos
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoList.length;
    updatePhoto();
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoList.length) % photoList.length;
    updatePhoto();
}

function goToPhoto(index) {
    currentPhotoIndex = index;
    updatePhoto();
}

function updatePhoto() {
    const mainPhoto = document.getElementById('mainPhoto');
    const photoNumber = document.getElementById('photoNumber');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainPhoto.style.opacity = '0';
    
    setTimeout(() => {
        mainPhoto.src = photoList[currentPhotoIndex];
        mainPhoto.style.opacity = '1';
        photoNumber.textContent = currentPhotoIndex + 1;
        
        // Actualizar thumbnails activas
        thumbnails.forEach((thumb, index) => {
            if (index === currentPhotoIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }, 300);
}

// Confeti
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd700', '#667eea', '#764ba2', '#4facfe', '#00f2fe', '#ff85a2', '#f5576c'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Confeti grande con más cantidad
function createBigConfetti() {
    const colors = ['#ff6b6b', '#ffd700', '#667eea', '#764ba2', '#4facfe', '#00f2fe', '#ff85a2', '#f5576c'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 7) + 'px';
        confetti.style.height = (Math.random() * 10 + 7) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5500);
    }
}

// Animación de fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Navegar con teclado
document.addEventListener('keydown', (e) => {
    if (document.getElementById('mainSection').style.display !== 'none') {
        if (e.key === 'ArrowLeft') previousPhoto();
        if (e.key === 'ArrowRight') nextPhoto();
    }
});

// Inicializar fotos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('totalPhotos').textContent = photoList.length;
    updatePhoto();
});
