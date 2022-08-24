const navEmail = document.querySelector('.nav-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menu = document.querySelector('.menu')
const menuMobil = document.querySelector('.mobile-menu')
const navShopingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')


navEmail.addEventListener('click', () => {
  const productDetailIsClosed = productDetail.classList.contains('inactive')

  if(!productDetailIsClosed){
    productDetail.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
})

menu.addEventListener('click', () => {
  const productDetailIsClosed = productDetail.classList.contains('inactive')

  if(!productDetailIsClosed){
    productDetail.classList.add('inactive')
  }

  menuMobil.classList.toggle('inactive')
})

navShopingCart.addEventListener('click', () => {
  const menuMobilIsClosed = menuMobil.classList.contains('inactive')
  const desktopMenuIsClosed = desktopMenu.classList.contains('inactive')

  if(!menuMobilIsClosed){
    menuMobil.classList.add('inactive')
  }

  if(!desktopMenuIsClosed){
    desktopMenu.classList.add('inactive')
  }

  productDetail.classList.toggle('inactive')
})

