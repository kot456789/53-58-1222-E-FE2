
let users = [
    {id: 1, first_name: 'Steven', last_name: 'King', age: 30, salary: 5000 },
    {id: 2, first_name: 'John', last_name: 'Wilyam', age: 25, salary: 700 },
    {id: 3, first_name: 'Neena', last_name: 'Wonka', age: 35, salary: 15000 },
    {id: 4, first_name: 'Alex', last_name: 'Rock', age: 40, salary: 4000 },
    {id: 5, first_name: 'Georgy', last_name: 'Have', age: 50, salary: 1000 },
    {id: 6, first_name: 'Maxwell', last_name: 'Must', age: 44, salary: 900 },
]

// 1) Отфильтруйте массив таким образом, чтобы в новом массиве были сотрудники с зарплатой от 1000 до 5000 не включительно
// let task1 = users.filter(value => value.salary > 1000 && value.salary < 5000)

// 2) Получите новый массив, который будет хранить значение имени и фамилии
// ['Steven King', 'John Wilyam', 'Neena Wonka'....]
// let task2 = users.map(value => value.first_name + ' ' + value.last_name)

// 3) Создайте новый массив, в котором, помимо старых свойств, будет также определяться новое сво-во 
// birthday, которое будет определять год рождения каждого сотрудника. 

// Решение 1
// let task3 = users.map( elem => ({
//     id: elem.id,
//     first_name: elem.first_name,
//     last_name: elem.last_name,
//     age: elem.age,
//     salary: elem.salary,
//     birthday: 2023 - elem.age
// }))

// Решение 2
// let task3 = users.map(elem => ({...elem, birthday: 2023 - elem.age}))
// console.log(task3)

