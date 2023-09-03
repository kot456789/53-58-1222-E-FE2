//  ООП (шаблонизация)

// let user1 = {
//     name: 'Alex',
//     age: 30,
//     sayName: () => {
//         console.log(user1.name)
        
//     }
// }

// let user2 = {
//     name: 'John',
//     age: 25,
//     sayName: () => {
//         console.log(user1.name)
       
//     }
// }

// user1.sayName()


// --------------------------
// class - шаблонизатор

// class User{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayHi(){
//         console.log(this.name + ' ' + this.age )
//     }
// }

// let user1 = new User('Alex', 30)
// let user2 = new User('John', 25)

// user1.sayHi()
// user2.sayHi()

// console.log(user1);
// console.log(user2);

// ----------------------
// Создайте класс Product с свойствами (имя, цена, количество)
// Создайте 3 экзамплера этого класса с произвольными значенми

class Product{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    getFullPrice(){
        console.log(this.price * this.quantity);
    }
    getInfo(){
        console.log(`Имя товара: ${this.name}, цена: ${this.price}, количество: ${this.quantity}`)
    }
}

// Добавьте к классу product метод getFullPrice
// метод должен в консоль отобразить полную стоимость товара с учетом его количества

// Напишите мет getInfo(), который будет отображать полную информацию о товаре согласно след примеру:
// 'Имя товара: Велосипед, цена: 20000, количество: 4'

// let product1 = new Product('Велосипед', 20000, 4)
// let product2 = new Product('Самокат', 10000, 6)
// let product3 = new Product('Ракетка', 5000, 8)

// product1.getFullPrice()
// product2.getFullPrice()
// product3.getFullPrice()
// product2.getInfo()
// product3.getInfo()
// product1.getInfo()

// -----------------------------
// Задача 2
// Напишите класс MathNum, который будет определять в экземплярах: 
// 1) Свойство number - числовое значение
// 2) Метод double(), который должен выводить в консоль квадрат сво-ва number
// 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number

// class MathNum{
//     constructor(number){
//         this.number = number
//     }
//     double(){
//         console.log(this.number ** 2)
//     }
//     sqrt(){
//         // console.log(this.number ** 0.5)
//         console.log(Math.sqrt(this.number))
//     }
// }

// let num1 = new MathNum(25)
// num1.double()
// num1.sqrt()

// -------------------------------------------------
// Статические сво-ва и методы 
// Это - методы и свойства, котрый будут доступны только классу! (шаблонизатору)
// экземплярам эти методы и сво-ва будут недоступны

// class Example{
//     constructor(prop){
//         this.prop = prop
//     }
//     method(){
//         console.log('method and prop avalible to objects!' )
//     }
//     // Статический метод
//     static method2(){
//         console.log('method2 and prop2 not avalible to objects!' )
//     }

//     // Статическое сво-во
//     static prop2 = 'static prop'
// }


// let obj1 = new Example('test')

// //Вызов обычного метода и сво-ва у экземпляра
// console.log(obj1.prop);
// obj1.method()

// // Cтатическое метод не отработает, тк вызывается у экземпляра
// obj1.method2()
// // Статичес метод отработает
// Example.method2()

// //Вызов статического сво-ва у экземпляра (будет undefined)
// console.log(obj1.prop2)

// //Вызов статического сво-ва у шаблониатора
// console.log(Example.prop2)


// ---------------------------------------------------
// Наследование классов

// class Drive{
//     constructor(model){
//         this.model = model
//         this.speed = 0
//     }
//     driving(speed){
//         this.speed = speed
//         console.log(`${this.model} едет со скоростью ${this.speed} км/ч`);
//     }
//     parking(){
//         this.speed = 0
//         console.log(`${this.model} припарковался!`);
//     }
// }

// // let car1 = new Drive('Mustang')

// // car1.driving(100)

// // car1.parking()
// // console.log(car1);

// class Car extends Drive{
//     constructor(model){
//         // super() позволяет получить все сво-ва наследумого класса
//         // обязательное требование
//         super()
//         this.model = model
//         this.lights = false
//     }
//     setLights(){
//         this.lights = !this.lights
//         console.log(`Машина ${this.model} ${(this.lights) ? 'включила' : 'выключила'} свет`);
//     }
// }

// let car2 = new Car('Ford')

// car2.driving(200)
// car2.setLights()
// car2.setLights()

// console.log(car2);


// let string = 'Hello world!'

// let string2 = new String('Hello world!')

// string