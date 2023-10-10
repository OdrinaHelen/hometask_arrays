// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd numbers.
const oddOrEven = (n) => (n % 2 === 0 ? 'even' : 'odd')

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
const returnArray = (str) => str.split(' ')

// https://www.codewars.com/kata/55b42574ff091733d900002f
const friends = (arr) => arr.filter((el) => el.length === 4)

// Задача на filter
// 1. Отфильтровать массив только с уникальными значениями используя filter и indexOf()
const arrOfSameValues = [1, 2, 3, 1, 4, 6, 7, 4, 5, 8, 7, 9]
const uniqueValues = (arr) => arr.filter((el, i, arr) => arr.indexOf(el) === i)

// 2. Отфильтровать продукты дешевле 15
const products = [
  { name: 'Apple', price: 15 },
  { name: 'Banana', price: 8 },
  { name: 'Cherry', price: 3 },
  { name: 'Grape', price: 22 },
  { name: 'Orange', price: 12 },
]

const res = products.filter((el) => el.price < 15)

// 3. Найти объект с автором В
const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
  { title: 'Book 4', author: 'Author C' },
]
const res2 = books.find((el) => el.author === 'Author B')

// задачи sort
// 4. отсортировать по id
const arr2 = [
  { id: 9, title: 'велосипед', price: 45000 },
  { id: 14, title: 'самокат', price: 15000 },
  { id: 7, title: 'сноуборд', price: 20000 },
  { id: 1, title: 'лыжи', price: 22000 },
  { id: 3, title: 'ролики', price: 18000 },
  { id: 13, title: 'коньки', price: 17000 },
  { id: 4, title: 'скейтборд', price: 19000 },
  { id: 15, title: 'парашют', price: 50000 },
  { id: 8, title: 'гироборд', price: 25000 },
  { id: 6, title: 'сёрфборд', price: 27000 },
  { id: 10, title: 'подводные лыжи', price: 55000 },
  { id: 12, title: 'мотоцикл', price: 65000 },
  { id: 11, title: 'санки', price: 5000 },
  { id: 5, title: 'батут', price: 30000 },
  { id: 2, title: 'катамаран', price: 32000 },
]
const res3 = arr2.sort((a, b) => a.id - b.id)

// 5. отсортировать объекты по алфавиту
const people = [
  { name: 'Frank', age: 35 },
  { name: 'Eva', age: 22 },
  { name: 'Hannah', age: 31 },
  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'Jack', age: 27 },
  { name: 'Bob', age: 20 },
  { name: 'David', age: 28 },
  { name: 'Grace', age: 29 },
  { name: 'Isaac', age: 23 },
]
const res4 = people.sort((a, b) => a.name - b.name)
// 6. Отсортиировать по возрасту
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 28 },
  { name: 'Eva', age: 22 },
  { name: 'Frank', age: 35 },
  { name: 'Grace', age: 29 },
  { name: 'Hannah', age: 31 },
  { name: 'Isaac', age: 23 },
  { name: 'Jack', age: 27 },
]
const res5 = people.sort((a, b) => a.age - b.age)

// задачи reduce
// 7. найти сумму четных!! чисел массива.
const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const res6 = numbers22.filter((el) => el % 2 === 0).reduce((acc, value) => acc + value, 0)

// 8.  Используя метод reduce найти наибольшее число массива.
const numbers23 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const res7 = numbers23.reduce((acc, value) => (acc < value ? (acc = value) : acc))
console.log(res7)
// 9.reduce найти объект товара с самой высокой ценой.
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]
const res8 = arr2.reduce((acc, product) => (acc.price > product.price ? acc : product), 0)
console.log(res8)
// 10. Найти среднюю оценку marks у товара
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]

const res9 = arr2.map((el) => {
  const avMark = el.marks.reduce((acc, currentValue) => acc + currentValue, 0) / el.marks.length
  return {
    ...el,
    avMark: avMark,
  }
})

console.log(res9)
