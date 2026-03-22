# NovaTech — Reboot Protocol

> *"Fuimos borrados. Nos reinventamos. Volvimos mejores."*

## Contexto

Una empresa dominicana fue eliminada del entorno digital de la noche a la mañana. Un USB misterioso contenía un desafío: reinventarse o desaparecer. El proyecto reconstruye su presencia online bajo la narrativa de **"resurrección digital"**.

---

## Páginas

| Página | Archivo | Contenido |
|--------|---------|-----------|
| **Inicio** | `index.html` | Historia del misterio, mensaje del USB, timeline, stats animados, renacimiento |
| **Servicios** | `servicios.html` | 9 servicios reinventados, comparativa antes vs ahora, stats, CTA |
| **Contacto** | `contacto.html` | Formulario con validación, Google Maps embebido, evidencias forenses (logs), system status |

---

## Funcionalidades

### Overlay 503
Pantalla de error `ERROR 503: DIGITAL PRESENCE NOT FOUND` al cargar. El botón **RECOVER SYSTEM** dispara una animación de recuperación glitch antes de mostrar el sitio.

### NOVA Assistant (Chatbot)
Asistente virtual flotante (botón de ícono de mensaje en la esquina inferior derecha) con respuestas predefinidas y matching por palabras clave. Temas: qué pasó, servicios, contacto, ubicación, precios, seguridad. Incluye sugerencias clickeables.

### Easter Eggs
- **Tecla `R`** (fuera de un input): activa "Recovery mode unlocked"
- **5 clicks en el logo** NOVATECH del nav: mismo efecto

### Otras interacciones
- Toggle **modo oscuro / claro** con persistencia en `localStorage`
- Animaciones de scroll con `Intersection Observer` (fade-in)
- Contadores animados en la sección de estadísticas
- Menú hamburguesa responsive en móvil
- Partículas de fondo animadas (Canvas API)
- Overlay de scanlines (estética cyberpunk)

---

## Requisitos Cumplidos

### HTML
- Estructura semántica completa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- 3 páginas funcionales con navegación compartida

### CSS
- Estilo cyberpunk / futurista con colores neon
- Animaciones: glitch text, fade-in on scroll, hover glow, transitions
- Diseño responsive (mobile < 768px, tablet, desktop)
- Partículas de fondo animadas + scanlines overlay
- Design tokens via CSS custom properties
- Soporte dark/light mode

### JavaScript
- Overlay 503 con animación de recuperación
- NOVA Assistant (chatbot) con respuestas predefinidas
- Easter egg doble (tecla R + clicks en logo)
- Scroll animations con Intersection Observer
- Contadores animados
- Validación de formulario (campos requeridos + email)
- Toggle de tema persistente

### Extras
- Mapa integrado — Google Maps (iframe) con ubicación en Santo Domingo
- Evidencias forenses — logs de servidor ficticios en la página de contacto
- System status display en contacto

---

## Design Tokens

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--bg` | `#0A0A0F` | `#f2f2f7` |
| `--primary` | `#00E5FF` | `#0099bb` |
| `--secondary` | `#8B5CF6` | `#6d3fd4` |
| `--accent` | `#FF3CAC` | `#d4207a` |
| `--success` | `#39FF14` | `#1a9e00` |
| `--text` | `#F5F7FA` | `#111118` |
| **Headings** | Orbitron | — |
| **Body** | Poppins | — |
| **Code** | Fira Code | — |

---

## Estructura

```
Reto-Pyme/
├── index.html          # Historia del misterio + overlay 503
├── servicios.html      # Servicios + comparativa antes vs ahora
├── contacto.html       # Contacto + evidencias + mapa
├── css/
│   └── styles.css      # Estilos, tokens, animaciones, responsive (1554 líneas)
├── js/
│   └── script.js       # Overlay, chatbot, easter egg, interacciones (477 líneas)
├── assets/
│   ├── images/
│   ├── icons/
│   └── media/
└── README.md
```

---

## Tecnologías

- HTML5 semántico
- CSS3 (custom properties, grid, flexbox, animations, media queries)
- JavaScript vanilla (ES6+, Intersection Observer, Canvas API)
- Google Fonts (Orbitron, Poppins, Fira Code)
- Lucide Icons (CDN)
- Google Maps (iframe embed)

---

## Cómo usar

```bash
git clone https://github.com/TU-USUARIO/novatech-reboot.git
cd novatech-reboot
# Abrir index.html en el navegador o usar Live Server en VS Code
```

1. Se muestra la pantalla de error 503
2. Click en **RECOVER SYSTEM** para restaurar el sitio
3. Explora las 3 páginas
4. Prueba el chatbot (botón flotante en la esquina inferior derecha)
5. Activa el easter egg: tecla `R` o 5 clicks en el logo
6. Cambia entre modo oscuro/claro con el toggle del nav

---

**Hecho con ⚡ en Santo Domingo, República Dominicana**
