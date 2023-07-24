// Задача 1

let products = [
    {name: 'Велосипед', price: 1000, count: 4},
    {name: 'Телефон', price: 4000, count: 5},
    {name: 'Телевизор', price: 5400, count: 1},
    {name: 'Ножницы', price: 450, count: 14},
    {name: 'Наушники', price: 600, count: 7},
    {name: 'Стакан', price: 50, count: 9},
]

// Создайте новый массив, в котором будут элементы цена которых больше 1000
// let result = products.filter( value =>  value.price > 1000) 
// console.log(result)

// Найдите значение товара, чье произведение стоимости и количества будет превышать значения 10000
// let result = products.find( value => value.price * value.count > 10000)
// console.log(result)

// Cоздайте новый массив, который будет перечислять только значения произведения цены и количества
// let result = products.map( value => value.price * value.count)
// console.log(result)
// [4000, 20000, ...]

// Создайте новый массив, который будет передавать все сво-ва объектов, и который будет содержать новое сво-во
// значение которого будет указывать произведение цены на количество
// let result = products.map( value => ({...value, full_price: value.price * value.count}))
// console.log(result)

// Отсортируйте массив по произведению цены на количество (по возрастанию)
products.sort( (a,b) => a.price * a.count - b.price * b.count)
console.log(products)

// -------------------------------------