# ⚡ NovaTech — Reboot Protocol

> *"Fuimos borrados. Nos reinventamos. Volvimos mejores."*

## 📖 Contexto

Una empresa dominicana fue eliminada del entorno digital de la noche a la mañana. Un USB misterioso contenía un desafío: reinventarse o desaparecer. El proyecto reconstruye su presencia online bajo la narrativa de **"resurrección digital"**.

## 🌐 Páginas

| Página | Archivo | Contenido |
|--------|---------|-----------|
| **Inicio** | `index.html` | Historia del misterio, mensaje del USB, timeline, stats, renacimiento |
| **Servicios** | `servicios.html` | Servicios reinventados, comparativa antes vs ahora, CTA |
| **Contacto** | `contacto.html` | Formulario, mapa, evidencias forenses, system status |

## ✅ Requisitos Cumplidos

### HTML
- ✅ Estructura semántica completa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ 3 páginas funcionales con navegación compartida

### CSS
- ✅ Estilo cyberpunk / futurista con colores neon
- ✅ Animaciones: glitch text, fade-in on scroll, hover glow, transitions
- ✅ Diseño responsive (mobile < 768px, tablet, desktop)
- ✅ Partículas de fondo animadas + scanlines overlay
- ✅ Design tokens via CSS custom properties

### JavaScript
- ✅ **Overlay 503** — pantalla "ERROR 503: DIGITAL PRESENCE NOT FOUND" con botón "Recover System" y animación glitch de recuperación
- ✅ **NOVA Assistant (Chatbot)** — asistente virtual con respuestas predefinidas, sugerencias clickeables, preguntas: ¿qué pasó?, servicios, contacto, ubicación
- ✅ **Easter Egg** — Tecla `R` o 5 clicks en el logo → "Recovery mode unlocked"
- ✅ **Scroll animations** — Intersection Observer para fade-in
- ✅ **Contadores animados** — estadísticas con animación
- ✅ **Validación de formulario** — campos requeridos + email

### Extras
- ✅ **Mapa integrado** — OpenStreetMap (iframe) con ubicación en Santo Domingo
- ✅ **Modo oscuro/claro** — Toggle con persistencia en localStorage

## 🎨 Design Tokens

| Token | Valor |
|-------|-------|
| `--bg` | `#0A0A0F` |
| `--primary` | `#00E5FF` |
| `--secondary` | `#8B5CF6` |
| `--accent` | `#FF3CAC` |
| `--success` | `#39FF14` |
| `--text` | `#F5F7FA` |
| **Headings** | Orbitron |
| **Body** | Poppins |
| **Code** | Fira Code |

## 🕹️ Easter Eggs

1. **Tecla R**: Presiona `R` (fuera de inputs) → "Recovery mode unlocked"
2. **Logo clicks**: Haz 5 clicks rápidos en el logo "NOVATECH" en la barra de navegación

## 🚀 Cómo usar

```bash
git clone https://github.com/TU-USUARIO/novatech-reboot.git
cd novatech-reboot
# Abrir index.html en navegador o usar Live Server
```

1. Se muestra la pantalla de error 503
2. Click en "RECOVER SYSTEM" para restaurar
3. Explora las 3 páginas
4. Prueba el chatbot (botón 💬)
5. Activa el easter egg (tecla R)
6. Cambia entre modo oscuro/claro

## 📁 Estructura

```
novatech-reboot/
├── index.html          # Historia del misterio + overlay 503
├── servicios.html      # Servicios + comparativa antes vs ahora
├── contacto.html       # Contacto + evidencias + mapa
├── css/
│   └── styles.css      # Estilos, tokens, animaciones, responsive
├── js/
│   └── script.js       # Overlay, chatbot, easter egg, interacciones
├── assets/
│   ├── images/
│   ├── icons/
│   └── media/
└── README.md
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (custom properties, grid, flexbox, animations, media queries)
- JavaScript vanilla (ES6+, Intersection Observer, Web Animations API)
- Google Fonts (Orbitron, Poppins, Fira Code)
- OpenStreetMap (API de mapas)


**Hecho con ⚡ en Santo Domingo, República Dominicana**
