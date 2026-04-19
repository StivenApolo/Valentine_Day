# 🎉 Página de Feliz Cumpleaños Interactiva

Una hermosa página web personalizada para celebrar cumpleaños con animaciones profesionales, fotos sorpresa y una experiencia interactiva única.

## ✨ Características

- **Animaciones Profesionales**: Pastel de cumpleaños con vela animada, llama realista y regalo con movimiento
- **Fotos Sorpresa**: Al hacer click en la pantalla aparecen pequeños iconos con fotos aleatorias de la carpeta `jpg/`
- **Interactividad**: 
  - Click en la vela para apagarla y reproducir canción de cumpleaños
  - Click en el retrato para ver una foto ampliada
  - Click en el regalo para ver una carta personalizada
- **Confeti Animado**: Dos capas de confeti para efecto de profundidad
- **Responsividad Total**: Diseño adaptable a móviles, tablets y desktop
- **Sonidos**: Efecto de soplido y canción de cumpleaños integradas

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Animaciones, gradientes y media queries
- **JavaScript Vanilla** - Lógica interactiva sin dependencias externas
- **Canvas API** - Animación de confeti con WebGL
- **Web Audio API** - Reproducción de efectos de sonido

## 📁 Estructura del Proyecto

```
ValentineDay/
├── index.html              # Estructura principal de la página
├── styles.css              # Estilos base y animaciones desktop
├── mobile.css              # Media queries para responsividad
├── Confeti.js              # Sistema de partículas (capa trasera)
├── Confeti2.js             # Sistema de partículas (capa delantera)
├── Sorpresa.js             # Lógica de interacciones y modales
├── recursos/               # Archivos de audio e imagen de perfil
│   ├── Cumpleañera.jpg     # Foto principal del retrato
│   ├── soplar1.mp3         # Efecto de sonido al soplar vela
│   └── cancion.mp3         # Canción de cumpleaños
├── jpg/                    # Fotos para sorpresas al hacer click
└── css/                    # Estilos CSS adicionales
```

## 🎨 Animaciones Principales

1. **Pastel de Cumpleaños**: Estructura 3D con chocolate, vela y llama animada
2. **Vela Realista**: Llama que se apaga con efecto de luz
3. **Caja de Regalo**: Movimiento oscilante con estrellas animadas
4. **Confeti**: Partículas cayendo con velocidades variables
5. **Modales**: Aparición y desaparición suave con transiciones CSS

## 🚀 Cómo Usar

### Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/StivenApolo/Valentine_Day.git
cd Valentine_Day
```

2. Abre `index.html` en tu navegador (doble clic o arrastra a navegador)

### Personalización

#### Cambiar la foto principal
Reemplaza `recursos/Cumpleañera.jpg` con tu imagen y actualiza en `index.html`:
```html
<img src="recursos/TuFoto.jpg" alt="Foto" />
```

#### Cambiar el mensaje de cumpleaños
Edita el texto en `index.html` dentro de `.carta-contenido`:
```html
<h2>Tu nombre aquí</h2>
<p>Tu mensaje personalizado...</p>
```

#### Agregar más fotos para sorpresas
1. Coloca las imágenes en la carpeta `jpg/`
2. Se seleccionarán automáticamente al hacer click en la pantalla

#### Cambiar la canción de cumpleaños
Reemplaza `recursos/cancion.mp3` con tu archivo de audio

## 📱 Responsividad

- **Desktop**: Experiencia completa con scroll en confeti
- **Tablet** (max-width: 768px): Elementos escalados a 70-65px
- **Móvil** (max-width: 400px): Elementos escalados a 55-60px sin scroll

## 🎯 Interacciones

| Elemento | Acción | Resultado |
|----------|--------|-----------|
| **Vela** | Click | Se apaga la llama y toca canción |
| **Retrato** | Click | Muestra foto ampliada en modal |
| **Caja de regalo** | Click | Abre carta con mensaje personalizado |
| **Pantalla** | Click (después oscuro) | Aparece foto aleatoria en punto de click |
| **Modal** | Click fuera | Se cierra (también con Escape) |

## 🔧 Desarrollo

### Estructura de Código

- **Confeti.js**: Sistema de partículas con contexto 2D de canvas
- **Confeti2.js**: Segunda capa de confeti para efecto de profundidad
- **Sorpresa.js**: Gestión de eventos, modales y lógica de fotos sorpresa

### Buenas Prácticas Aplicadas

✅ Código limpio y comentado
✅ Separación de responsabilidades
✅ Sin dependencias externas
✅ Variables descriptivas en español
✅ Funciones pequeñas y reutilizables
✅ Event delegation para mejor rendimiento
✅ CSS organizado por secciones

## 📦 Deploy en GitHub Pages

1. Asegúrate de que los cambios están en git:
```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

2. En GitHub: Settings → Pages → Source (main branch)
3. Tu página estará en: `https://TuUsuario.github.io/Valentine_Day`

## 📝 Notas

- El proyecto no requiere dependencias externas
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)
- Los audios se reproducen después de interacción del usuario (requisito de navegadores)

---

**Creado con ❤️ para celebrar un día especial**

