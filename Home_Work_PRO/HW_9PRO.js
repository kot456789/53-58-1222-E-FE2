// ------------------------------
// Task 1
// Задан массив let names = [ {id: 1, name: 'Steven', salary: '5000'}, {id: 2, name: 'Neena', salary: '10000'}, {id: 3, name: 'John', salary: '4500'}, {id: 4, name: 'Rogers', salary: '3400'}, {id: 5, name: 'Cevin', salary: '500'}, {id: 6, name: 'Alshey', salary: '1210'}, {id: 7, name: 'Milki', salary: '110'}, {id: 8, name: 'Polar', salary: '120'}, {id: 9, name: 'Grindell', salary: '10'}, ] Посчитайте количество юзеров, у которых ID представляет нечетное число

// Решение:


//   let count = names.reduce((acc, curr) => {
//     return curr.id % 2 !== 0 ? acc + 1 : acc;
//   }, 0);
  
//   console.log(count); // Выводит 5

// --------------------------------
// Task2

// Решение:

// let totalSalary = names.reduce((accumulator, current) => {
//     return accumulator + parseInt(current.salary);
//   }, 0);
  
//   console.log(totalSalary);   

// --------------------------------
// Task 3

// Посчитайте количество юзеров, у которых в имени есть буква ‘e’

//  Решение:

// let usersWithE = names.filter(user => user.name.includes('e'));
// let count = usersWithE.length;

// console.log(count);

// ------------------------------------
// Task 4

// Найдите запись, где зарплата будет не кратна 100

// Решение:

// let result = names.find(person => person.salary % 100 !== 0);
// console.log(result);

// ------------------------------------
// Task 5

// Найдите запись, где вычисляется квадратный корень у атрибута ID без остатка

// Решение:

// const squareRoot = names.find(item => Math.sqrt(item.id) % 1 === 0);



// ---------------------------------
// Task 6

// Найдите запись, где вычисляется квадратный корень у длины имени

// Решение:


// let result = names.find(item => Math.sqrt(item.name.length))
// console.log(result);

