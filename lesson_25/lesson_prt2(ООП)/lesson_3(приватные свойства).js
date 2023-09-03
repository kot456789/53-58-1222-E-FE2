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