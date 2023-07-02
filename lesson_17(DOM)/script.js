// DOM 
// Document Object Model

// Основной тезис:
// Для взаимодействия с тегом необхидмо удовлетворить требования:
// 1) Элемент необходимо найти
// 2) Для уже найденного элемента можно применить методы/сво-ва которые позволят этот тег изменить
// 3) *если необходимо, можем тоег также переместить

// При создании нового элемента:
// 1) Создать новый элемент
// 2) Заполнение нового элемента
// 3) Вставить новый элемент в разметку

// -----------------------------------
// Поиск элементов
// document - это объект, который хранит DOM методы для взаимодействия с разметкой
// querySelector(css-selector) - это метод, который позволит найти первый попавшийся элемент в разметке

// css-selector:
// #root            (поиск по id)
// .container       (поиск по классу container)
// head             (поиск по тегу head)
// div.block        (поиск по тегу div с классом block)

// ------------
// Поиск div по атрибуту id с значением root
// let div_elem = document.querySelector('div')

// ------------
// Изменение полученного тега (в JS)
// Каждое нижеуказанное сво-во можно менять как сво-во объекта, 
// а так же можно использавть как значение любого выражения

// -----
// Пример изменения-добавления класса
// div_elem.className = 'container'

// -----
// Пример изменения-добавления id
// div_elem.id = 'tigran'

// -----
// Текстовое сво-во 
// innerText - текстовое сво-во без учета разметки
// innerHTML - текстовое сво-во которое разметку учитывает

// div_elem.innerText = 'Привет мир!'               - отличий с inner HTML нет
// div_elem.innerText = '<h1>Привет мир!</h1>'      - в этом случае отличия есть

// div_elem.innerHTML = 'Привет мир!'
// div_elem.innerHTML = '<h1>Привет мир!</h1>'

// -----------
// Метод setAttribute(atribute, value) позволяет сформировать для любого тега любой атрибут
// Вариативный способ определения любого атрибута

// div_elem.setAttribute('src','url')


// -----------------------------------
// Любой найденный элемент можно с разметки удалить 
// remove() - метод, который удаляет найденный элемент (и все что находиться внутри)

// div_elem.remove()

// console.log(div_elem)

// --------------------------------
// Задание 1 
// 1) добавьте к заданному тегу новый атрибут name с значением 'p_text'. Сформируйте текстовое сво-во 'Hello world!'
// 2) К уже имеющему решению, сделайте так, чтобы данное текстовое сво-во было полужирным.

// let p_elem = document.querySelector('.text')
// p_elem.setAttribute('name', 'p_text')
// p_elem.innerText = 'Hello world!'
// p_elem.innerHTML = '<b>' + p_elem.innerText + '</b>'

// console.log(p_elem)

// -------------------------------------------
// Перемещение элемент

// document.body (искать body не нужно, его можно получить благодаря этому выражению)

// Методы перемещения
// before       - вставить как предыдущий братский узел
// prepend      - вставить как первого ребенка
// append       - вставить как последнего ребенка
// after        - вставить как следующий братский узел

// let p_elem = document.querySelector('.text')
// let div_elem = document.querySelector('div')

// let body_elem = document.body

// body_elem.prepend(p_elem)
// div_elem.before(p_elem)

// console.log(p_elem, body_elem)


// https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg

// ---------------
// Создание копии элемента и вставка в разметку

// let p_elem = document.querySelector('.text')
// let body_elem = document.body

// // Копия элемент p_elem
// let p_elem_copy = p_elem.cloneNode(true)

// body_elem.prepend(p_elem_copy)

// -----------------
// Задание 
// Скопироуйте li элемент и вставьте его в маркированный ul элемент (как последнего ребенка)
// Примечание: до вставки измените текстовое сво-во нового элемента на 2

// let ul_elem = document.querySelector('ul')
// let li_elem = document.querySelector('li')

// let li_elem_copy = li_elem.cloneNode()
// li_elem_copy.innerText = '2'

// ul_elem.append(li_elem_copy)


// ------------------------------------------------------
// Создание и вставка новых элементов в разметку

// Метод, который позволяет создать новый тег
// document.createElement(tag)

// let new_p_elem = document.createElement('p')
// new_p_elem.id = 'text'
// new_p_elem.className = 'header_text'
// new_p_elem.innerText = 'new text'

// // Вставка созданного элемента в разметку
// let p_elem = document.querySelector('.text')
// p_elem.after(new_p_elem)

// -----------------------
// Задача: создать внутри  ul новый li элемент 
// В качестве текстового сво-ва передать 1

// let ul_elem = document.querySelector('ul')

// for (let i = 1; i <= 10; i++){
//     let li_elem = document.createElement('li')
//     li_elem.innerText = i
//     ul_elem.prepend(li_elem)
// }

// --------------------
// Задача
let names = ['Alex', 'Steven', 'Neena', 'John']

// Напишите процесс, который циклично создать внутри списка ul li элементы
// Количество новых элементов должно быть равно длине массива
// Программа в качестве текстового сво-ва сформировать значение имени, указанное внутри массива names

let ul_elem = document.querySelector('ul')

for (let elem of names){
    let li_elem = document.createElement('li')
    li_elem.innerText = elem
    ul_elem.append(li_elem)   
}
