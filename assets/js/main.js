document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-links a');
  const topbar = document.querySelector('.topbar');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (navItems.length > 0 && navLinks) {
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  window.addEventListener('scroll', () => {
    if (!topbar) return;

    if (window.scrollY > 40) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });
});
