const containter = document.createElement('h1')

let counterfromTheStorage = Number(localStorage.getItem('counter')) || 0

containter.innerText = counterfromTheStorage
const increaseButton = document.createElement('button')
const decreaseButton = document.createElement('button')
increaseButton.innerText = 'increase'
decreaseButton.innerText = 'decrease'

increaseButton.addEventListener('click', () => {
  counterfromTheStorage++
  containter.innerText = counterfromTheStorage
  localStorage.setItem('counter', counterfromTheStorage)
})
decreaseButton.addEventListener('click', () => {
  counterfromTheStorage -= 1
  containter.innerText = counterfromTheStorage
  localStorage.setItem('counter', counterfromTheStorage)
})
const counterContainer = document.createElement('div')
root.appendChild(counterContainer)

counterContainer.appendChild(containter)
counterContainer.appendChild(increaseButton)
counterContainer.appendChild(decreaseButton)
