// Напишите функцию getUserInfo(id), которая будет получать di пользователя и будет 
// выводить информацию об этом пользоветеле в консоли

// Первое решение (не актуальное)
// function getUserInfo(id){
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             let user = data.find(elem => elem.id === id)
//             console.log(user)
//         })
// }

// Второе решение (лучше, послольку вычисления происходят на backend-сервере)
// function getUserInfo(id){
//     let url = 'https://jsonplaceholder.typicode.com/users/'+id
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


// getUserInfo(8)
// getUserInfo(9)


// --------------------------------------
// Задача 2
// Используя запрос, сформируйте в разметке карточку с описанием каждого напитка
// У каждого напитка должна быть картинка 400 на 400 пикселей, а под картинкой имя коктеля
// Построение DOM узла должно находиться в функции render()

// let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
// let div_root = document.querySelector('#root')

// fetch(url)
//     .then(res => res.json())
//     .then(data => render(data.drinks))

// function render(array){
//     for (let elem of array){
//         let div_elem = document.createElement('div')
//         let img_elem = document.createElement('img')
//         let h2_elem = document.createElement('p')

//         img_elem.src = elem.strDrinkThumb
//         img_elem.width = 400
//         img_elem.height = 400
//         h2_elem.innerText = elem.strDrink

//         div_elem.append(img_elem, h2_elem)
//         div_root.append(div_elem)
//     }
// }
