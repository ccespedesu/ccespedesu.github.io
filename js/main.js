// Scroll to top
const btn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form
document.querySelector('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Muchas gracias por la confianza 😊. Te responderé lo antes posible.');
  e.target.reset();
});
//fin contact form

// Traducciones
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_title: "Transformando sus ideas en realidad 💡",
    hero_text: "Soy Camilo Céspedes Umaña, desarrollador Full Stack apasionado por la tecnología.",
    see_projects: "Ver proyectos",
    about_title: "Sobre mí",
    about_text: "Soy programador Full Stack con un marcado interés en la tecnología. Me destaco por la responsabilidad, el compromiso y el trabajo en equipo. Mi objetivo es aplicar mis conocimientos en el desarrollo de proyectos innovadores y de calidad.",
    mission_title: "Misión",
    mission_text: "Crear soluciones innovadoras que transformen el mundo y mejoren la vida de las personas.",
    vision_title: "Visión",
    vision_text: "Ser un ingeniero de software reconocido por liderazgo y excelencia, desarrollando soluciones que generen impacto positivo.",
    projects_title: "Proyectos destacados",
    proj1_title: "CR Finance",
    proj1_desc: "Plataforma de simulación de mercado usando ReactJS y API REST.",
    proj2_title: "Inventario Perfumería",
    proj2_desc: "Sistema web de inventario en PHP y MySQL con dashboard responsivo.",
    proj3_title: "Tower Defense Game",
    proj3_desc: "Juego 2D desarrollado en Godot Engine aplicando patrones de programación.",
    contact_title: "Contacto",
    send: "Enviar",
    cv_title: "Currículum Digital",
    download_cv: "Descargar CV"
  },
  en: {
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Turning your ideas into reality 💡",
    hero_text: "I'm Camilo Céspedes Umaña, a Full Stack Developer passionate about technology.",
    see_projects: "View Projects",
    about_title: "About Me",
    about_text: "I'm a Full Stack developer with a strong interest in technology. I stand out for my responsibility, commitment, and teamwork. My goal is to apply my knowledge in the development of innovative, high-quality projects.",
    mission_title: "Mission",
    mission_text: "Create innovative solutions that transform the world and improve people's lives.",
    vision_title: "Vision",
    vision_text: "Be a software engineer recognized for leadership and excellence, developing impactful technological solutions.",
    projects_title: "Featured Projects",
    proj1_title: "CR Finance",
    proj1_desc: "Market simulation platform built with ReactJS and REST API.",
    proj2_title: "Perfume Inventory System",
    proj2_desc: "Web inventory system built with PHP and MySQL featuring a responsive dashboard.",
    proj3_title: "Tower Defense Game",
    proj3_desc: "2D game built in Godot Engine applying programming patterns.",
    contact_title: "Contact",
    send: "Send",
    cv_title: "Digital Resume",
    download_cv: "Download CV"
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
document.documentElement.lang = currentLang;
updateLanguage(currentLang);

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
  localStorage.setItem('lang', lang);

  // Cambia texto del botón (opcional)
  const btn = document.getElementById('lang-switch');
  btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// Botón de idioma
document.getElementById('lang-switch').addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.documentElement.lang = currentLang;
  updateLanguage(currentLang);
});
