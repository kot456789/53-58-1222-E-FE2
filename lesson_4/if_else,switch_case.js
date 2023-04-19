// let a = 'string'

// if (a == 'string'){
//     console.log('great!')
// }

// ------------------------------
// Напишите программу, которая в зависимости от булевого типо переменной а будет делать:
// Если будет true - выведет в консоль текст "Правда"
// Если false - текст 'Ложь' 

// let a = false

// if (a){
//     console.log('правда')
// } else if (!a){
//     console.log('ложь')
// }


// ---------------------------------------
// switch ... case ...

// let a = 1

// switch (a) {
//     case 1:
//         console.log('велосипед')
//         break
//     case 3:
//         console.log('ролики')
//         break
//     case 2:
//         console.log('самокат')
//         break 
//     default: 
//         console.log('none')
//         break
// }

// аналог на if 

// if (a == 1){
//     console.log("велосипед")
// } else if (a == 2){
//     console.log("самокат")
// } else if (a == 3){
//     console.log("ролики")
// } else {
//     console.log('none')
// }

// ------------------------------
// Тернарный условный оператор

// (condition) ? value1 : value2

// let a = 10
// let b = (a == 10) ? 'YES' : 'NO'

// console.log(b)
//      'YES'

// -----------
// Вложенность 

// let a = '-'

// let b = (a == '*') ? 'умножить' : 
//             (a == '+') ? 'прибавить' : 
//                 (a == '/') ? 'деление' : 'разница'

// console.log(b)


// Задание:
// Преобразовать решение используя тернарный оператор

// let temp = 25
// let weather = "clear"

// let activity = ''

// if (temp >= 25 && weather == 'clear'){
//     activity = 'golf'
// } else if (temp >= 10 && temp <= 24 && weather == 'clear'){
//     activity = 'bowling'
// } else {
//     activity = 'hiking'
// }

// let temp = 25
// let weather = "clear"

// let activity = (temp >= 25 && weather == 'clear') ? 'golf' :
//                     (temp >= 10 && temp <= 24 && weather == 'clear') ? 'bowling' : 'hiking'

