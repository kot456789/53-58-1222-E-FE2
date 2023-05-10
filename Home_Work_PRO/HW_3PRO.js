// ---------------------------
// Task 1

// Напишите функцию checkString(arg), который принимает аргумент строкового типа. Функция должна вывести в консоль первую букву аргумента.

// 	Пример:
// 	checkString(‘Test’)

// 	Результат:
// 	T

// function checkString(arg){
//      return arg[0]
// }

// console.log(checkString('Test'))



//--------------------------------
// Task 2

// Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
// * Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части

// Пример:
//	let result = checkMiddleValue(10,20)
// console.log(result)

// 	Результат:
// 	15


// function checkMiddleValue(num1,num2){
//     return ((num1 + num2) / 2)
// }

// let result = checkMiddleValue(10,20)
// console.log(result)



// ---------------------------------
// Task 3
	
// Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) изменить число по следующему правилу: 
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

// Пример:
	// let result = changeValue(false,25)
// console.log(result)

// 	Результат:
// 	5

// let boolean = false
// let num = 25


// function changeValue(boolean, num){
//     if (boolean){
//         return num ** 2
//     } else {
//         return num ** (1/2)
//     }
// }

// let result = changeValue(boolean, num)

// console.log(result)




// ------------------------------------
// Task 4

// Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)

// Пример:
// 	let result = countString(“строка”)
// console.log(result)

// 	Результат:
// 	3


// function countString(string){
//     let count = 0
//     for (let i = 0; i < string.length; i++){
//         let elem = string[i].toLowerCase()
//         if (elem !== 'а' && elem !== 'о' && elem !== 'у' && elem !== 'с' ){
//             count += 1
//         }
//     }
//     return count
// }

//  console.log(countString('строка'))











// ------------------------------------
// Task 5

// Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента по следующему примеру:
	
// 	createQuence(5)

// 	Результат:

// 	*
// 	**
// 	***
// 	****
// 	*****

// 	Еще пример:
// createQuence(3)

// 	Результат:

// 	*
// 	**
// 	***



// function createQuence(num){
//      let star = '*'
//     for(let i = 0; i < num; i++){
//         console.log(star)
//         star = star + '*'
//     }
// }


// createQuence(5)
// createQuence(3)