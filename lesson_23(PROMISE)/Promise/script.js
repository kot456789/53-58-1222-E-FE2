// Доп Литература
// https://learn.javascript.ru/promise
// https://habr.com/ru/articles/439746/

// Асинхронный код - это тот код, которому требуется какое-то время на выполнение 

// setTimeout() - функция которая формирует задержку в мс для указанного кода

// -------------------------------------
// Пример работы асихнронной конструкции
// Результат работы:
// 2 
// 3
// 1

// setTimeout(() => {
//     console.log(1)
// }, 5)

// console.log(2)

// console.log(3)

// ---------------------
// Другой пример

// function func1(){
//     setTimeout(() => {
//         console.log(1)
//     }, Math.random() * 5)
// }

// function func2(){
//     setTimeout(() => {
//         console.log(2)
//     }, Math.random() * 5)
// }

// func2()
// func1()

// ------------------------------
// Такойже пример с непредсказуемым результатом без функции

// setTimeout(() => {
//     console.log(1)
// }, Math.random() * 5)

// setTimeout(() => {
//     console.log(2)
// }, Math.random() * 5)

// ------------------------
// Решение непредсказуемого результата кроется в вложенности

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//     }, Math.random() * 5)
// }, Math.random() * 5)


// ----------------------------------
// Объект Promise как инструмент работы с асинхронными коснтрукциями
// Promise - это объект который позволяет удобно работать с асихнронными кодом

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1)
//         resolve()
//     }, Math.random() * 5)
// })

// promise.then(() => {
//     console.log(2)
// })

// Результат:
// 1
// 2

// -----------------------------
// Передача аргументов в метод then

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = [1,2,3]
//         console.log(a)
//         resolve(a)
//     }, Math.random() * 5)
// })

// promise.then((a) => {
//     a.push(4)
//     console.log(a)
// })

// Результат
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ]


// --------------------------------
// reject (методы catch и finally)

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('start promise')
//         let a = [1,2,3]
//         reject('error !!!')
//         // resolve(a)
//     }, Math.random() * 5)
// })

// В случае, если promise перейдет в состояние reject, тогда выполнится тело метода catch.
// если промис перейдет в состояние resolve, тогда выполнится тело метода then.

// promise.then((a) => {
//     console.log(a)
// })
// .catch((e) => {
//     console.log(e)
// })
// .finally(() => {
//     console.log('finally!')
// })

// finaly позволяет выполнить далее цепочку кода вне зависимости от результата работы промиса. 

// --------------------------------
// Promise.all() метод, который позволяет указать n-ое количество промисов,
//  и сам метод дожидается, пока выполнятся все указанные промисы

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 200)
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20)
//     }, 100)
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//         // reject()
//     }, 2000)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((a) => console.log(a))
//     .catch(() => console.log('error!'))

// Задача метода - получать со всех промисов resolve и выполнить then только тогда, когда все промиси успешно выполняться
// если хотя бы 1 промис из списка перейдет в reject, тогда главная обвертка выполнит тело метода catch.

// ----------------------------------
// Пример цепочки вызова асихнронного кода 

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log(1)
//         res()
//     },200)
// })

// promise.then(() => {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log(2)
//             res()
//         },100)
//     })
// })
// .then(() => {
//     console.log(3)
// }) 