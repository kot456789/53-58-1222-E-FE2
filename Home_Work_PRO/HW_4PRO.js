// -----------------------------
// Task 1

// Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result1 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false

// Решение:

// let result1 = checkEmail('some@email.com')
// // let result2 = checkEmail('some@emailcom')



// // let string = 'some@email.com'
// let string = 'some@emailcom'

// // let result1= string.includes('@', string.includes('.'))
// let result2= string.includes('.', string.includes('@'))

// // console.log(result1)
// console.log(result2)


// ---------------------------------
// Task 2

// Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// Steven

// Решение:

// let result1 = initCap('sam')
// let result2 = initCap('steven')

// function initCap(string){
//     return  (('S' + string ).slice(2));

// }

// console.log(('S' + result1).slice(0))
// console.log(('S' + result2).slice(0))


// -------------------------------
// Task 3


// Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let cards = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859',
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699' 
// ]

// clearDataCards(cards)

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]


// 	Результат: ['Home','About','FAQ','Contacts']

// Решение :

// let  cards = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699' 
//     ]
    
// function clearDataCards(array){
//     for (let i = 0; i < array.length; i++){
//         array[i] =  '****'+ array[i].slice(5,14) + '****'
//     }
//     console.log(array)
// }

// clearDataCards(cards)



 
// -----------------------------
// Task 4

// Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let elems = [
// '<div><p class="text">Home</p></div>', 
// '<div><p class="text">About</p></div>', 
// '<div><p class="text">FAQ</p></div>', 
// '<div><p class="text">Contacts</p></div>' 
// ] 

// clearData(array)

// 	Результат: ['Home','About','FAQ','Contacts']


// Решение:

// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
//     ] 

//     function clearData(array){
//       for(let i = 0; i < array.length; i++){
//         let index = array[i].indexOf('</')
//         array[i] = array[i].slice(21,index)
        

//       }
//       console.log(array)
    
//  }

// clearData(elems)








