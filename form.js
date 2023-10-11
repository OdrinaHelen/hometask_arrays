const form = document.querySelector('.product-form-container')
const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')

// массив объектов
let productArray = localStorage.getItem('products') || []

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const newProduct = {
    name: nameInput.value,
    price: priceInput.value,
  }

  productArray.push(newProduct) // массив обновляется
  localStorage.setItem('products', JSON.stringify(productArray))

  nameInput.value = ''
  priceInput.value = ''
})
