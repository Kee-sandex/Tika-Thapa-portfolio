
// The video modal functions need to be global to be called from the HTML `onclick`
function openVideoModal(videoUrl) {
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');

  if (videoIframe && videoModal) {
    videoIframe.src = videoUrl;
    videoModal.style.display = 'flex';
  }
}

function closeVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');

  if (videoIframe && videoModal) {
    videoIframe.src = '';
    videoModal.style.display = 'none';
  }
}

// New functions for the image modal
function openImageModal(imageUrl) {
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  if (modalImage && imageModal) {
    modalImage.src = imageUrl;
    imageModal.style.display = 'flex';
  }
}

function closeImageModal() {
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  if (modalImage && imageModal) {
    modalImage.src = '';
    imageModal.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
  }

  if (hamburgerMenu) hamburgerMenu.addEventListener('click', openMobileMenu);
  if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  // Theme toggle functionality
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  // Function to set the theme
  function setMode(mode) {
    if (mode === 'dark-mode') {
      body.classList.add('dark-mode');
      themeToggleDesktop.innerHTML = '<i class="fas fa-sun"></i>';
      mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> ';
    } else {
      body.classList.remove('dark-mode');
      themeToggleDesktop.innerHTML = '<i class="fas fa-moon"></i>';
      mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> ';
    }
    localStorage.setItem('mode', mode);
  }

  // Initial setup on page load
  const savedMode = localStorage.getItem('mode') || '';
  setMode(savedMode);

  // Desktop and mobile theme toggles
  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', () => {
      const currentMode = body.classList.contains('dark-mode') ? '' : 'dark-mode';
      setMode(currentMode);
    });
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
      const currentMode = body.classList.contains('dark-mode') ? '' : 'dark-mode';
      setMode(currentMode);
    });
  }

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '');
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + "+";
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + "+";
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(counter);
  });
});
