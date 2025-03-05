document.addEventListener('DOMContentLoaded', () => {
  // Verificar si es un dispositivo táctil
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Seguimiento del cursor (solo en dispositivos no táctiles)
  const cursorGlow = document.querySelector('.cursor-glow');
  if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  } else {
    cursorGlow.style.display = 'none'; // Ocultar en dispositivos táctiles
  }

  // Manejo de las habilidades
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    const header = card.querySelector('.skill-header');
    header.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
        return;
      }
      skillCards.forEach(otherCard => {
        otherCard.classList.remove('active');
      });
      card.classList.add('active');
    });
  });

  // Manejo de los proyectos
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const header = card.querySelector('.project-header');
    header.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
        return;
      }
      projectCards.forEach(otherCard => {
        otherCard.classList.remove('active');
      });
      card.classList.add('active');
    });
  });
});