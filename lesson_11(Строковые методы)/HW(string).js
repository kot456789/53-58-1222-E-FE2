// Task 1

// Решение 1
// function checkEmail(string){
//     if (string.includes('@') && string.includes('.')){
//         return true
//     } else {
//         return false
//     }
// }

// Решение 2
// let checkEmail = (string) => string.includes("@") && string.includes('.')

// let result1 = checkEmail('some@email.com')
// let result2 = checkEmail('some@emailcom')

// console.log(result1, result2)

// ------------------------------
// Task 2


// Решение 1
// function initCap(string){
//     let firstSymbol = string.slice(0,1).toUpperCase()
//     let otherSymbols = string.slice(1)
//     return firstSymbol + otherSymbols
// }

// Решение 2
// const initCap = (string) => string[0].toUpperCase() + string.slice(1)

// Решение 3

const initCap = (string) => string.replace(string[0], string[0].toUpperCase())

// let result1 = initCap('sam')
// let result2 = initCap('steven')

// console.log(result1, result2)


// let string = 'steven'
// let string1 = string.slice(0,1)         //      's'
// let string2 = string1.toUpperCase()     //      'S'


// let result =  string.slice(0,1).toUpperCase()



// Task 3
// let cards = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699' 
//     ]
    
// Решение 1
// function clearDataCards(array){
//     for (let i = 0; i < array.length; i++){
//         array[i] =  '****'+ array[i].slice(5,14) + '****'
//     }
//     console.log(array)
// }

// clearDataCards(cards)

// Решение 2 (пока не рассматривали)
// console.log(cards.map(elem => '****' + elem.slice(5,14)+'****'))


// ---------------------------------
// Task 4

// let elems = [
//     '<div><p class"text">Home</p></div>', 
//     '<div><p id="text">About</p></div>', 
//     '<div><p ref="text">FAQ</p></div>', 
//     '<div><p example="text">Contacts</p></div>' 
// ] 

// function clearData(array){
//     for(let i = 0; i < array.length; i++){
//         let index2 = array[i].indexOf('</')
//         let index1 = array[i].indexOf('text')+6
//         array[i] = array[i].slice(index1,index2)
//     }
//     console.log(array)
// }
// Результат: ['Home','About','FAQ','Contacts']
// clearData(elems)


