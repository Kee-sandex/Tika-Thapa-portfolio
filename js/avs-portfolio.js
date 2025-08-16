
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle functionality
  const hamburger = document.getElementById('hamburger-menu');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeMenu = document.getElementById('close-menu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileSidebar.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
  });

  closeMenu.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  mobileOverlay.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileSidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Modal functionality
  const imageContainers = document.querySelectorAll('.image-container');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.modal-close');

  function openModal(event) {
    const img = event.currentTarget.querySelector('img');
    if (img) {
      modal.style.display = 'flex';
      modalImage.src = img.src;
    }
  }

  function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
  }

  imageContainers.forEach(container => {
    container.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

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

    // Start counting when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  });

  // Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
    observer.observe(el);
  });
});
