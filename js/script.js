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



// Timer
    // Définir la date cible (2 juin 2023)
    const dateCible = new Date('2023-06-02T00:00:00');

    // Fonction pour mettre à jour le timer
    function mettreAJourTimer() {
      // Obtenir la date actuelle
      const dateActuelle = new Date();

      // Calculer la différence entre la date cible et la date actuelle
      const difference = dateCible - dateActuelle;

      // Calculer les jours, heures, minutes et secondes restants
      const joursRestants = Math.floor(difference / (1000 * 60 * 60 * 24));
      const heuresRestantes = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRestantes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secondesRestantes = Math.floor((difference % (1000 * 60)) / 1000);

      // Mettre à jour les éléments HTML correspondants
      document.getElementById("jours").textContent = formatTemps(joursRestants);
      document.getElementById("heures").textContent = formatTemps(heuresRestantes);
      document.getElementById("minutes").textContent = formatTemps(minutesRestantes);
      document.getElementById("secondes").textContent = formatTemps(secondesRestantes);

      // Vérifier si la date cible est atteinte
      if (difference <= 0) {
        clearInterval(timer); // Arrêter le timer
        document.getElementById("jours").textContent = "00";
        document.getElementById("heures").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("secondes").textContent = "00";
      }
    }

    // Ajouter un zéro devant les nombres inférieurs à 10
    function formatTemps(temps) {
      return temps < 10 ? `0${temps}` : temps;
    }

    // Mettre à jour le timer toutes les secondes
    const timer = setInterval(mettreAJourTimer, 1000);


 