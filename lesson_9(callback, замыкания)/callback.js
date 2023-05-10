// Callback
// Это функция, которая указывается в качестве аргумента другой функции

// function handle(callback){
//     let a = callback()
//     console.log(a)
// }

// handle(() => 'test')

// handle(() => 'STRING!')

// ------------------------------
// Задача: напишите функцию getCondition(arg1,arg2,sign)
// Первый и второй аргумент фактически определяют числовой тип, а sign определяет знак сравнения
// '>','<','==','!='
// 

// function getCondition(a,b,sign){
//     if (sign === '>'){
//         console.log( (a > b) ? 'Правда' : 'Ложь' )
//     } else if (sign === '<'){
//         console.log( (a < b) ? 'Правда' : 'Ложь' )
//     } else if (sign === '=='){
//         console.log( (a == b) ? 'Правда' : 'Ложь' )
//     } else if (sign === '!='){
//         console.log( (a != b) ? 'Правда' : 'Ложь' )
//     } else {
//         console.log('Неизвестный знак сравнения')
//     }
// }

// getCondition(10,20,'>=')

// getCondition(10,20,'<')

// getCondition(100,15,'!=')

// function getCondition(callback){
//     if (callback()){
//         console.log('Правда')
//     } else {
//         console.log('Ложь')
//     }
// }

// getCondition(() => 10 > 100)
// getCondition(() => 10 >= 100 || 10 < 60)
// getCondition(() => isNaN(10))

// ------------------------
// Задача. Напишите функцию calc(), которая будет в качестве аргумента получать колбек с матем. высилением.
// Функция должна вернуть результат мат. вычислений

// Пример вызова
// let a = calc(() => 10 + 10)
// 20

// let a = calc(() => 10 / 10 * 10 ** 2)
// 100

// function calc(callback){
//     let result = callback()
//     return result
// }

// let a = calc(() => 10 / 10 * 10 ** 2)

// console.log(a)

// -----------------------------------
// callback с аргмуентом

// function handle(callback){
//     let result = callback(10,20)
//     console.log(result)
// }

// handle((a,b) => a * b)
// handle(() => 10)
// handle((a) => a - 10)


// https://developer.mozilla.org/ru/docs/Glossary/Callback_function
// https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback
// https://learn.javascript.ru/callbacks

// ----------------------------


// let result = checkString('string', () => 'g')
// console.log(result)
// => 1

// let result = checkString('test', () => 't')
// console.log(result)
// => 2

// function checkString(arg1, callback){
//     let count = 0;
//     for(let i = 0; i < arg1.length; i++){
//       let result = callback();
//       if(result === arg1[i]){
//         count +=1;
//       }
//     } return count;
    
//   }
//   let result1 = checkString('hello', () => 'l')
//   console.log(result1)