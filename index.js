const navEmail = document.querySelector('.nav-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menu = document.querySelector('.menu')
const menuMobil = document.querySelector('.mobile-menu')
const navShopingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('#shoppingCartContainer')
const productDetail2 = document.querySelector('.productDetail2')
const productDetailClose = document.querySelector('.productDetail-close')
const productCardContainer = document.querySelector('.cards-container')
const productMainContainer = document.querySelector('.main-container')

navEmail.addEventListener('click', () => {
  const productDetailIsClosed = productDetail.classList.contains('inactive')

  if(!productDetailIsClosed){
    productDetail.classList.add('inactive')
  }
  productDetail2.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
})

menu.addEventListener('click', () => {
  const productDetailIsClosed = productDetail.classList.contains('inactive')

  if(!productDetailIsClosed){
    productDetail.classList.add('inactive')
  }
  productDetail2.classList.add('inactive')

  menuMobil.classList.toggle('inactive')
})

navShopingCart.addEventListener('click', () => {

  menuMobil.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  productDetail2.classList.add('inactive')

  productDetail.classList.toggle('inactive')
})

productDetailClose.addEventListener('click', () => {
  menuMobil.classList.add('inactive')
  productDetail2.classList.add('inactive')
})

const productList = []
productList.push({
  name : 'Bike',
  price : 120.00,
  image : 'https://olimpica.vtexassets.com/arquivos/ids/524355/Bicicleta-RALI-RIO-Mec%EF%BF%BDnica-29-Hombre--Negro-Verde.jpg?v=637558583193570000'
},
{
  name : 'Mouse',
  price : 25.00,
  image: 'https://http2.mlstatic.com/D_NQ_NP_739866-MLA47920791587_102021-O.jpg'
},
{
  name : 'monitor',
  price : 200.00,
  image: 'https://m.media-amazon.com/images/I/71mU5rpECpL._AC_SL1385_.jpg'
})


function renderCard(list){
  for (product of list){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImage = document.createElement('img')
    productImage.setAttribute('src', product.image)

    productImage.addEventListener('click', function(){
      desktopMenu.classList.add('inactive')
      productDetail.classList.add('inactive')

      productDetail2.classList.remove('inactive')

    })

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$'+product.price
    const productName = document.createElement('p')
    productName.innerText = product.name

    const productFigure = document.createElement('figure')
    const productImg = document.createElement('img')
    productImg.setAttribute('src', './Icons/bt_add_to_cart.svg')

    productFigure.appendChild(productImg)

    productDiv.appendChild(productPrice)
    productDiv.appendChild(productName)

    productInfo.appendChild(productDiv)
    productInfo.appendChild(productFigure)

    productCard.appendChild(productImage)
    productCard.appendChild(productInfo)

    productCardContainer.appendChild(productCard)

  }
}


renderCard(productList)
