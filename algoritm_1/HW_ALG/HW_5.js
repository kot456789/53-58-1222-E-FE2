// Task 1

// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// 8 Ввод YES
// 3 Вывод NO


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введите число N: ', (num) => {
//   if (isPowerOfTwo(num)) {
//     console.log('YES');
//   } else {
//     console.log('NO');
//   }
//   rl.close(1);
// });

// function isPowerOfTwo(num) {
//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//     num /= 2;
//   }
//   return num === 1;
// }

// -----------------------------------
// Task 2

// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).


// 179 Ввод 17
// 985 Вывод 22


// function sumDigits(n) {
//     if (n < 10) {
//       return n; // если n состоит из одной цифры, возвращаем это число
//     } else {
//       return n % 10 + sumDigits(Math.floor(n / 10)); // суммируем последнюю цифру числа с суммой остальных цифр
//     }
//   }
  
//   // пример использования функции
//   console.log(sumDigits(179)); //  17
//   console.log(sumDigits(985)); //  22


// ----------------------------------
// Task 3


// Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.


function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i));
    }
  }
  
  function fibonacci(num) {
    if (num < 2) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  
  printFibonacci(10);

//   В данном примере мы создали функцию fibonacci, которая рекурсивно вычисляет число Фибоначчи для заданного индекса num. Затем у нас есть функция printFibonacci, которая принимает число n и выводит числа Фибоначчи до этого числа на экран.

//   Вызов printFibonacci(10) выведет числа Фибоначчи от 0 до 10-го элемента (0, 1, 1, 2, 3, 5, 8, 13, 21, 34).



// ---------------------

// Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.


  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zа-я0-9]/g, ""); // Приводим строку к нижнему регистру и удаляем все символы, кроме букв и цифр

    if (str.length <= 1) {
        return true; // Если строка содержит 0 или 1 символ, она является палиндромом
    } else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1)); // Рекурсивно проверяем внутреннюю часть строки без первого и последнего символа
    } else {
        return false; // Если первый и последний символы не совпадают, строка не является палиндромом
    }
}

console.log(isPalindrome("level"));        // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("javascript"));   // false