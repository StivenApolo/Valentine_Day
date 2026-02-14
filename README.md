# Página de San Valentín ❤️

Una hermosa página web romántica con animaciones profesionales, corazones flotantes y música de fondo.

## 🌟 Características

- **Animaciones Profesionales**: Usando Anime.js para transiciones suaves
- **Corazones Flotantes**: Particles.js genera corazones animados de fondo
- **Hojas Cayendo**: Simulación de caída de hojas con corazones emoji
- **Temporizador**: Cuenta desde el 14 de enero de 2026 a las 9:00 AM
- **Música de Fondo**: Reproductor con fade in/out automático
- **Palabras Interactivas**: Al hacer click aparecen palabras de amor animadas
- **Diseño Responsive**: Se adapta a cualquier dispositivo
- **Mensaje Personalizado**: Carta de amor con fuente manuscrita

## 🎨 Tecnologías Utilizadas

- **HTML5** + **CSS3** + **JavaScript Vanilla**
- **Anime.js 3.2.1** - Animaciones fluidas y profesionales
- **Particles.js 2.0.0** - Efectos de partículas flotantes
- **Google Fonts** - Dancing Script (fuente manuscrita elegante)
- **HTML5 Audio API** - Control de música de fondo

## 🚀 Cómo Hostear en GitHub Pages

### Opción 1: Desde la línea de comandos

1. Abre PowerShell en esta carpeta y ejecuta:

```powershell
git init
git add .
git commit -m "Página de San Valentín"
git branch -M main
```

2. Crea un repositorio en GitHub (puede ser privado o público)

3. Conecta tu repositorio local con GitHub:

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

4. En GitHub:
   - Ve a Settings → Pages
   - En "Source", selecciona "main" branch
   - Guarda los cambios
   - Tu página estará disponible en: `https://TU_USUARIO.github.io/TU_REPOSITORIO`

### Opción 2: Subir archivos directamente

1. Crea un nuevo repositorio en GitHub
2. Arrastra y suelta los archivos (`index.html`, `style.css`, `script.js`)
3. Ve a Settings → Pages
4. Selecciona "main" branch como fuente
5. ¡Listo!

## 📁 Archivos

- `index.html` - Estructura de la página con enlaces a bibliotecas CDN
- `style.css` - Estilos con diseño tipo pergamino
- `script.js` - Lógica de animaciones, música y efectos interactivos
- `music.mp3` - Música de fondo romántica

## 💫 Animaciones Implementadas

1. **Entrada del Pergamino**: Aparece con efecto elástico
2. **Texto Progresivo**: Título y párrafos aparecen secuencialmente
3. **Números Animados**: Temporizador con efecto elástico
4. **Latido Periódico**: El pergamino late suavemente cada 10 segundos
5. **Palabras Flotantes**: Al hacer click, palabras románticas flotan con rotación
6. **Corazones de Fondo**: 30 corazones flotando constantemente
7. **Hojas Cayendo**: Corazones emoji caen continuamente (2-3 por segundo)

## 💝 Personalización

### Cambiar la fecha del temporizador
Edita la línea 137 en `script.js`:

```javascript
const startDate = new Date('2026-01-14T09:00:00');
```

### Cambiar las palabras de amor
Edita el array en la línea 312 de `script.js`:

```javascript
const loveWords = [
    "Te adoro",
    "Te quiero",
    "Me Encantas",
    "Mi princesa",
    "Mi Mundo",
    "Mi niña"
];
```

### Cambiar la música
Reemplaza el archivo `music.mp3` con tu canción favorita.

## 🎨 Vista Previa Local

Para ver la página en tu navegador localmente, simplemente abre el archivo `index.html` con doble clic o arrástralo a tu navegador.

---

Hecho con ❤️ para alguien muy especial
