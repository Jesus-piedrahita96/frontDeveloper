const navEmail = document.querySelector('.nav-email')
const desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
})

const menu = document.querySelector('.menu')
const menuMobil = document.querySelector('.mobile-menu')

menu.addEventListener('click', () => {
  menuMobil.classList.toggle('inactive')
})

const navShopingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

navShopingCart.addEventListener('click', () => {
  productDetail.classList.toggle('inactive')
})