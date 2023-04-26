// -------------------------
// Введение в функции

// console.log('-_'.repeat(13))
// console.log('Привет дорогой пользователь')
// console.log('-_'.repeat(13))

// console.log('-_'.repeat(13))
// console.log('Привет дорогой пользователь')
// console.log('-_'.repeat(13))

// console.log('-_'.repeat(13))
// console.log('Привет дорогой пользователь')
// console.log('-_'.repeat(13))


// -----------------------
// Более удобное решение 

// function sayHi(){
//     console.log('-_'.repeat(13))
//     console.log('Привет дорогой пользователь')
//     console.log('-_'.repeat(13))
// }

// sayHi()

// sayHi()

// sayHi()

// -----------------------
// Аргументы функций

// Решение без аргументов

// function sayHiForTigran(){
//     console.log('-_'.repeat(13))
//     console.log('Привет дорогой Tigran')
//     console.log('-_'.repeat(13))
// }

// function sayHiForAlex(){
//     console.log('-_'.repeat(13))
//     console.log('Привет дорогой Alex')
//     console.log('-_'.repeat(13))
// }

// sayHiForTigran()

// sayHiForAlex()

// --------------------
// Решение с аргументом

// function sayHi(name){
//     console.log('-_'.repeat(13))
//     console.log(`Привет дорого ${name}`)
//     console.log('-_'.repeat(13))
// }

// // sayHi('Tigran')
// // sayHi('Alex')
// // sayHi('Neena')

// sayHi(100)
// sayHi(true)


// -----------------------------
// Другой пример функции

// function sum(a,b){
//     console.log(a + b)
// }

// sum(5, 10)
// sum('test', 10)

// sum(true, 10)
// sum(false, 10)



// ----------------------------------------------
// Задача 1. Напишите функцию (double), которая будет получать аргумент (число) и выводит его квадрат в консоль

// function double(num){
//     console.log(num ** 2)
// }

// double(10)
// double(4)

// ---------------
// Задача 2. Напишите функцию checkString, которая получает к качестве аргумента строку и проверяет
// являеется ли строка действительно строкой. Если будет строка - функция должна вывести в консоль ответ "Это строка"
// В противном случае "Не строка"

// function checkString(str){
//     if (typeof(str) == 'string'){
//         console.log('Это строка')
//     } else {
//         console.log('Это не строка')
//     }
// }

// checkString(123)
// checkString('string')

// ---------------
// Задача 3. Напишите функцию checkMath, которая получает два аргумента (числа). 
// Функция должна проверить, делится ли первый аргумент на второй без остатка. 
// Если остаток есть, функция должна вывести в консоль ответ "Не делится", в противном случае "Делится"


// Решение 1
// function checkMath(num1, num2){
//     if (num1 % num2 == 0){
//         console.log('Делится')
//     } else {
//         console.log('Не делится')
//     }    
// }

// checkMath(10,5)
// checkMath(10,9)

// Доработать решение используя тернарный оператор
// Решение 2

// function checkMath(num1, num2){
//     console.log((num1 % num2 == 0) ? 'Делится' : 'Не делится')   
// }

// checkMath(10,5)
// checkMath(10,9)







