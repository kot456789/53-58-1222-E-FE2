
// Задача 1
// let names = ['Alex','Steven', 'Neena']

// Задача:
// Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// будут передавать имена массива names


// let div_root = document.querySelector('#root')

// for (let elem of names){
//     let div_names = document.createElement('div')
//     div_names.innerText = elem
//     div_root.append(div_names)
// }

// ----------------
// Задача 2

// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// Задача:
// Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// будут передавать имена массива names
// Примечание: Необходимо создать новый див элемент только у элемент, чье значение определяется строковым типом

// let div_root = document.querySelector('#root')

// for (let elem of names){
//     if (typeof elem === 'string'){
//         let div_names = document.createElement('div')
//         div_names.innerText = elem
//         div_root.append(div_names)
//     }
// }


// --------------------
// Задача 3
// Построкйте для каждого элемента массива новый div элемент. А внутри этого div элемента заголовок h1
// В теге h1 сформирйте текстовое согласно примеру - "Имя пользователя - Alex"
// Примечание: Необходимо создать новый див элемент только у элементов, чье значение определяется строковым типом

// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// let div_root = document.querySelector('#root')

// for (let elem of names){
//     if (typeof elem === 'string'){
//         let div_names = document.createElement('div')
//         div_names.className = 'user_elem'
//         let h_names = document.createElement('h1')

//         h_names.innerText = `Имя пользователя ${elem}`
//         div_names.append(h_names)
//         div_root.append(div_names)
//     }
// }

// ----------------------
// Задача 4

// let users = [
//     {name: 'Alex', age: 30},
//     {name: 'Steven', age: 35},
//     {name: 'Neena', age: 40},
//     {name: 'John', age: 49}
// ]

// Для каждого элемента массива создайте 
// 1) Для имена заголовок h1
// 2) Для возвраста параграф p
// 3) div элемент, который будет хранить h1 и p
// 4) div элементы должны находиться внутри root

// Пример 1 элемента
// <div>
//    <h1>Alex</h1>
//    <p>30</p>
// </div> 

// let div_root = document.querySelector('#root')

// for (let elem of users){
//     let div_user = document.createElement('div')
//     let h1_name = document.createElement('h1')
//     let p_age = document.createElement('p')

//     div_user.className = 'user_elem'
//     h1_name.innerText = elem.name
//     p_age.innerText = elem.age

//     div_user.append(h1_name, p_age)
//     div_root.append(div_user)
// }