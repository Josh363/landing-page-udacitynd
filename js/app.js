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

//helper function to check if element is in viewport
//used https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}

//add active class to section element when section is in viewport
window.addEventListener('scroll', (e) => {
  navItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('active')
    } else {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
    }
  })
})
