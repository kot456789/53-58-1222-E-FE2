// ---------------------
// Создайте в программе цикл, который выведет диапазон чисел от 1900 до 2023 с условием:  значения выводимые в к консоль должны быть отражать значение високосного года по примеру:
// 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924, 1920, 1916, 1912, 1908, 1904

// for (let i = 1900; i <= 2023; i++){
//     if (i % 4 == 0 && (i % 400 == 0 || i % 100 != 0)){
//         console.log(i)
//     }
// }

// Создайте в программе цикл, который выведет диапазон чисел от 0 до 100 с условием:  значения выводимые в к консоль должны быть отражать значение простого числа
// Пример результата:
// 2
// 3
// 5
// 7
// 11
// …
// 97


// for (let i = 0; i <= 100; i++) {
//       for (let j = 2; j <= i; j++) {
//         if (i % j === 0 && j < i) {
//           break;
//         } else if (j === i) {
//           console.log(i);
//         }
//       }
//     }


// for(let i = 2; i <= 100; i ++) {
//     let isPrise = true;
//    for (let j = 2; j < i; j ++){
//         if (i % j == 0){
//            isPrise = false;
//           break;
//         }
//    }
//     if (isPrise){
//        console.log(i)
//     }
// }


// В программе задана переменная word со строковым значением. Используя цикл, выведите обратный порядок букв согласно примеру:
// Пример переменной:

// let word = 'hello';

// for (let i = word.length -1; i >= 0; i--){
//     console.log(word[i])
// }

// Пример результата:
// o
// l
// l
// e
// h

// В программе задана переменная word со строковым значением. Напишите программу, которая перевнет строковое значение согласно примеру:
// Пример переменной:

// let word = 'hello';
// let reverseWord = ''

// for (let i = word.length -1; i >= 0; i--){
//     reverseWord += word[i]
// }
// console.log(reverseWord)

// Решение с методом reverse
// let word = 'hello';
// console.log(word.split('').reverse().join(''))
