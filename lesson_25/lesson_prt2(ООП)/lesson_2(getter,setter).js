// Геттеры и Сеттеры (принято считать свойствами, а записывается как методы)

// Метод get позволяет прочитать значение сво-ва объекта
// Особенности:
// 1) обращение к геттеру просиходит как к сво-ву
// 2) сво-во, определенное через getter, динамечески меняетя (в случае, если в нем учитывается какое-либо указанное сво-во объекта)
// 3) getter перезаписать НЕЛЬЗЯ
// 4) getter никогда не должен получать аргументы

// let pet = {
//     name: 'Шарик', 
//     breed: 'Пудель',

//     get nameBreed(){
//         return `${this.name} - это ${this.breed}`
//     },
//     get lengthName(){
//         let count = 0
//         for (let _ of this.name){
//             count += 1
//         }
//         return count
//     }
// }
// pet.name = 'Richard'
// console.log(pet.lengthName);

// -------------
// Пример актуализации данных внутри геттера nameBreed

// pet.name = 'Диксон'
// console.log(pet.nameBreed);
// Диксон - это Пудель

//---------------
//Пример попыткы перезаписать геттер
// pet.nameBreed = '123'
// console.log(pet.nameBreed)
// Шарик - это Пудель



// ------------------------------
// Пример, когда сво-во nameBreed остается неизменным даже после изменения сво-тв name & breed
// let pet2 = {
//     name: 'Шарик', 
//     breed: 'Пудель',
//     nameBreed: `${this.name} - это ${this.breed}`
// }
// pet2.name = 'Rex'
// console.log(pet.nameBreed)
// //Шарик - это Пудель


// --------------------------
// Задание 1
// Задан obj, добавьте к нему новый геттер lastValue, который будет ссылаться на значение последнего элемента массива

// let obj = {
//     numbers: ['Один','Два', 'Три', 'Четыре'],
//     get lastValue(){
//         return this.numbers[this.numbers.length -1]
//     }
// }
// obj.numbers.pop()
// console.log(obj.lastValue);


// --------------------
// Задание 2
// задан объект obj. Определите новое сво-во abs (геттер) которое будет хранить 
// разницу первого и последнего элемента массива array

// let obj = {
//  numbers: [70,20,30,40,50,20,50],
//  get abs(){
//     return this.numbers[0] - this.numbers[this.numbers.length - 1]
//  }
// }

// console.log(obj.abs);

// ------------------------
// Сеттер - сво-во, которая позволяет переоределить сво-во объекта
// 1) Сеттер должен всегда получать 1 аргмент (не больше не меньше)
// 2) Сеттер также является сво-вом. Аргумент передается в момент переопределения сво-ва
// 3) В сеттере return не указывается

// Просто пример работы сеттера
// let obj = {
//     name: 'Alex',
//     set setName(arg){
//         obj.name = arg
//     }
// }

// obj.setName = false
// console.log(obj);

// Пример 2

// let obj = {
//     name: 'Alex',
//     lastName: 'Willyam', 

//     set setFullName(arg){
//         let [name, lastName] = arg.split(' ')
//         this.name = name
//         this.lastName = lastName
//     }
// }
// obj.setFullName = 'Steven King'
// console.log(obj);
// { name: 'Steven', lastName: 'King', setFullName: [Setter] }

// ------------------------
// Задача 3

// Задан объект 
// Напишите сеттер setPhone, который позволит переопределить значение сво-ва phone с проверкой
// Если номер телефона будет указан без кода +7 (то есть начиная с 8), тогда необходимо будет заменить 8 на +7
// Если номер телефона будет начинаться не с 8 и не с +7, тогда номер измениться не должен

// let contact = {
//     phone: '+712345678',
//     set setPhone(arg){
//         if (arg.startsWith('8')){
//             // this.phone = '+7' + arg.slice(1)
//             this.phone = arg.replace('8', '+7')
//         } else if (arg.startsWith('+7')) {
//              this.phone = arg
//         } else {
//             console.log('Номер неверный')
//         }
//     }
// }

// contact.setPhone = '+7120000'
// console.log(contact.phone)

// ------------------------------
// Геттер и Сеттер внутри класса

// class User{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     get getName(){
//         return this.name + ' - имя'
//     }
//     set setAge(arg){
//         this.age = 2023 - arg
//     }
// }

// let user1 = new User('Alex', 19)
// user1.setAge = 2000
// console.log(user1);

// User { name: 'Alex', age: 23 }