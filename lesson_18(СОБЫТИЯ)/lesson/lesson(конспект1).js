// События в JS
// let div_root = document.querySelector('#root')

// Для определния события необходимо найти элемент и через спеиальное сво-во
// on(любое событие) в виде функции обозначить код, который должен исполниться 
// после исполнения события

// --------------------
// Cобытия мыши

// div_root.onclick = function(){
//     console.log('click!')
// }

// --------------------
// Повторное определение одного типа события фактически перезапишет первый
// div_root.onclick = function(){
//     console.log('click! 2')
// }

// div_root.onmouseup = () => {
//     console.log('mouseup!')
// }

// div_root.onmousedown = () => {
//     console.log('mousedown!')
// }

// ------------------------
// События клавиатуры

// document.onkeydown = () => {
//     console.log('keydown!')
// }

// document.onkeyup = () => {
//     console.log('keyup!')
// }

// -------------------------
// ДЗ
// 1) Напишите программу, которая в консоль будет отображать значение 1
// 2) Сделайте аналог кликера, по нажатию необходимо инкрементировать значение числа и отобразить в консоль
// 3) Текущее значение кликера отображось в синем квадрате


// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event

// -------------------------
// Решение 
// let div_root = document.querySelector('#root')
// let btn_elem = document.querySelector('.btn')
// let btn_reset = document.querySelector('.btn2')
// let btn_big = document.querySelector('.btn3')
// let btn_change = document.querySelector('.btn4')

// let counter = 0
// let count_title = document.createElement('h1')
// div_root.append(count_title)

// btn_elem.onclick = () => {
//     count_title.innerText = ++counter
// }

// btn_reset.onclick = () => {
//     counter = 0
//     count_title.innerText = counter
// }

// let size = {
//     width: 50,
//     height: 50
// }

// btn_big.onclick = () => {
//     size.width += 100
//     size.height += 100
//     div_root.style.width = size.width + 'px'
//     div_root.style.height = size.height + 'px'
// }

// let isChange = true

// btn_change.onclick = () => {
//     div_root.style.backgroundColor = (isChange) ? 'red' : 'blue'
//     isChange = !isChange
// }

// Задание: написать событие для кнопки btn4, которе будет менять
// цвет заднего фона div#root на красный
// Реализовать переключатель, который будет обратно менять цвет на синий при повторном нажатии на кнопку