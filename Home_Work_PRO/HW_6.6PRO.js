// --------------------
// Task 1

// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: ['key1','key2','key3','key4']

// Решение


// function getKeys(obj) {
//   let keys = [];

// for(let key in obj) {
//     keys.push(key);
//   }

// return keys;
// }

// let someObj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
// };

// console.log(getKeys(someObj)) 


// -----------------------------
// Task 2


// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]

// Результат: 3

// Решение


// function getAvg(array) {
//     let sum = 0;
//     for(i = 0; i < array.length; i++) {
//       sum += array[i];
//       } 
//       sum = sum / array.length;
//       return sum.toFixed(0);
//     }
  
//   console.log(getAvg([1,2,3,4,5]))

// -----------------------
// Task 3

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, которая посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

// Решение


// function countString(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// let array = [1, true, '3', 'value1', 9, 'key'];
// countString(array)


// ---------------------------
// Task 4

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]



// Решение



// function getEntries(obj) {
//   let entries = [];
//   for (let key in obj) {
//     entries.push([key, obj[key]]);
//   }
//   return entries;
// }

// let someObj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
// };

// console.log(getEntries(someObj))



// ------------------------------
// Task 5

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

	
// Пример: [1,true,'3','value1',9,'key']


// 	Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }
	


// Решение


function convertArrayToObject(array) {
  var result = {};
  for (var i = 0; i < array.length; i++) {
    result['key' + (i+1)] = array[i];
  }
  return result;
}

var array = [1,true,'3','value1',9,'key'];
var object = convertArrayToObject(array);
console.log(object)
	