//  -------------------
// Копия массивов (объектов)

// Не глубокое копирование
// let a = [1,2,3,4,5,6,7]
// let b = a.slice()


// console.log( a === b)

// -------------------
// Не глубокое копирование

// let users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'John'},
//     {id: 3, name: 'Neena'}
// ]

// let users_copy = users.slice()

// users_copy[2].id = 100

// console.log(users)
// console.log(users_copy)

// Не глубокое копирование не позволяет полностью скопировать элементы массива
// [
//     { id: 1, name: 'Alex' },
//     { id: 2, name: 'John' },
//     { id: 100, name: 'Neena'}
//   ]
//   [
//     { id: 1, name: 'Alex' },
//     { id: 2, name: 'John' },
//     { id: 100, name: 'Neena' }
//   ]

// ------------------------------
// Глубокое копирование

// JSON.stringify()     - из JS объекта в JSON (строку)
// JSON.parse()         - из строки (JSON) в JS объект

// let users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'John'},
//     {id: 3, name: 'Neena'}
// ]

// let users_copy = JSON.parse(JSON.stringify(users))

// users[2].id = 100

// console.log(users)
// console.log(users_copy)

// [
//     { id: 1, name: 'Alex' },
//     { id: 2, name: 'John' },
//     { id: 100, name: 'Neena' }
//   ]
//   [
//     { id: 1, name: 'Alex' },
//     { id: 2, name: 'John' },
//     { id: 3, name: 'Neena' }
// ]

// ----------------------------------------
// Деструктуризирующее присвоение (Дестукрутризация)
// Данный процесс позволяет одной строкой определить сразу несколько переменных (1 строкой)

// let [a,b,c] = [10,20,30]

// console.log(a)    10
// console.log(b)    20
// console.log(c)    30

// --------------------
// let [a,b,c,d,e] = [10,20,30]

// console.log(a)   10
// console.log(b)   20
// console.log(c)   30

// console.log(d)   undefined
// console.log(e)   undefined

// --------------------
// let [a,b,c] = [10,20,30,40,50]

// console.log(a)   10
// console.log(b)   20 
// console.log(c)   30

// console.log(d)   ошибка 
// console.log(e)   ошибка


// -------------------------------
// Задача 1
// Задан массив
let products = [
    ['Cамокат', 400],
    ['Велосипед', 1000],
    ['Ролики', 540],
    ['Ракетки', 670]
]

// Необхдимо в консоль вывести значение цены товаров с 20 процетной скидкой

// for (let elem in products){
//     let [title, price] = elem
//     console.log(price * 0.8)
// }

// ------------
// Изменение одной записи
products[0][1] *= 0.8

console.log(products)