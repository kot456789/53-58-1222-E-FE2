// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
// Cправочник по событиям

// https://learn.javascript.ru/bubbling-and-capturing
// вслпытие и погружение
// ------------------------------------
// Аннотация: addEventListener, event, event.target, stopPropogation. preventDefault, removeEventListener

// --------------------------
// Метод addEventListener 
// метод позволяет задать события для DOM-узла

// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', () => {
//     console.log('click!')
// })

// div_root.addEventListener('click', () => {
//     console.log('click! 2')
// })

// document.addEventListener('keydown', () => {
//     console.log('keydown!')
// })

// ------------------
// Объект Event
// объект event содержит очень подробную информацию о событии

// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', (event) => {
//     if (event.altKey){
//         console.log('click + alt')
//     }
// })

// ----------------------
// document.addEventListener('keydown', (event) => {
//     console.log(event.key)
// })

// Выведите в косноль значение кнопки клавиутры, которое было нажато

// ---------------------------------------------
// Cделайте горячую клавишу, которая будет выводить в консоль сообщение "Привет!"
// Необходимо нажать комбинацию shift + 'G' вне зависимости от раслкадки

// document.addEventListener('keydown', (event) => {
//     if (event.code === 'KeyG' && event.shiftKey){
//         console.log('Привет!')
//     }
// })

// -----------------------------------
// сво-во event.target
// Данное сво-во передает значение ссылки на DOM узел, где было совершенно событие
// let div_root = document.querySelector('#root')
// let div_block = document.querySelector('.block')

// document.addEventListener('click', (event) => {
//     if(event.target.id === 'root'){
//         event.target.remove()
//     }
// })

// ------------------------
// target на практике

// let form = document.querySelector('form')

// form.addEventListener('change', (event) => {
//     console.log(event.target.value)
// })

// -------------------------------------------------------------
// Всплытие события 
// Для того, чтобы отключить всплытие события, необходимо для дочернего элемента вызвать 
// метод event.stopPropogation()
// let div_root = document.querySelector('#root')
// let div_block = document.querySelector('.block')

// div_root.addEventListener('click', () => {
//     console.log('click root!')
// })

// div_block.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('click block!')
// })

// -------------------------------------------------------------
// Привидение бразуера к дефолтным настройкам 
// event.preventDefault()

// Задача: подятнуть данные с инпута через кнопку Отправить
// Cтраница будет автоматически обновлена
// Чтобы отключить это обновление использует preventDefault

// let form = document.querySelector('form')
// let input = document.querySelector('input')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(input.value)
// })

// -------------------------
// Отключение переадресации для загаловка с классом title_text

// let title = document.querySelector('.title_text')

// title.addEventListener('click', (event) => {
//     event.preventDefault()
// })

// ----------------------------------------------------------------
// Метод, который удаляет событие с ранее указанного DOM узла
// removeEventListener()

// Так работать не будет
// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', () => {
//     console.log('click!')
// })

// div_root.removeEventListener('click', () => {
//     console.log('click!')
// })

// ------------------------------
// Так будет работать

// let div_root = document.querySelector('#root')

// let handler = () => {
//     console.log('click!')
// }

// function handler(e){
//     console.log('click!', e)
// }

// div_root.addEventListener('click', handler)

// div_root.removeEventListener('click', handler)
