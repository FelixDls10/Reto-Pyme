/* ============================================
   NOVATECH — Reboot Protocol
   Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initErrorOverlay();
  initThemeToggle();
  initMobileMenu();
  initScrollAnimations();
  initChatbot();
  initEasterEgg();
  initParticles();
  initCounters();
});

/* =============================================
   503 ERROR OVERLAY
   ============================================= */
function initErrorOverlay() {
  const overlay = document.getElementById('error-overlay');
  if (!overlay) return;

  if (sessionStorage.getItem('system-recovered')) {
    overlay.classList.add('hidden');
    return;
  }

  const recoverBtn = document.getElementById('recover-btn');

  function recoverSystem() {
    overlay.classList.add('recovering');
    setTimeout(() => {
      overlay.classList.add('hidden');
      sessionStorage.setItem('system-recovered', 'true');
    }, 1500);
  }

  if (recoverBtn) {
    recoverBtn.addEventListener('click', recoverSystem);
  }

  document.addEventListener('keydown', function handler(e) {
    if (!overlay.classList.contains('hidden') && e.key === 'Enter') {
      recoverSystem();
      document.removeEventListener('keydown', handler);
    }
  });
}

/* =============================================
   THEME TOGGLE (Dark / Light)
   ============================================= */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('novatech-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateIcon(btn, saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('novatech-theme', next);
    updateIcon(btn, next);
  });
}

function updateIcon(btn, theme) {
  btn.innerHTML = theme === 'dark'
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';
  btn.setAttribute('aria-label', theme === 'dark' ? 'Modo claro' : 'Modo oscuro');
  if (window.lucide) lucide.createIcons({ nodes: [btn] });
}

/* =============================================
   MOBILE MENU
   ============================================= */
function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* =============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================= */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  els.forEach(el => obs.observe(el));
}

/* =============================================
   CHATBOT — NOVA Assistant
   ============================================= */
function initChatbot() {
  const trigger = document.getElementById('chatbot-trigger');
  const win = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const messagesEl = document.getElementById('chatbot-messages');

  if (!trigger || !win) return;

  trigger.addEventListener('click', () => {
    win.classList.toggle('open');
    if (win.classList.contains('open') && messagesEl.children.length === 0) {
      botMsg('¡Hola! Soy <strong>NOVA</strong>, el asistente virtual de NovaTech. Resurgimos del borrado digital y estamos aquí para ayudarte. ¿Qué necesitas saber?', true);
    }
  });

  closeBtn.addEventListener('click', () => win.classList.remove('open'));

  function send() {
    const txt = input.value.trim();
    if (!txt) return;
    userMsg(txt);
    input.value = '';
    setTimeout(() => {
      botMsg(getResponse(txt.toLowerCase()));
    }, 500 + Math.random() * 700);
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  messagesEl.addEventListener('click', e => {
    if (e.target.classList.contains('suggestion-btn')) {
      const txt = e.target.textContent;
      userMsg(txt);
      setTimeout(() => botMsg(getResponse(txt.toLowerCase())), 500 + Math.random() * 700);
    }
  });
}

function botMsg(html, withSuggestions = false) {
  const container = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot';
  msg.innerHTML = html;

  if (withSuggestions) {
    const s = document.createElement('div');
    s.className = 'chat-suggestions';
    s.innerHTML = `
      <button class="suggestion-btn">¿Qué pasó?</button>
      <button class="suggestion-btn">Servicios</button>
      <button class="suggestion-btn">Contacto</button>
      <button class="suggestion-btn">Ubicación</button>
    `;
    msg.appendChild(s);
  }

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function userMsg(text) {
  const container = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = 'chat-msg user';
  msg.textContent = text;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function getResponse(input) {
  const map = [
    {
      keys: ['hola', 'hey', 'buenas', 'saludos', 'hi'],
      reply: '¡Saludos! Bienvenido a NovaTech. ¿En qué puedo asistirte hoy?'
    },
    {
      keys: ['qué pasó', 'que paso', 'incidente', 'ataque', 'desaparec', 'borr', 'misterio'],
      reply: 'El 15 de enero de 2026, toda nuestra presencia digital fue eliminada: web, redes, DNS. Encontramos un USB misterioso con un desafío. En vez de rendirnos, <strong>nos reinventamos completamente</strong> con infraestructura blindada y una identidad renovada.'
    },
    {
      keys: ['servicio', 'ofrec', 'hacen', 'trabaj'],
      reply: 'Ofrecemos: <strong>Diseño Web Blindado</strong> · <strong>Apps Móviles</strong> · <strong>Ciberseguridad</strong> · <strong>Marketing con IA</strong> · <strong>Branding</strong> · <strong>Cloud</strong>. <a href="servicios.html">Ver todo →</a>'
    },
    {
      keys: ['contacto', 'contactar', 'email', 'correo', 'llamar', 'teléfono'],
      reply: 'Email: <strong>info@novatech.do</strong><br>Tel: <strong>+1 (809) 555-NOVA</strong><br>Ubicación: Torre Empresarial, Av. Abraham Lincoln, Santo Domingo<br><a href="contacto.html">Ir a contacto →</a>'
    },
    {
      keys: ['ubicación', 'ubicacion', 'donde', 'dónde', 'oficina', 'mapa'],
      reply: 'Estamos en <strong>Torre Empresarial, Piso 8, Av. Abraham Lincoln #102</strong>, Piantini, Santo Domingo, RD. Puedes vernos en el mapa en nuestra <a href="contacto.html">página de contacto</a>.'
    },
    {
      keys: ['precio', 'costo', 'cuanto', 'cuánto', 'cotiz', 'presupuesto'],
      reply: 'Cada proyecto es único. Solicita una <strong>cotización sin compromiso</strong> en nuestra <a href="contacto.html">página de contacto</a>. ¡La consulta inicial es gratuita!'
    },
    {
      keys: ['segur', 'proteg', 'hack', 'ciber'],
      reply: 'Post-incidente, la seguridad es nuestro pilar #1: <strong>backups en tiempo real, monitoreo 24/7, encriptación AES-256</strong> y auditorías periódicas. Aprendimos de la peor manera, pero ahora somos inexpugnables.'
    },
    {
      keys: ['gracias', 'genial', 'perfecto', 'excelente'],
      reply: '¡Para servirte! Si necesitas algo más, aquí estoy. Recuerda: <em>Fuimos borrados. Nos reinventamos. Volvimos mejores.</em>'
    },
    {
      keys: ['nova', 'nombre', 'quién eres', 'quien eres', 'asistente'],
      reply: 'Soy <strong>NOVA</strong>, el asistente virtual de NovaTech. Nací como parte de nuestra reconstrucción digital. Mi misión es guiarte en esta nueva era de la empresa.'
    }
  ];

  for (const item of map) {
    if (item.keys.some(k => input.includes(k))) return item.reply;
  }

  return 'No tengo una respuesta exacta para eso. Prueba preguntar sobre: <strong>el incidente, servicios, contacto, ubicación o precios</strong>. También puedes escribirnos a <strong>info@novatech.do</strong>.';
}

/* =============================================
   EASTER EGG — R key + Logo clicks
   ============================================= */
function initEasterEgg() {
  // Trigger 1: Press R
  document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
      // Only trigger if not typing in an input
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      triggerEasterEgg();
    }
  });

  // Trigger 2: Multiple clicks on logo
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    let clicks = 0;
    let timer;
    logo.addEventListener('click', (e) => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => { clicks = 0; }, 800);
      if (clicks >= 5) {
        e.preventDefault();
        triggerEasterEgg();
        clicks = 0;
      }
    });
  }
}

let easterEggCooldown = false;

function triggerEasterEgg() {
  if (easterEggCooldown) return;
  easterEggCooldown = true;

  document.body.classList.add('easter-egg-active');

  const toast = document.createElement('div');
  toast.className = 'easter-egg-toast';
  toast.innerHTML = `
    <h2>[ RECOVERY MODE UNLOCKED ]</h2>
    <p>"Fuimos borrados. Nos reinventamos. Volvimos mejores."</p>
    <p style="margin-top: 10px; font-family: var(--font-code); font-size: 0.68rem; color: var(--text-muted);">
      ACCESS CODE: NVT-REBOOT-2026
    </p>
  `;
  document.body.appendChild(toast);

  // Floating emojis
  for (let i = 0; i < 18; i++) {
    setTimeout(() => spawnEmoji(), i * 90);
  }

  setTimeout(() => {
    document.body.classList.remove('easter-egg-active');
    toast.remove();
    easterEggCooldown = false;
  }, 4000);
}

function spawnEmoji() {
  const pool = ['+', '*', '>', '<', '~', '^', '/'];
  const el = document.createElement('div');
  el.textContent = pool[Math.floor(Math.random() * pool.length)];
  el.style.cssText = `
    position: fixed;
    font-size: ${18 + Math.random() * 28}px;
    left: ${Math.random() * 100}vw;
    top: 100vh;
    z-index: 10002;
    pointer-events: none;
  `;
  el.animate([
    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
    { transform: `translateY(-110vh) rotate(${(Math.random() - 0.5) * 720}deg)`, opacity: 0 }
  ], {
    duration: 2000 + Math.random() * 1500,
    easing: 'ease-out',
    fill: 'forwards'
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

/* =============================================
   PARTICLE BACKGROUND
   ============================================= */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const COUNT = 45;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const c = isDark ? '0, 229, 255' : '0, 153, 187';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c}, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Lines
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const c = isDark ? '0, 229, 255' : '0, 153, 187';
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${c}, ${0.05 * (1 - d / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  loop();
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
function initCounters() {
  const statsSection = document.querySelector('.stats-row');
  if (!statsSection) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  obs.observe(statsSection);
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const step = target / 55;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 28);
  });
}

/* =============================================
   FORM VALIDATION
   ============================================= */
function validateContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#contact-name');
  const email = form.querySelector('#contact-email');
  const message = form.querySelector('#contact-message');
  let valid = true;

  [name, email, message].forEach(f => {
    if (!f.value.trim()) {
      f.style.borderColor = 'var(--accent)';
      valid = false;
    } else {
      f.style.borderColor = 'var(--border)';
    }
  });

  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.style.borderColor = 'var(--accent)';
    valid = false;
  }

  if (valid) {
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ ¡Mensaje enviado!';
    btn.style.background = 'var(--success)';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  }
}
