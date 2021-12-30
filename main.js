/* abre e fecha o menu quando clicar no icone:hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em u mitem do menu,esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials Carousel slider Swiper */
const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

ScrollReveal().reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonals,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* botao voltar para o topo */

function backToTop() {
  const backTopTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backTopTopButton.classList.add('show')
  } else {
    backTopTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
