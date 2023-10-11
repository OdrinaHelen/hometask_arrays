const num = '1'
// console.log(typeof +num) parseInt Number() parseFloat
// toString String() '' + obj
const newarr = Object.toString(num)
// console.log(typeof newarr)
// console.log(typeof ('' + 1))

const obj = { user: 'name' }
// console.log('myobj' + obj)
// console.log(String(obj))
// console.log(Object.toString(obj))

// общение с сервером и localStorage через строки
// по структуре как объект но при этом он является строкой

const ourObj = {
  name: 'Lilya',
  city: 'Berlin',
  stack: {
    frontEnd: ['css', 'html', 'js'],
    backEnd: ['node.js', 'express'],
  },
  adress: {
    city: 'Berlin',
    street: 'Strasses',
    house: 24,
    rooms: {
      kitchen: {
        square: '24',
        object: ['chairs, table'],
      },
      livingRoom: '42m2',
    },
  },
}
console.log(ourObj.name)

localStorage.setItem('anotherStudent', JSON.stringify({ name: 'Philipp' }))

//превращает объект в строчный вариант объекта = JSON
const objStringified = JSON.stringify(ourObj) // отпр на сервер либо в localStorage
localStorage.setItem('userData', objStringified)

const userFromLocalStorage = localStorage.getItem('userData') // JSON/ string
const parseUser = JSON.parse(userFromLocalStorage) // from JSON to object
console.log(parseUser)
console.log(parseUser.name)
