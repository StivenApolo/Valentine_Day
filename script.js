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

// Confeti
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd700', '#667eea', '#764ba2', '#4facfe', '#00f2fe', '#ff85a2', '#f5576c'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) {
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

// Modal de fotos
function openModal(imageSrc) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    const modal = document.getElementById('photoModal');
    
    // Si se hace click en el fondo (no en la imagen)
    if (event) {
        if (event.target === modal || event.target.className === 'close-modal') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    } else {
        // Si se hace click en la X
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cerrar modal con tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('photoModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Generar confeti al cargar
window.addEventListener('load', () => {
    setTimeout(() => {
        createConfetti();
    }, 500);
});
