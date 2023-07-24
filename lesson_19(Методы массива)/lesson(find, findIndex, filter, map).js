// Более интересные методы массива

// ----------------------------
// Метод find() - задача найти первый элемент массива по указанному условию
// Метод возвращает найденный элемент.
// в случае, если метод не найдет элемент по условию - он вернет undefined

// let array = ['Один', "Два", "Три", "Четыре"]

// Найти элемент массива который начинается на 'Д'
// let result = array.find((value) => value[0] === 'Д')
//      Два
// Внутри колбека value является значением элементом массива

// ----------
// Найти элемент, длина которого будет больше 4
// let result = array.find((value) => value.length > 4)
//      Четыре

// console.log(result)

// -------------------------
// Задача 1

// let numbers = [4,8,9,20,4,55,59,21]

// Найдите элемент, значение которого будет кратно 10
// let result = numbers.find( (value) => value % 10 === 0 )

// Найдите элемент, у которого вычисляется квадратный корень
// let result = numbers.find( (value) => (value ** 0.5) % 1 === 0)

// ---------------------------
// Задача 2
// let array = ['Один', "Два", "Три", "Четыре"]
// Найдите элемент, у которого есть где-либо буква "в"
// let result = array.find( (value) =>  value.includes('в'))

// console.log(result)


// -----------------------------------------------
// Немного подробнее про колбек внутри методов массива на примере find

// В качестве первого аргумента в колбек передается значение элемента массива
// В качестве второго аргумента в колбек передается значение индекса
// В качестве третьего аргумента колбек передает значение целого массива


// let array = ['Один', "Два", "Три", "Четыре"]

// let result = array.find( (value, index, array) =>  console.log(value, index, array))

// Один   0  [ 'Один', 'Два', 'Три', 'Четыре' ]
// Два    1  [ 'Один', 'Два', 'Три', 'Четыре' ]
// Три    2  [ 'Один', 'Два', 'Три', 'Четыре' ]
// Четыре 3  [ 'Один', 'Два', 'Три', 'Четыре' ]

// --------------------------
// Задача 4

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Gendalf']

// Найдите элемент массива, у которого имя будет начинаться на N, но индекс будет нечентным
// let result = users.find((value, index) => value[0] === 'N' && index % 2 !==0)

// console.log(result)

// -------------------------------
// Метод findIndex 
// Назначение - найти индекс элемента по указнному условию
// Возвращает первый попвашийся индекс найденного элемента
// Если элемент не будет найден - метод вернет значение -1

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Gendalf']
// let result = users.findIndex((value, index) => value[0] === 'N' && index % 2 !==0)
// console.log(result)
//      3

// -------------------------------
// Метод filter
// Назначение - cформировать новый массив, элементы которого буду удовлетворять условию колбека
// Метод всегда возвращает новый массив
// В случае, если ни один элемент не подойдет указанному условию, метод вернет пустой массив 

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Gendalf']

// let result = users.filter( (value) => value[0] === 'N')
// console.log(result)
// [ 'Neena', 'Nelli' ]

// let result = users.filter( (value, index) => index % 2 === 0)
// console.log(result)
// [ 'Alex', 'Neena', 'Gendalf' ]

// let result = users.filter( (value) =>  value[0] === 'P')
// console.log(result)
// []

// ------------------------
//  Задача 5

// let price = [100,200,1100,2000,5000,20,8000,1000]

// Отфильтруйте данные таикм образом, чтобы в новом масиве оказались только числа кратные 1000

// Решение 1
// let result = price.filter((value) => value % 1000 === 0)
// console.log(result)

// -------------
// Отфильтруйте данные таикм образом, чтобы в новом масиве оказались только числа кратные 1000
// В качестве решение необхдимо использлвать цикл for (метод filter использовать нельзя)

// Решение 2
// let result = []
// for (let value of price){
//     if (value % 1000 === 0){
//         result.push(value)
//     }
// }

// console.log(result)

// ---------------------------
// Задача 6

// let users = [
//     {id: 1, name: 'Alex', salary: 500},
//     {id: 2, name: 'Steven', salary: 1500},
//     {id: 3, name: 'Neena', salary: 300},
//     {id: 4, name: 'King', salary: 200},
//     {id: 5, name: 'John', salary: 1500},
// ]

// Отфильтруйте массив таким образом, чтобы туда попали элементы, чей ID будет четным, а зарпплата будет кратна 500

// let result = users.filter((value) => value.id % 2 === 0 && value.salary % 500 === 0)
// [ { id: 2, name: 'Steven', salary: 1500 } ]

// let result = users.find((value) => value.id % 2 === 0 && value.salary % 500 === 0)
// { id: 2, name: 'Steven', salary: 1500 }

// console.log(result)

// ----------------------------------------------
// Метод map()
// Назначение: цикличное изменение элементов массива
// Возвращает новый массив

// ПРИМЕЧАНИЕ
// Метод map, в отличии от методов find, findIndex. filter, ВМЕСТО условия колбек должен передать ЗНАЧЕНИЕ

// Задача: возвести каждый элемент массива в квадрат
// let numbers = [1,2,3,4,5]

// let result = numbers.map( (value) =>  value + 100)
// console.log(result)

// ---------------
// Задача 7

// В магазине объявлена распродажа! Все цены упали на 25 процентов. Измените массив таким образом, 
// чтобы цены были меньше на 25 процентов.

// let price = [100,200,1100,2000,5000,20,8000,1000]

// let newPrice = price.map((value) => value * 0.75)

// console.log(newPrice)


// -----------------------------
// Задача 8

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Gendalf']

// Сфомируйте новое значение для каждого элемента массива, который будет фаткически 
// определять конкатенацию первой и последней буквы

// let newUsers = users.map((value) => value[0] + value[value.length - 1])

// console.log(newUsers)

// ---------------------------
// Задача 9

// let phones = [
//     '89012568457',
//     '89012234548',
//     '89012565673',
//     '89013409678',
//     '89015980975',
// ]

// Задача: замените начало строки 8 на +7 в новом массиве

// let newPhones = phones.map((value) => '+7' + value.slice(1))
// let newPhones = phones.map((value) => value.replace('8','+7'))
// console.log(newPhones)