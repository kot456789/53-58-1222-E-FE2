// -------------------------------
// -------------------------------

//-------------------------------
// Урок Алгоритмы 24.04.23.


// const array = [1,2,3,5,6,8,9,-1,-5];

// let sumArr = array[0];
// for(let i = 1;i< array.length;i++){

// if(array[i] < sumArr){
// sumArr = array[i]

// }
// }

// console.log(sumArr);

// ------------------------

// let array = [1,-2,3,5,-6,8,-9,-1,-5];
// let min = array[0];
// let min2 = min;
// for(let i=1; i<array.length;i++){
//     if(array[i]<min){
//         min=array[i];
//     }
//     else if(array[i]<min2){
//         min2=array[i];
//     }
   


// }
// console.log(min);
// console.log(min2);

// // --------------------------

// function find(arr) {
//     if(arr.length < 2) {
//       return undefined;
//     }
    
//     let min1 = Infinity
//     let min2 = Infinity
    
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] < min1) {
//         min2 = min1;
//         min1 = arr[i]; 
//       } else if(arr[i] < min2) {
//         min2 = arr[i];
//       }
//     }
//     return [min1, min2];
//   }


// ----------------------------

// 
// Для нахождения 3 и 5 по минимальности элемент в массиве можно использовать следующий алгоритм:

// Инициализировать переменные min3 и min5 со значением Infinity (бесконечность).
// Проитерироваться по каждому элементу массива.
// На каждой итерации, если текущий элемент меньше min3, присвоить min3 значение текущего элемента.
// После этого, если текущий элемент меньше min5, присвоить min5 значение текущего элемента.
// В конце выполнения алгоритма, значения min3 и min5 будут содержать минимальные элементы, соответственно, 3 и 5.
// Ниже представлен пример кода на JavaScript:






// const array = [1, 2, 3, 5, 6, 8, 9, -1, -5]
// let min3 = Infinity
// let min5 = Infinity

// array.forEach((element) => {
//   if (element < min3) {
//     min3 = element
//   }

//   if (element < min5 && element > min3) {
//     min5 = element
//   }
// })

// console.log(`Минимальное значение, ближайшее к 3: ${min3}`);
// console.log(`Минимальное значение, ближайшее к 5: ${min5}`);



// Минимальное значение, ближайшее к 3: 1
// Минимальное значение, ближайшее к 5: 2
// Обратите внимание, что алгоритм ищет минимальные значения ближайшие к 3 и 5, но не обязательно равные им. Если необходимо искать значения, равные 3 и 5 по минимальности, то условие во втором if-блоке должно быть изменено на element <= min5 && element >= min3.



let names = [
  {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
  {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
  {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
  {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
  {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
  {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
  {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
  {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
  {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]