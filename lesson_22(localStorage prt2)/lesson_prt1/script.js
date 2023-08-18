// Механизмы работы localStorage с объектами 

// let obj = {
//     name: 'Alex',
//     age: 35
// }

// localStorage.setItem('key', obj)

// console.log({} + '')

// -----------------------
// JSON JavaScript Object Notation

// JSON.stringify(obj) - преобразовать js объект в JSON
// JSON.parse(json)     - преобразование из JSON в JS объект


// let obj = {
//     name: 'Alex',
//     age: 35
// }

// let json = JSON.stringify(obj)

// console.log(obj)
// console.log(json)

// -----------------------
// Задана строка с массивом. Используя методы JSON добавьте в конец массива 2 элемента (5,6).
// На выходе преобразуйте массив обратно в строку

// let numbers = '[1,2,3,4]'

// let numbers_array = JSON.parse(numbers)

// numbers_array.push(5,6)

// numbers = JSON.stringify(numbers_array)

// console.log(numbers);

// -----------------------

// let obj = {
//     name: 'Alex',
//     age: 35
// }

// localStorage.setItem('key', JSON.stringify(obj))
// let local_data = localStorage.getItem('key')
// console.log(JSON.parse(local_data))

// ------------------------------
// Задача. Опишите две функции: writeLocalStorage(obj) и readLocalStorage(). 
// Функции должны записывать или считывать объекты в localStorage соответственно.

// function writeLocalStorage(obj){
//     let json_data = JSON.stringify(obj)
//     localStorage.setItem('key', json_data)
// }

// function readLocalStorage(){
//     let local_data = localStorage.getItem('key')
//     local_obj = JSON.parse(local_data)
//     console.log(local_obj)
// }

// writeLocalStorage({test: 123})
// readLocalStorage()
