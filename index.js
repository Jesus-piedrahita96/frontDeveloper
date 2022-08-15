const navEmail = document.querySelector('.nav-email')
const desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
})