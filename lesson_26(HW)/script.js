// В программе объявлены переменные name и phone, которые хранят строки. 
// В name указано название заведения, а в phone — его номер телефона. 
// Создайте класс Delivery со свойствами name и phone. 
// Помимо описанных свойств, добавьте свойство validPhone, 
// которое проверяет значение свойства phone на вхождение знака + в начале строки. 
// Если знак отсутствует, свойство validPhone должно принять булевое значение false, 
// в противном случае — true. Создайте экземпляр класса Delivery и в качестве 
// аргументов конструктора укажите значения переменных name и phone. 
// Получившийся экземпляр класса запишите в переменную deliveryName. 

// Пример значений переменных: 
// let name = "Pizza" 
// let phone = "+81234567890" 

// Пример результата: false


// class Delivery{
//     constructor(name, phone){
//         this.name = name
//         this.phone = phone
//     }
//     get validPhone(){
//         return this.phone.startsWith('+')
//     }
// }

// let deliveryName = new Delivery(name, phone)

// console.log(deliveryName.validPhone);


// ------------------------
// Task 2 

// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }

// class Users extends Permissions{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }

// console.log(new Users('Alex'))


// --------------------------
// Taks 3

// class PrintEditionItem{
//   constructor(name, releaseDate, pagesCount){
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.state = 100
//       this.type = null
//   }

//   fix(){
//       this.state *= 1.5
//   }

//   set setState(num){
//       if (num > 100){
//           this.state = 100
//       } else if (num < 0){
//           this.state = 0
//       } else {
//           this.state = num
//       }
//   }

//   get getState(){
//       return this.state
//   }
// }


// class Magazine extends PrintEditionItem{
//   constructor(name, releaseDate, pagesCount){
//       super()
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.type = 'magazine'
//   }
// }

// class Book extends PrintEditionItem{
//   constructor(name, releaseDate, pagesCount, author){
//       super()
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.author = author
//       this.type = 'book'
//   }
// }

// class FantasticBook extends Book{
//   constructor(name, releaseDate, pagesCount, author){
//       super()
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.author = author
//       this.type = 'fantastic'
//   }
// }

// class NovelBook extends Book{
//   constructor(name, releaseDate, pagesCount, author){
//       super()
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.author = author
//       this.type = 'novel'
//   }
// }

// class DetectiveBook extends Book{
//   constructor(name, releaseDate, pagesCount, author){
//       super()
//       this.name = name
//       this.releaseDate = releaseDate
//       this.pagesCount = pagesCount
//       this.author = author
//       this.type = 'detective'
//   }
// }



//---------------------------------
// --------------------------------
//---------------------------------
// занятие 7.9.2023 FE

// ссылка на картинку:
<img src='https://cdn-icons-png.flaticon.com/512/188/188168.png'/>



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );


// function App(){
//   return(
//     <div>
//       <Image/>
//       <Description/>
//     </div>
//   )
// }


// function Image(){
//   return(
//     <div>
//       <img src='https://cdn-icons-png.flaticon.com/512/188/188168.png'/>
//       <h1>tetris</h1>
//     </div>
//   )
// }

// function Description(){
//   return(
//     <p>Description: gametoy</p>
//   )
// }
// --------------------------

// --------------------------------
// Правила JSX 
// 1) Если в JS выражении возвращается разметка, то нам необходмо укзаать в разметке не более 
// 1 элемента (с любой вложенностью)

// 2) Для того, чтобы использовать JS-выражения внутри разметки, необходимо значение указать внутри скобок {...}
// <p id={elem_id}>{price}</p>

// 3) Указание разметки формируется без каких-либо синтаксических конструкций. 
// Но если внутри также будет использоваться JS - второе правило необходимо повторить
// -------------------------------

// Задача 1:
// Задан объект productInfo
    // На стороен разметки необходимо создать два тега h1 и p
    // h1 должен пердавать значение имени продукта
    // p должен отображать текстовое сво-во 'Sale!' (красного цвета) по условию: 
    // Если товар продается со скидкой, параграф должен оказаться на размкетке, 
    // если скидки нет - параграфа быть не должно

    // let productInfo = {
    //   name: 'Велосипед',
    //   price: 199,
    //   salePrice: 199
    // }
// -------------------------------
// -------------------
    // Зaдача 2: задана переменная num с числовым значением
    // Если числовой тип делится на 2 без остатка, в компонетне 
    // должен появиться заголовок h1 с значением Вычисляется, если нет - обычный параграф с значением не вычисляется
  
    // let num = 9

    // return(
    //     <div>

    //     </div>
    // )
// 

// --------------------------------
// --------------------
    // Заданы две переменые size и color
    // Необходимо создать div элемента с указанными размерами в зависимости от занчение переменной size 
    // а также фоном, котоый передаетсяв занчении color
    // в случае, если size будет xl, размеры элемента должна быть 400х400
    // l - 200x200
    // m - 100x100
    // color передает текстовый тип цвета. 
    // 'red', 'blue', 'purple'

    let size = 'l'
    let color = 'purple'

    return(
        <div>

        </div>
    )


//
//---------------------------------
// --------------------------------
// --------------------------------


// npm install -g create-react-app  

// 1) Установка react-приложения 
// npx create-react-app myapp

// 2) Чтобы запустить приложение, необходимо (ВАЖНО) перейти в директориую myapp
// cd myapp
// npm start

// 3) Удалить все файлы в папке PUBLIC, оставив index.html
// В файле index.html необходимо удалить всю разметку и вставить Emmet Abbreviation
// В body необходимо создать div#root

// 4) Удалить все файлы в папке SRC, оставив index.js
// ----------------------------
// .) Установка node-modules (если проект скачать с интернета (github), или папка была вручную удалена)
// npm install






// Создайте новый компонент Content, который будет передавать 
// 3 тега: 
// div, h1 (Велосипед), p (5000) (h1, p должны находиться внутри div)
// Вызовите этот компонент в компонете Block под парагрфом (Не формируя вложенность)
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );


// function App(){
//   return(
//     <div>
//       <h1>Hello!</h1>
//       <Block/>
//     </div>
//   )
// }
// ---------------
// Создайте новый компонент Content, который будет передавать 
// 3 тега: 
// div, h1 (Велосипед), p (5000) (h1, p должны находиться внутри div)
// Вызовите этот компонент в компонете Block под парагрфом (Не формируя вложенность)

// function Block(){
//   return(
//     <p>test!</p>
//   )
// }



// function Block(){
//     return(
//         <>   
//       <p>test!</p>
//       <Content/>

//       </>

//     )
//   }

//   function Content(){
//     return(
//       <div>
//         <h1>Велосипед</h1>
//         <p>5000</p>
//       </div>
//     )
//   }

 // ---------------
 // https://cdn-icons-png.flaticon.com/512/188/188168.png

   function Description (){
    return(
      <div>
       
        <p>Description</p>
      </div>
    )
  }