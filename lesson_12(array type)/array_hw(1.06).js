// Task 4

// let phones = [
//     '+7912345549',
//     '+7912346579',
//     '891234547489',
//     '+79123451234',
//     '89123451238',
//     '+73123456789',
//     '+73123456569',
//     '81123451238'
// ]
  
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

// 1) elem.includes('+7')
// 2) elem.startsWith('+7')
// 3) elem.indexOf('+7') === 0
// 4) elem.slice(0,2) === '+7'
// 5) elem[0] === '+'


// ----------------------------
// Task 5

// let names = [ 
//     'Steven', 
//     'Alex NULL',
//     'Glandell NULL', 
//     'Neena', 
//     'John', 
//     'Peter NULL'
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

// ----------------------
// Task 6


// Номер телефона       
// Почта                
// Пота + номер         

// 1) elem.includes('8')
// 2) elem.indexOf('8') === 0
// 3) elem.inludes('@')

// let contacts = [ 
//     'example@mail.com 89012345675', 
//     'test@mail.ru', 
//     'example@google.pop', 
//     '89011235678', 
//     'stevem@mail.net', 
//     'neena@amazon.ru 81232345676', 
//     'peter@great.ru 89012341238' 
// ]

// let phones = []
// let emails = []

// Решение 1
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

// Решение 2
// for (let elem of contacts){
//     if (elem.includes(' ')){
//         let [email, phone] = elem.split(' ')
//         emails.push(email)
//         phones.push(phone)
//     } else {
//         if (elem.includes('@')){
//             emails.push(elem)
//         } else {
//             phones.push(elem)
//         }
//     }
// }

// console.log(phones)
// console.log(emails)
