// Классаня статья
// https://learn.javascript.ru/private-protected-properties-methods

// Приватные сво-ва
// Это свойства, который могут хранить ифнормацию, недоустпные к прочтению/изменению

// Геттер и Сеттер могут читать/перезаписывать значения приватных сво-в

class Card{
    constructor(card){
        // # в начале сво-ва указывает на создание приватного сво-ва
        this.#card_num = card
        this.type = 'VISA'
    }
    #card_num;

    get readCard(){
        return `**** ${this.#card_num.slice(5,9)} ****`
    }

    set setCard(card){
        this.#card_num = card
    }
}

let card1 = new Card('4444 5555 6666')
card1.setCard = '1111 1111 1111'
console.log(card1.readCard);

// ----------------
// ----------------
// ----------------

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

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }

    fix(){
        this.state *= 1.5
    }

    set setState(num){
        if (num > 100){
            this.state = 100
        } else if (num < 0){
            this.state = 0
        } else {
            this.state = num
        }
    }

    get getState(){
        return this.state
    }
}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super()
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, author){
        super()
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.author = author
        this.type = 'book'
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super()
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.author = author
        this.type = 'fantastic'
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super()
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.author = author
        this.type = 'novel'
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super()
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.author = author
        this.type = 'detective'
    }
}