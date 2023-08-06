// filter( value => value > 5) +
// find( value => value > 5) +
// findIndex( value => value > 5)+
// map( value => value > 5) +
// forEach +
// reduce +
// sort((currentValue, nextValue) => currentValue - nextValue)


// -----------------------------------

// Задача: Посчитайте среднее арифметическое элементов в массиве.
// Исходный массив: [10, 20, 30, 40, 50]
// Ожидаемый результат: 30

// let a = [10, 20, 30, 40, 50]
// let result = a.reduce((sum, value) => sum + value / (value / a.length))

// console.log(result)

// Задача: Извлеките все уникальные символы из массива строк и объедините их в одну строку.
// Исходный массив: ["apple", "orange", "banana"]
// Ожидаемый результат: "apleorngb"

// let a = ["apple", "orange", "banana"]

// let step1 = a.reduce((accum,value) => accum + value).split('')
    
// let new_array = []
// let result = ''
// for(let elem of step1){
//     if (!new_array.includes(elem)){
//         result = result + elem
//         new_array.push(elem)
//     }
// }

// console.log(new_array)
// console.log(result)

// -----------------
// Короткое решение

// let a = ["apple", "orange", "banana"]

// let result = a
//                 .reduce((accum,value) => accum + value)
//                 .split('')
//                 .reduce((accum, value) => {
//                     if (accum.includes(value)){
//                         return accum
//                     }
//                     return [...accum, value]
//                 },[])
//                 .join('')
    
// console.log(result)

// ---------------------------
// Задача: Переверните порядок элементов в массиве.
// Исходный массив: [1, 2, 3, 4, 5]
// Ожидаемый результат: [5, 4, 3, 2, 1]

// Простое решение
// let a = [1, 2, 3, 4, 5]
// a.reverse()
// console.log(a)

// ---------------------
// let a = [1, 2, 3, 4, 5]
// let b = []
// for (let i = a.length - 1; i >= 0; i-- ){
//     b.push(a[i])
// }
// console.log(b)

// -------------------------
// let a = [1, 2, 3, 4, 5]
// let result = a.reduceRight((acum, value) => [...acum, value], [])

// console.log(result)
// ----------------------