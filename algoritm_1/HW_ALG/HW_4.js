// Task 1

// У вас есть список из n элементов, которые представляют собой оценки студентов по математике. Вам нужно отсортировать этот список в порядке убывания оценок с использованием алгоритма сортировки Merge sort.
// Для решения этой задачи напишите функцию, которая принимает на вход список оценок и возвращает новый список, отсортированный в порядке убывания.
// {3, 8, 1, 9, 4, 2, 7, 6, 5 };

//

// function mergeSortDescending(arr) {
//     // Если список пуст или содержит только один элемент, он уже отсортирован
//     if (arr.length <= 1) {
//       return arr;
//     }

//     // Находимо найти середину списка
//     const mid = Math.floor(arr.length / 2);

//     // Рекурсивно сортируем левую и правую половины списка
//     const left = mergeSortDescending(arr.slice(0, mid));
//     const right = mergeSortDescending(arr.slice(mid, arr.length));

//     // Слияние отсортированных половин
//     return mergeDescending(left, right);
//   }

//   function mergeDescending(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     // Пока есть элементы в обеих половинах, добавляем элемент с большим значением в результат
//     while (i < left.length && j < right.length) {
//       if (left[i] >= right[j]) {
//         result.push(left[i]);
//         i++;
//       } else {
//         result.push(right[j]);
//         j++;
//       }
//     }

//     // Добавляем оставшиеся элементы из левой и правой половин, если они есть
//     while (i < left.length) {
//       result.push(left[i]);
//       i++;
//     }

//     while (j < right.length) {
//       result.push(right[j]);
//       j++;
//     }

//     return result;
//   }

//   const grades = [3, 8, 1, 9, 4, 2, 7, 6, 5];
//   const sortedGrades = mergeSortDescending(grades);
//   console.log(sortedGrades);

// В результате выполнения кода будет выведен новый список sortedGrades, отсортированный в порядке убывания: [9, 8, 7, 6, 5, 4, 3, 2, 1].

// Алгоритм сортировки слиянием имеет сложность O(n log n), где n - количество элементов в списке оценок. Это эффективный алгоритм сортировки и хорошо работает на больших списках.

// ---------------------------
// Task 2

//   Дан массив объектов типа Person, который содержит поля name (тип String) и age (тип int). Необходимо отсортировать этот массив по возрасту в порядке убывания, используя алгоритм Merge sort.

// Person[] people = {
//     new Person("Alice", 25),
//     new Person("Bob", 20),
//     new Person("Charlie", 30),
//     new Person("David", 35),
//     new Person("Eve", 28)
// };

// let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 35 },
//     { name: "Eve", age: 28 }
// ];

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }

// const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid)
//   const right = arr.slice(mid)

// return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//   let result = []
//   let i = 0
//   let j = 0

// while (i < left.length && j < right.length) {
//     if (left[i].age >= right[j].age) {
//       result.push(left[i])
//       i++
//     } else {
//       result.push(right[j]);
//       j++
//     }
//   }

// return result.concat(left.slice(i)).concat(right.slice(j))
// }

// let sortedPeople = mergeSort(people);
// console.log(sortedPeople);
