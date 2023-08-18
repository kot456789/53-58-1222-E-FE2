// Механизмы работы с localStorage

// localStorage.setItem(key, value) - метод, который инциализирует новую запись в локальном хранилище
// localStorage.getItem(key)        - метод, который позволяет ПОЛУЧИТЬ данные из локального хранилища. Если в хранилище нет записи, метод вернет null
// localStorage.removeItem(key)     - метод, который позволяет УДАЛИТЬ указанную запись с локального хранилищша
// localStorage.clear()             - метод, который уделяет ВСЕ записи


// Запись Hello world! в LS
// localStorage.setItem('key', 'Hello world!')

// Сохранение записи в переменную local_data
// let local_data = localStorage.getItem('key')
// console.log(local_data)

// ----------------------------------
// Задача. Написать событие, которое при нажатии на кнопку в LS будет сохранять значение 1. 
// При повторном нажатии кнопка должна сохранить значение 0

// ---------------------------
// Задача 1
// let btn = document.querySelector('button')

// btn.onclick = () => {
//     let local_data = localStorage.getItem('key')
//     if (local_data == 0){
//         localStorage.setItem('key', 1)
//     } else {
//         localStorage.setItem('key', 0)
//     }
// }

// ---------------------------
// Задача 2.1
// Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

// Задача 2.2
// К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

// Задача 2.3
// Добавить кнопку, которая очищает localStorage.

// let form = document.querySelector('form')
// let input = document.querySelector('.text')
// let read_button = document.querySelector('.read_data')
// let clear_button = document.querySelector('.clear_data')


// form.onsubmit = () => {
//     localStorage.setItem('inp', input.value)
// }

// read_button.onclick = () => {
//     input.value = localStorage.getItem('inp')
// }

// clear_button.onclick = () => {
//     localStorage.removeItem('inp')
//     input.value = ''
// }

// ------------------------
// Задача 3 (Реализовать аналог светлой темы)

// let toogle = document.querySelector('#switch')
// let local_data = localStorage.getItem('theme')

// if (local_data === 'dark'){
//     document.body.style.backgroundColor = 'darkslategray'
//     toogle.checked = true
// }

// toogle.onchange = () => {
//     if (toogle.checked){
//         document.body.style.backgroundColor = 'darkslategray'
//         localStorage.setItem('theme', 'dark')
//     } else {
//         document.body.style.backgroundColor = 'white'
//         localStorage.setItem('theme', 'light')
//     }
// }

// -------------------------------
// Задача 4
// Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно меняться в соответствующую сторону. 
// Значение counter не должно слетать при перезагрузке страницы. 

let butn_incr = document.querySelector('.incr')
let butn_decr = document.querySelector('.decr')
let count = document.querySelector('.count')

let counter = Number(localStorage.getItem('counter'))

count.innerText = counter

butn_incr.onclick = () => {
    localStorage.setItem('counter', ++counter)
    count.innerText = counter
}

butn_decr.onclick = () => {
    localStorage.setItem('counter', --counter)
    count.innerText = counter
}