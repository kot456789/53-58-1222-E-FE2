// Cтроковый тип
// Индексация

// let string = 'world'

// // через индекс изменить букву нельзя
// string[0] = 'p'

// console.log(string[0])
// // w

// Чем функция отличается от метода

// repeat()        - фнукция
// world.repeat()  - метод

// -------------------------------------
// String.repeat(n) - сконкатенировать строку с этой строкой n-ое количество раз
// возвращает новую строку

// let world = 'world'

// console.log(world.repeat(2))
// console.log('hello'.repeat(2))

// -------------------------------------
// String.inlcudes(substring) - проверяет, сущетсвует ли подстрока, которая указывается в качестве аргумента, в строке переменной
// возвращает булевый тип (true, false)

// let string = 'Привет мой друг!'

// let result = string.includes('Привет')           true
// let result = string.includes('Привет мой')       true
// let result = string.includes('друг')             true
// let result = string.includes('мой')              true
// let result = string.includes('т мой др')         true

// let result = string.includes('привет')           false          
// let result = string.includes('друг мой')         false

// console.log(result)

// --------------------
// Напишите функцию checkString(string, substring), которая принимает в качестве аргумента два строковых типа
// функуция должна проверить, является ли второй аргумент частью подстроки первого аргумента
// если это так, функция должна вывести в консоль сообщение "Данная подстрока сущесвтует в строке", в противном случае
// "Данной подстроки нет в строке"

// function checkString(string, substring){
//     if (string.includes(substring)){
//         console.log("Данная подстрока сущесвтует в строке")
//     } else {
//         console.log("Данной подстроки нет в строке")
//     }
// }


// checkString('Солнце!', 'Солн')

// -------------------------------------
// String.startsWith(subtring) - метод, котоый проверяет, начинается ли наша строка с указанной подстроки
// возвращает булевый тип (true, false)

// let string = 'Привет мой друг!'

// let result = string.startsWith('При')            true
// let result = string.startsWith('Прив')           true
// let result = string.startsWith('Привет')         true

// let result = string.startsWith('друг!')          false
// let result = string.startsWith('мой')            false

// ----------------------------
// String.endsWith(subtring) - метод, котоый проверяет, заканчивается ли наша строка с указанной подстроки
// возвращает булевый тип (true, false)
// let string = 'Привет мой друг!'

// let result = string.endsWith('При')            false
// let result = string.endsWith('Прив')           false
// let result = string.endsWith('Привет')         false

// let result = string.endsWith('друг!')          true
// let result = string.endsWith('мой друг')      


// console.log(result)

// ---------------------------------
// String.indexOf(substring) - метод ищет индекс начала указанной подстроки в основной строке.
// Если подстрока не будет найдена - метод возвращает -1
// возращает найденный индекс

// let string = 'Привет мой друг!'

// let result = string.indexOf('мой')       7      
// let result = string.indexOf('друг')      11
// let result = string.indexOf('привет')    -1

// ------
// indexOf принимает второй аргумент, который указывает индекс старта поиска

// let string = 'Привет мой мой друг!'

// let result = string.indexOf('мой')           7    (первый попавшийся "мой" слева-направо)
// let result = string.indexOf('мой', 8)        11   (поиск начиная с 8 индекса)
 

// --------------------
// String.lastIndexOf(substring) - метод ищет индекс начала указанной подстроки в основной строке.
// Если подстрока не будет найдена - метод возвращает -1.
// Отличие от indexOf заключается в том, что поиск начинается справа-налево (у indexOf слева-направо)
// возращает найденный индекс

// let string = 'Привет мой мой друг!'
// let result = string.lastIndexOf('мой')       11
// console.log(result)

// -----------------------
// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    

// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32

// let result = string.indexOf('date', string.indexOf('date') + 1)
// console.log(result)


// ---------------------------

// Повторить метод includes
// includes(string, substring)