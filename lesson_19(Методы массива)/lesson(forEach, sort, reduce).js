// Статься сравнения строк
// https://learn.javascript.ru/comparison#sravnenie-strok

// Метод sort
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Метод forEach
// Метод, который позволяет организовать простой цикл по массиву
// Назначение - просто короткая форма записи (одной строкой, по сравнению с обычным циклом for)
// Метод ничего не возвращает (undefined)

// let array = [10,20,30,40]

// array.forEach( (value, index) => console.log(value * 10))

// // альтернатива используя цикл for
// for (let value of array){
//     console.log(value * 10)
// }

// -------------------------------------------------
// Метод sort
// Назначение - сортировка элементов внутри массива по условию колбека
// Возвращает ЭТОТ ЖЕ массив
// array.pop()
// array.shift()
// array.unshift()
// array.push()
// array.reverse()
// array.splice()

// Как и вышеуказанные методы, метод sort мутирует массив. 
// Метод меняет исходный массив

// let fruits = ["Яблоко", "Киви", "Арбус","Клбуника", "Черешня", "Банан", "Манго"]
// fruits.sort()
// console.log(fruits)
//      ['Арбус',  'Банан', 'Киви', 'Клбуника', 'Манго',  'Черешня', 'Яблоко']

// ----------
// Тривиальная сортировка с одним небольшим НО

// let numbers = [4,7,8,6,9,1,5,2,3,10]
// numbers.sort()
// console.log(numbers)
// [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// Решение проблемы с 10
// numbers.sort( (crElem, nxElem) => {
//     if (crElem > nxElem) return 1
//     if (crElem < nxElem) return -1
//     if (crElem === nxElem) return 0
// } )

// Упрощенная форма записи (только для чисел)
// numbers.sort((crElem, nxElem) => crElem - nxElem)
// numbers.sort((a, b) => a - b)

// Сортировка по убыванию
// numbers.sort((crElem, nxElem) => nxElem - crElem)
// console.log(numbers)

// --------------------
// Еще про обратную сортировку строкового типа

// let fruits = ["Яблоко", "Киви", "Арбуз","Клбуника", "Черешня", "Банан", "Манго"]

// Большое решение 
// fruits.sort((crElem, nxElem) => {
//     if (crElem > nxElem) return -1
//     if (crElem < nxElem) return 1
//     if (crElem === nxElem) return 0
// })

// Короткое решение
// fruits.sort().reverse()

// console.log(fruits)

// --------------------------------
// Сортировка объектов

// let products = [
//     {name: 'Велосипед', price: 1000, count: 4},
//     {name: 'Телефон', price: 4000, count: 5},
//     {name: 'Телевизор', price: 5400, count: 1},
//     {name: 'Ножницы', price: 450, count: 14},
//     {name: 'Наушники', price: 600, count: 7},
//     {name: 'Стакан', price: 50, count: 9},
// ]

// Сортировка по количеству товара (пример для числовых сво-св)
// products.sort((a,b) => a.count - b.count)

// Сортировка по имени товара (для строковых свойств)
// products.sort((a, b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// })

// console.log(products)

// -----------------------------------
// Метод reduce
// Назначение - решение аналитических задач (задач агрегации)
// Метод возаращает итоговое значение аккумулятора

// Задача - посчитать сумму всех элементов
let array = [10,20,30,40]

// let sum = 0
// for (let value of array){
//     sum = sum + value
// }
// console.log(sum)

// -----------------
// Решение этой же задачи, используя метод reduce
// let sum = array.reduce((accum, value) => accum + value, '')

// console.log(sum)

// --------------------------
// Задача посчитать сумму всех count'оф в массиве

let products = [
    {name: 'Велосипед', price: 1000, count: 4},
    {name: 'Телефон', price: 4000, count: 5},
    {name: 'Телевизор', price: 5400, count: 1},
    {name: 'Ножницы', price: 450, count: 14},
    {name: 'Наушники', price: 600, count: 7},
    {name: 'Стакан', price: 50, count: 9},
]
// Суума всех count
let sumCount = products.reduce( (acumm, value) => acumm + value.count, 0)

// Сумма price
let sumPrice = products.reduce( (acumm, value) => acumm + value.price, 0)

console.log(sumCount)



