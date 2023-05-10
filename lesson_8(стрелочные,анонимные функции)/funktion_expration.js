// Function declaration
// Cтандартная функция, которая объявляется отдельно внутри кода

// Пример 1
// function handle(){
//     for(let i = 0; i < 10; i++){
//         if(i === 6){
//             continue
//         }
//         console.log(i)
//     }
//     return 'test'
// }

// console.log(handle())

// function double(num){
//     return num ** 2
// }

// --------------------------
// Function expression

// Функции, которые используются как часть выражения

// ----------------
// Анонимная функция (безымянная функция)

// let double = function(num){
//     return num ** 2
// }

// console.log(double(5))

// ------------------
// Стрелочная функция

// Стрелочная функция используется тогда, когда ее тело состоит (желательно) из 1 строки
// 1 отсутствие слово function
// то что опредлеяется после => сразу попадает в return (без фактического его указания)

// let double = function(num){
//     return num ** 2
// }

// Версия 1
// let double = (num) => num ** 2

// Версия 2
// let double = (num) => {
//     return num ** 2
// }

// console.log(double(5))


// Отличие анонимной функции от стрелочной 
// 1) Синтаксис
// 2) Контекст this
// 3) Техническое отличие prototype

// -------------------
// Оффтоп
// Функция, которая вызывается в момент инициализации
// (() => console.log(123))()


// ------------------------------
// Задача
// 1) Напишите функцию getLastFirst(string), которая получает 
// строковый тип и возвращает конкатенацию первой и последней буквы
// 2) Переписать эту функцию используя все 3 вида функции (обычная, анонимная, стрелочная)

// function getLastFirst(string){
//     let result = string[0] + string[string.length-1]
//     return result
// }

// Версия 2
function getLastFirst(string){
     let result = ''
     for (let i = 0; i < string.length; i++){
         if (!(i === 0 || i === string.length - 1)){
             continue
         }
         result += string[i]
     }
     return result
 }
 
 console.log(getLastFirst('Home'))
 console.log(getLastFirst('Tigran'))
 
 
 // Домашнее задания: понять и перессказать как работает функция выше