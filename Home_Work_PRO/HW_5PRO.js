// ---------------------
// Task 1
// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль только нечетные элементы 


// Решение:

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]

// for (let elem of array){
//     if(elem % 2 != 0){
//         console.log(elem)
//     }
// }





// ----------------------------
// Task 2


// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы, кратные 10

// Решение:

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]
 
// for (let elem of array){
//     if(elem % 10 == 0){
//         console.log(elem)
//     }
// }

// --------------------------
// Task 3

// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы с двухзначным значением

// Решение:

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]

// for (let elem of array){
//     if(elem >= 10){
//         console.log(elem)
//     }
// }


// ------------------------------
// Task 4

// Задан массив с номерами телефонов: 
// let phones = [
// '+7912345549',
// '+7912346579',
// '891234547489',
// '+79123451234',
// '89123451238',
// '+73123456789',
// '+73123456569',
// '81123451238'
// ]
// Создайте два новых массива phones1 и phones2, в первом из которых поместите только те элементы, которые начинаются на +7, а другие в массив phones2. Выведите в консоль содержимое двух массивов

// Решение:

// let phones = [
//     '+7912345549',
//     '+7912346579',
//     '891234547489',
//     '+79123451234',
//     '89123451238',
//     '+73123456789',
//     '+73123456569',
//     '81123451238'
//     ]
   
// let phones1 = []
// let phones2 = []

// for(let elem of phones){
//     if(elem.startsWith('+7')){
//         phones1.push(elem)
//     } else {
//         phones2.push(elem)
//     }
// }

// console.log(phones1)
// console.log(phones2)
    

  
    
// ----------------------------
// Task 5

// Задан массив с именами: 
// let names = [ 
// 'Steven', 
// 'Alex NULL',
// 'Glandell NULL', 
// 'Neena', 
// 'John', 
// 'Peter NULL'
// ]

// Измените исходный массив таким образом, чтобы у элементов, где встречается значение NULL, отсутствовало последнее слово. 

// Решение:

 
// let names = [ 
// 'Steven', 
// 'Alex NULL',
// 'Glandell NULL', 
// 'Neena', 
// 'John', 
// 'Peter NULL'
// ]

// for (let i in names){
//     if (names[i].endsWith('NULL')){
//         names[i] = names[i].slice(0, names[i].indexOf(' '))
//     }
// }

// for (let i in names){
//     names[i] = names[i].replace(' NULL', '')
// }


// console.log(names)





// -------------------------
// Task 6


// Задан массив с контактами пользователей:
// let contacts = [ 
// 'example@mail.com 89012345675', 
// 'test@mail.ru', 
// 'example@google.pop', 
// '89011235678', 
// 'stevem@mail.net', 
// 'neena@amazon.ru 81232345676', 
// 'peter@great.ru 89012341238' 
// ]

// Создайте два массива phones и emails и поместите туда только те значения, которые соответствуют значениями элементам массива contacts. 
// Примечание: если в элемента встречается и почта и номер - их необходимо будет разделить и также поместить в соответствующие массивы. Выведите в консоль содержимое двух массивов

// Решение:

// let contacts = [ 
// 'example@mail.com 89012345675', 
// 'test@mail.ru', 
// 'example@google.pop', 
// '89011235678', 
// 'stevem@mail.net', 
// 'neena@amazon.ru 81232345676', 
// 'peter@great.ru 89012341238' 
// ]

// let phones = []
// let emails = []


// for (let elem of contacts){
//     if(elem.indexOf('8') === 0){
//         phones.push(elem)
//     } else if(elem.includes('@') && !elem.includes(' ')){
//         emails.push(elem)
//     } else {
//         let [email, phone] = elem.split(' ')
//         emails.push(email)
//         phones.push(phone)
//     }
// }


// console.log(phones)
// console.log(emails)





