// Configuración de Particles.js para corazones flotantes de fondo
console.log('Script iniciado');
console.log('Anime.js disponible:', typeof anime !== 'undefined');
console.log('Particles.js disponible:', typeof particlesJS !== 'undefined');

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff69b4', '#ff1493', '#ffc0cb', '#ff85a2', '#e040fb']
        },
        shape: {
            type: 'image',
            image: [
                {
                    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHRleHQgeT0iMzIiIGZvbnQtc2l6ZT0iMzIiPvCfkpc8L3RleHQ+PC9zdmc+',
                    width: 20,
                    height: 20
                }
            ]
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 20,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 10,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'bottom',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: false
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 100,
                size: 25,
                duration: 2,
                opacity: 0.8,
                speed: 3
            }
        }
    },
    retina_detect: true
});
} else {
    console.log('Particles.js no está disponible');
}

// Sistema de caída de hojas mejorado
const fallingLeavesContainer = document.getElementById('fallingLeaves');
let activeLeaves = 0;
const maxActiveLeaves = 20;

function createFallingLeaf() {
    if (activeLeaves >= maxActiveLeaves) return;
    
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    
    // Usar variedad de corazones
    const hearts = ['❤️', '💖', '💗', '💕', '💓', '💝', '💘', '🧡', '💛', '💜'];
    leaf.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Posición inicial aleatoria
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.top = '-50px';
    
    // Tamaño aleatorio
    const size = 20 + Math.random() * 15;
    leaf.style.fontSize = size + 'px';
    
    // Duración aleatoria de la caída
    const duration = 5 + Math.random() * 5;
    leaf.style.animationDuration = duration + 's';
    
    // Agregar movimiento horizontal aleatorio
    const drift = (Math.random() - 0.5) * 100;
    leaf.style.setProperty('--drift', drift + 'px');
    
    fallingLeavesContainer.appendChild(leaf);
    activeLeaves++;
    
    // Eliminar hoja cuando termine la animación
    setTimeout(() => {
        if (leaf.parentNode) {
            leaf.remove();
        }
        activeLeaves--;
    }, duration * 1000);
}

// Crear hojas cayendo cada cierto tiempo (2-3 hojas)
setInterval(() => {
    const numLeaves = Math.floor(Math.random() * 2) + 2; // 2 o 3 hojas
    for (let i = 0; i < numLeaves; i++) {
        setTimeout(() => createFallingLeaf(), i * 200);
    }
}, 1000);

// Temporizador - 14 de enero de 2026 a las 9:00 AM
const startDate = new Date('2026-01-14T09:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Actualizar temporizador cada segundo
updateTimer();
setInterval(updateTimer, 1000);

// Control de música de fondo mejorado
const audio = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;
let hasInteracted = false;

// Configurar volumen inicial (0.7 = 70%)
audio.volume = 0.7;

// Función para iniciar música con fade in
function playMusic() {
    audio.volume = 0;
    audio.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicToggle.textContent = '🎵';
        musicToggle.title = 'Pausar música';
        
        // Fade in
        let vol = 0;
        const fadeIn = setInterval(() => {
            if (vol < 0.7) {
                vol += 0.05;
                audio.volume = Math.min(vol, 0.7);
            } else {
                clearInterval(fadeIn);
            }
        }, 50);
    }).catch((error) => {
        console.log('Esperando interacción del usuario para reproducir música');
    });
}

// Función para pausar música con fade out
function pauseMusic() {
    let vol = audio.volume;
    const fadeOut = setInterval(() => {
        if (vol > 0.05) {
            vol -= 0.05;
            audio.volume = Math.max(vol, 0);
        } else {
            audio.pause();
            audio.volume = 0.7;
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicToggle.textContent = '🔇';
            musicToggle.title = 'Reproducir música';
            clearInterval(fadeOut);
        }
    }, 30);
}

// Intentar reproducir cuando se carga la página
window.addEventListener('load', () => {
    setTimeout(() => {
        playMusic();
    }, 500);
});

// Intentar reproducir con la primera interacción del usuario
function tryPlayOnInteraction() {
    if (!hasInteracted && !isPlaying) {
        hasInteracted = true;
        playMusic();
    }
}

document.addEventListener('click', tryPlayOnInteraction, { once: true });
document.addEventListener('touchstart', tryPlayOnInteraction, { once: true });
document.addEventListener('keydown', tryPlayOnInteraction, { once: true });

// Botón para controlar la música
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

// Animaciones de entrada con Anime.js
if (typeof anime !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        // Animar entrada del pergamino
        anime({
            targets: '.pergamino',
            opacity: [0, 1],
            scale: [0.9, 1],
            translateY: [30, 0],
            duration: 1200,
            easing: 'easeOutElastic(1, .8)',
            delay: 300
        });
        
        // Animar título letra por letra
        anime({
            targets: '.love-letter h1',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 800,
            easing: 'easeOutQuad',
            delay: 800
        });
        
        // Animar párrafos uno por uno
        anime({
            targets: '.love-letter p',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'easeOutQuad',
            delay: anime.stagger(200, {start: 1200})
        });
        
        // Animar temporizador
        anime({
            targets: '.timer-section',
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 800,
            easing: 'easeOutQuad',
            delay: 2200
        });
        
        // Animar números del temporizador
        anime({
            targets: '#timer span',
            scale: [0, 1],
            duration: 500,
            easing: 'easeOutElastic(1, .6)',
            delay: anime.stagger(100, {start: 2400})
        });
    });

    // Animación de latido del pergamino cada 10 segundos
    setInterval(() => {
        anime({
            targets: '.pergamino',
            scale: [1, 1.02, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    }, 10000);
} else {
    console.log('Anime.js no está disponible');
}

// Palabras de amor al hacer click
const loveWords = [
    "Te adoro",
    "Te quiero",
    "Me Encantas",
    "Mi princesa",
    "Mi Mundo",
    "Mi ni\u00f1a"
];

document.addEventListener('click', (e) => {
    // Crear elemento con palabra aleatoria
    const word = document.createElement('div');
    word.className = 'love-word';
    word.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
    
    // Posicionar donde se hizo click
    word.style.left = e.clientX + 'px';
    word.style.top = e.clientY + 'px';
    
    // Colores aleatorios
    const colors = ['#d63384', '#ff1493', '#ff69b4', '#e040fb', '#ff4081'];
    word.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Agregar al body
    document.body.appendChild(word);
    
    // Animar con Anime.js si está disponible, sino usar CSS
    if (typeof anime !== 'undefined') {
        anime({
            targets: word,
            translateY: [-100, -150],
            scale: [0.5, 1.3, 0.8],
            opacity: [0, 1, 0],
            rotate: [0, anime.random(-15, 15)],
            duration: 2000,
            easing: 'easeOutExpo',
            complete: () => {
                word.remove();
            }
        });
    } else {
        // Fallback: usar CSS animation
        word.style.animation = 'loveWordFloat 2s ease-out forwards';
        setTimeout(() => {
            word.remove();
        }, 2000);
    }
});
