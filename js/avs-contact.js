
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-menu');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeMenu = document.getElementById('close-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileSidebar.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileSidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileSidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      if (mobileSidebar) mobileSidebar.classList.remove('active');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const langBtn = document.getElementById('langBtn');
  const langText = document.getElementById('langText');
  const translatableElements = document.querySelectorAll('.translatable');

  let currentLang = 'en'; // Default language

  // Toggle language function
  langBtn.addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage();
  });

  // Update all translatable elements
  function updateLanguage() {
    translatableElements.forEach(element => {
      const text = element.getAttribute(`data-${currentLang}`);
      if (text) {
        element.innerHTML = text;
      }
    });

    // Update button text
    langText.textContent = currentLang === 'en' ? 'English' : 'हिंदी';

    // Update body class for font
    if (currentLang === 'hi') {
      document.body.classList.add('hindi');
    } else {
      document.body.classList.remove('hindi');
    }
  }

  // Initialize language
  updateLanguage();

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('active');
    });
  });
});
