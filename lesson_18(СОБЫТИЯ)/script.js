
// Задача 1
// let names = ['Alex','Steven', 'Neena', 'John']

// Задача:
// Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// будут передавать имена массива names


// let div_root = document.querySelector('#root')

// for (let elem of names){
//     let div_names = document.createElement('div')
//     div_names.innerText = elem
//     div_root.append(div_names)
// }
// Задача:
// Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// будут передавать имена массива names
// Примечание: Необходимо создать новый див элемент только у элемент, чье значение определяется строковым типом
// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// задача 3
// --------------------
// Задача 3
// Построкйте для каждого элемента массива новый div элемент. А внутри этого div элемента заголовок h1
// В теге h1 сформирйте текстовое согласно примеру - "Имя пользователя - Alex"
// Примечание: Необходимо создать новый див элемент только у элементов, чье значение определяется строковым типом
// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]




// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// let root = document.querySelector('#root');

// for(let i = 0; i < names.length; i++){

//     if(typeof names[i] === 'string'){

//         let div = document.createElement('div');
        
//         let h1 = document.createElement('h1');
//         h1.innerHTML = `Имя пользователя - ${names[i]}`;
 
//         div.append('h1');
//         root.append('div');
        
//     }
// }

// -------------------------
// задача 4

// let users = [
//     {name: 'Alex', age: 30},
//     {name: 'Steven', age: 35},
//     {name: 'Neena', age: 40},
//     {name: 'John', age: 49},
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

// for (let elem of user){
//     let div_user = document.createElement('div')
//     let h1_name = document.createElement('h1')
//     let p_age = document.createDocumentFragment('p')

//     div_user.className = 'user_elem'
//     h1_name.innerText = 
// }