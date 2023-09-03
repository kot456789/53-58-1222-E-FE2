//  Написать алгоритм который находит 3 и 5 по минимальности элемент в массиве.




const array = [1, 2, 3, 5, 6, 8, 9, -1, -5];

// Инициализация переменных для хранения чисел 3 и 5 по минимальности
let min3 = Infinity;
let min5 = Infinity;

// Итерация по элементам массива
for (let i = 0; i < array.length; i++) {
  const num = array[i];

  // Если текущий элемент меньше числа 3 по минимальности и не является отрицательным числом
  if (num < min3 && num !== -Infinity) {
    min3 = num;
  }

  // Если текущий элемент меньше числа 5 по минимальности и не является отрицательным числом
  if (num < min5 && num !== -Infinity) {
    // Если текущий элемент меньше числа 3 по минимальности, обновляем значения и для числа 3
    if (num < min3) {
      min5 = min3;
      min3 = num;
    } else {
      min5 = num;
    }
  }
}

// Проверка найденных значений и вывод результата
if (min3 !== Infinity && min5 !== Infinity) {
  console.log("Минимальное число 3: " + min3);
  console.log("Минимальное число 5: " + min5);
} else {
  console.log("В массиве нет нужных чисел");
}