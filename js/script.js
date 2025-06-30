// Carousel Sliding
const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

if (track && dots.length > 0) {
  function goToSlide(slideIndex) {
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
    currentSlide = slideIndex;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      goToSlide(slideIndex);
    });
  });

  // Auto-slide
  setInterval(() => {
    const nextSlide = (currentSlide + 1) % dots.length;
    goToSlide(nextSlide);
  }, 3000);
}

// Password Toggler
const passwordInput = document.getElementById('password');
const showIcon = document.querySelector('.show-password');
const hideIcon = document.querySelector('.hide-password');

if (passwordInput && showIcon && hideIcon) {
  hideIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    hideIcon.style.display = 'none';
    showIcon.style.display = 'inline-block';
  });

  showIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    showIcon.style.display = 'none';
    hideIcon.style.display = 'inline-block';
  });
}

// Dropdown Toggler
const toggleButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (toggleButton && dropdownMenu) {
  toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  dropdownMenu.querySelectorAll('li').forEach(link => {
    link.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
  });
}

// Sidebar Navigation Active Toggle
const navLinks = document.querySelectorAll('.sidebar-nav a');
if (navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Custom Alert
const closeBtn = document.getElementById('closeAlertBtn');
const alertBox = document.getElementById('customAlert');

if (closeBtn && alertBox) {
  closeBtn.addEventListener('click', () => {
    alertBox.style.display = 'none';
  });
}

