// Тип данных Объект

// Объект - это тип данных, который позволяет хранить множество свойств
// Свойство определяет пару ключ: значение

// let user = {
//     name: 'Tigran', 
//     age: 30,
//     salary: 1000
// } 

// Ключи: name, age, salary
// Значения: 'Tigran', 30, 1000

// ------------------------
// Взаимодействите с объектом

// ------
// указав имя объекта, мы можем через точку получить значение любого ключа

// console.log(user)         //    { name: 'Tigran', age: 30, salary: 1000 }
// console.log(user.name)    //    Tigran

// ------
// Созданию, удаление, изменение сво-во объекта

// let obj = {
//     name: 'Alex'
// }

// obj.gender = 'Men'       создание нового сво-ва
// obj.name = 'Steven'      перепоределение существующего сво-ва
// delete obj.name          удаление сво-ва с значением

// console.log(obj)
// console.log(obj.isJob)      // undefined

// ------------------------
// Задача 1
// Задан объект

// let car = {
//     model: 'Tesla',
//     mileage: 30000,
//     year: 2020,
//     engine: 50,
//     broke: false
// }

// Поменйте модель на BMW
// Преобразуйте мили в км (переименйте сво-во на ride )

// car.model = 'BMW'
// car.mileage = car.mileage * 1.6
// car.ride = car.mileage
// delete car.mileage

// console.log(car)

// -------------------------------
// Обращение к ключам

// let obj = {
//     'first name': 'John',
//     age: 35
// }

// console.log(obj['first name'])

// let obj = {
//     age: 35,
//     first_name: 'John'
// }

// console.log(obj['first_name'])    //    'John'

// obj['first_name'] = 'TEST'

// console.log(obj)

// Ключи объекта
// 1) Из-за формирование уникального ключи в виде строкового типа, сво-ва объекта не упорядочиваются
// 2) Ключи должны быть разные (если не так, ошибки не будет)

// Индексы массива
// 1) Индексы массива неизменны (ключи определяются по строгому порядку) 
// 2) Ключ массива представлен строго в виде числового типа
// 3) Ключи (индекс) массива упорядочивают все элементы

// -----------
// Единственный слуяай, когда порядок сво-ств может повляеть на значение всего объекта
// let obj = {
//     age: 50,
//     first_name: 'John',
//     age: 35
// }
 
// console.log(obj)
// { age: 35, first_name: 'John' }


// ---------------------------------
// Цикл по объектам

// let car = {
//     model: 'Tesla',
//     mileage: 30000,
//     year: 2020,
//     engine: 50,
//     broke: false
// }

// Цикл по КЛЮЧАМ и ЗАНЧЕНИЯМ объекта

// for (let elem in car){
//     console.log(elem)            // КЛЮЧИ
//     console.log(car[elem])       // ЗНАЧЕНИЕ
// }


// ----------------------
// Задача 2 

// Задан объект. Вывдите только те элементы, значения которых представляются в виде числового типа

// let obj = {
//     char1: 1,
//     char2: 'Windows',
//     char3: 10,
//     char4: 'Car',
//     char5: 54,
//     char6: 'String',
// }

// for (let elem in obj){
//     if(typeof obj[elem] === 'number'){
//         console.log(obj[elem])
//     }
// }

// -------------------------------
// Задача 2

// Задан объект. Вывдете значение сво-ств только у тех элементов,
// чей ключ в конце определяет нечентное числовое значение 

// let obj = {
//     char1: true,
//     char2: 'Windows',
//     char3: 10,
//     char4: 'Car',
//     char5: 54,
//     char6: 'String',
// }

// for (let elem in obj){
//     // let num = elem[4]
//     // let num = elem.slice(-1)
//     let num = elem.replace('char', '')

//     if (num % 2 !== 0){
//         console.log( elem, obj[elem])
//     }

// }


// ---------
// Задача 3

// Задан объект. Измените объект таким образом, чтобы в нем не было сво-св, которые содержат булевый тип
// В решении необходимо вывести значение ЦЕЛОГО объекта 

// let obj = {
//     char1: true,
//     char2: 'Windows',
//     char3: 10,
//     char4: false,
//     char5: 54,
//     char6: 'String',
// }

// for (let elem in obj){
//     if (typeof obj[elem] === 'boolean'){
//         delete obj[elem]
//     }
// }

// console.log(obj)

// {
//     char2: 'Windows',
//     char3: 10,
//     char5: 54,
//     char6: 'String',
// }


// https://learn.javascript.ru/regular-expressions
