document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('myBtn').addEventListener('click', cartModal)
  document.getElementsByClassName("close")[0].addEventListener('click', cartModal)
})

let counter = 0
let total = 0

const clearCart = () => {
  counter = 0
  total = 0
  document.querySelector('.itemsInCart').innerHTML = ""
  document.getElementById("cart-item-count").innerHTML =  `(${counter})`
  document.querySelector('.total').innerHTML = `Total $${total}`

}

const totalCost = (price) => {
  total += parseFloat(price)
  let totalAmount = total.toFixed(2)
  document.querySelector('.total').innerHTML = `Total $${totalAmount}`
}

const addToCart = (event) => {
  let items = event.target.parentElement.innerText.split('\n')
  let product = document.createElement('span')
  let price = document.createElement('span')
  let li = document.createElement('li')

  price.id = "price"
  product.appendChild(document.createTextNode(items[0]))
  price.appendChild(document.createTextNode(items[1]))
  li.appendChild(product)
  li.appendChild(price)
  document.querySelector('.itemsInCart').appendChild(li)
  counter++
  document.getElementById("cart-item-count").innerHTML =  `(${counter})`

  let priceOfItem = items[1].replace('$', '')

  totalCost(priceOfItem)
}

const cartModal = (event) => {
  let modal = document.getElementById('myModal'), options = event.target

  if(options.matches('#myBtn')) {
    modal.style.display = "block"
  } else if(options.matches('.close')) {
    modal.style.display = "none"
  }
}
