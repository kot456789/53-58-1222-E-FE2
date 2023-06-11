// У объектов изначально нет никаких методов
// Сами методы инициализурется в момент создания объекта

// let user = {
//     name: 'Alex',
//     age: 50,
//     isJob: true,
    
//     }
//     function func(){
//         console.log(user.age ** 2)
// }

// func()

// ---

// let user = {
//     name: 'Alex',
//     age: 40,
//     isJob: true,
//     calcAge: function(){
//         console.log(user.age ** 2)
//     }
// }

// user.calcAge()



// ------------------------------
// Методы класса Object

// let user = {
//     name: 'Alex',
//     age: 10,
//     isJob: true
// }

// Object.keys(user)    Метод вернет новый массив, элементы которого будут передавать ключи объекта
// Object.values(user)  Метод вернет новый массив, элементы которого будут передавать значения сво-ств объекта
// Object.entries(user) Метод вернет новый массив, элементы которого будут передавать и значения и ключи сво-ств объекта

// console.log(Object.entries(user))

// ---------------------
// Задача 1
// Задан объект. Напишите программу, которая проверит, есть ли в объекте значение булевого типа. 
// В качестве результата выведите в косноль булевый тип.
// Примечание: цикл использовать нельзя.

// let user = {
//     name: 'Alex',
//     age: 10,
//     isJob: 10
// }

// Решение 1

// let result = false
// for (let elem in user){
//     if (typeof user[elem] === 'boolean'){
//         result = true
//         break
//     }
// }

// console.log(result)

// ---------------------------
// Решение 2
// let user = {
//     name: 'Alex',
//     age: 10,
//     isJob: 10
// }

// let array = Object.values(user)
// let result = array.includes(true) || array.includes(false)
// console.log(result)


// -----------------
// Object.assign(obj1, obj2, obj(n) )  -  объединяет два (или больше) объекта в один объект
// Данный метод на самом деле меняет (мутирует) первый указанный объект и возвращает его ссылку

// let obj1 = {
//     name: 'Alex',
//     salary: 1000
// }

// let obj2 = {
//     age: 35,
//     isJob: true
// }

// let result = Object.assign(obj1, obj2)

// obj1.test = 10000

// console.log(result, 'result')
// console.log(obj1, 'obj1')
// console.log(obj2, 'obj2')


// console.log(result == obj1)