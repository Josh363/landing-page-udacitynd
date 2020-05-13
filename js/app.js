//global variables
const navItems = document.querySelectorAll('section')
const navList = document.querySelector('#navbar__list')

//build navigation menu
navItems.forEach((item) => {
  const navItem = `<li class="nav-item"><a href="#${item.id}" class="menu__link" data-link="${item.id}">${item.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navItem)
})

//add scroll when nav item is clicked
navList.addEventListener('click', (e) => {
  e.preventDefault()
  requestedScrollSection = document.getElementById(e.target.dataset.link)
  requestedScrollSection.scrollIntoView({ behavior: 'smooth' })
})

//add active class when section is in viewport
