/* Menu Background & Scroll Top */
const navWrapper = document.querySelector('.nav-wrapper'),
  scrollUp = document.querySelector('.scroll-top'),
  bigLogo = document.querySelector('.desktop-logo'),
  navBrand = document.querySelector('.navbar-brand');

window.addEventListener('resize', () => {
  if (window.innerWidth < 992) {
    bigLogo.style.display = "none";
  } else if (window.innerWidth >= 992 && window.scrollY === 0) {
    navWrapper.classList.remove('show');
    navBrand.classList.add('d-lg-none');
    bigLogo.style.display = "block";
  }
});

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 992 && window.scrollY > 50) {
    scrollUp.classList.add('show');
    navWrapper.classList.add('show');
    bigLogo.style.display = "none";
    navBrand.classList.remove('d-lg-none');
  } else if (window.innerWidth >= 992 && window.scrollY < 100) {
    scrollUp.classList.remove('show');
    navWrapper.classList.remove('show');
    bigLogo.style.display = "block";
    navBrand.classList.add('d-lg-none');
  } else if (window.scrollY > 100) {
    scrollUp.classList.add('show');
  } else if (window.scrollY < 100) {
    scrollUp.classList.remove('show');
  }
});