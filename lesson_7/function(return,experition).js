// ----------------------------
// return


// Все функции ВОЗВРАЩАЮТ значение undefined, в случае, если мы не укажем return

// function dobule(num){
    // console.log(num ** 2)
// }

// Напишите фукцию которая возводит число в квадрат. Возьмите это число и домножьте на 2 вне функции

// function dobule(num){
//     return num ** 2
// }

// let result = dobule(5) * 2

// console.log(result)

// -----------------------------
// Пример использования return

// function handler(n){
//     return (n > 0) ? true : false
// }

// if (handler(-1)){
//     console.log('Тру!')
// } else {
//     console.log('Фолс!')
// }

// ----------------------------
// Особенность ключевого слово return
// после return команды в функции будут проигнорированы

// function handle(){
//     console.log('test!')
//     return 100
//     console.log('test!')
//     console.log('test!')
//     console.log('test!')
//     console.log('test!')
// }

// console.log(handle())


// ----------------------
// Напишите функцию getLastChar(string), которая получает в качестве аргумента строку и возвращает последнюю букву этой строки


// function getLastChar(string){
//     return string[string.length - 1]
// }

// console.log(getLastChar('word'))


// ----------------------------------------
// function getLastNum(num){
//     let result = ''+num
//     return +result[result.length - 1]
// }

// console.log(getLastNum(912074920323874892374238409284902859230458n))
