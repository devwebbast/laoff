// Navbar Responsive
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links ul li");

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

navLinksItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu');
  });
});

// FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



