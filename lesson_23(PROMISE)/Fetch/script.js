// fetch() - это метод, который позволяет осуществить сетевой запрос
// метод возвращает promise

// Пример сетевого запроса

// let url = 'https://jsonplaceholder.typicode.com/users/'

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
    
// ------------------------------------
// Задание : Получите список из 100 альбомов
// https://jsonplaceholder.typicode.com

// let url = 'https://jsonplaceholder.typicode.com/albums'

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
 

// --------------------------------------
// Задана ссылка на API интрефейс. Получите данные и выведите новый массив с элементами, чей рейтинг будет меньше 4.5

// let url = 'https://dummyjson.com/products'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let filtered = data.products.filter(elem => elem.rating < 4.5)
//         console.log(filtered)
//     })

// --------------------------------------
// Задана ссылка на API интрефейс. Получите данные и выведите новый массив с элементами только с 2 сво-вами: title и price
// let url = 'https://dummyjson.com/products'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let mapped = data.products.map(elem => (
//             {
//                 title: elem.title,
//                 price: elem.price
//             }
//         ))
//         console.log(mapped)
//     })


// --------------------------------------
// Задана ссылка на API интрефейс. Получите данные и выведите итогуовую сумму стоимости всех товаров в консоль
// let url = 'https://dummyjson.com/products'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let sum = data.products.reduce((accum, elem) => accum + elem.price, 0)
//         console.log(sum)
//     })


// -----------------------------------
// Задана ссылка на API интрефейс
// https://jsonplaceholder.typicode.com/users/
// Используя Promise.all(), выполните два запроса и получите информацию о клиенте с id 4 и с id 8.
// После того, как два запроса выполняться, выведите в косноль конкатенацию их никнеймов
// Пример: Kamren Wilyam

// let url1 = 'https://jsonplaceholder.typicode.com/users/4'
// let url2 = 'https://jsonplaceholder.typicode.com/users/8'

// Promise.all([fetch(url1), fetch(url2)])
//     .then(res => Promise.all(res.map(elem => elem.json())))
//     .then(datas => console.log(datas[0].username + ' ' + datas[1].username))

// Решение Ирины
// let url1 = 'https://jsonplaceholder.typicode.com/users/4'

// const promis1 = fetch(url1)
//                     .then(data => data.json())

// let url2 = 'https://jsonplaceholder.typicode.com/users/8'

// const promis2 = fetch(url2)
//                     .then(data => data.json())


// Promise.all([promis1, promis2])
//     .then(data => console.log(data[0].username + '  ' + data[1].username))


// -------------------------------------
// Пример использования сетевого запроса и формирование результата на разметке
// let div_root = document.querySelector('#root')

// let url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//     .then(res => res.json())
//     .then(data => render(data))

// function render(array){
//     for (let elem of array){
//         let h2_elem = document.createElement('h2')
//         let text_email = document.createElement('p')
//         text_email.innerText = elem.email
//         h2_elem.innerText = elem.name
//         div_root.append(h2_elem, text_email)
//     }
// }

// Доработайте решение таким образом, чтобы после под именем сотрудника в 
// виде обычного текста также передавалось значение его почты