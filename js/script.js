const hamburgerToggler = document.querySelector('.hamburger')
const menuItems = document.querySelector('.menu-items')

const toggleNav = () => { //Event
  hamburgerToggler.classList.toggle('open')

  const ariaToggle = hamburgerToggler.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
  hamburgerToggler.setAttribute('aria-expanded', ariaToggle)
  menuItems.classList.toggle('open')
}
hamburgerToggler.addEventListener('click', toggleNav)

// Resize 
new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 768) {
    menuItems.style.transition = "transform 0.3s ease-out"
  }else {
    menuItems.style.transition = "none"
  }
}).observe(document.body)


// FAQ
const allIcon = document.querySelectorAll('.visible-question img')


allIcon.forEach(icon => {
  icon.addEventListener('click', function() {
    
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight
    const currentQuestions = this.parentNode.parentNode.childNodes[3]

    if(this.src.includes('plus')) {
      this.src = './images/minus-solid.svg'
      gsap.to(currentQuestions, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
    }else if(this.src.includes('minus')) {
      this.src = './images/plus-solid.svg'
      gsap.to(currentQuestions, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
    }
  })
})

