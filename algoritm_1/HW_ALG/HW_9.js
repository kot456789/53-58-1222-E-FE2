// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.


// Решение:

// function findKthElement(arr1, arr2, k) {
//      let mergedArr = [...arr1, ...arr2];
//       mergedArr.sort((a, b) => a - b);
//        return mergedArr[k-1];
//      } const arr1 = [100, 112, 256, 349, 770];
//       const arr2 = [72, 86, 113, 119, 265, 445, 892];
//        const k = 7;

// const result = findKthElement(arr1, arr2, k);
//  console.log(result); 


function findKthElement(arr1, arr2, k) {
     let mergedArr = [...arr1, ...arr2]
      mergedArr.sort((a, b) => a - b)
       return mergedArr[k-1]
     } const arr1 = [100, 112, 256, 349, 770]
      const arr2 = [72, 86, 113, 119, 265, 445, 892]
       const k = 7

const result = findKthElement(arr1, arr2, k)
 console.log(result); 

