// Замыкание
// Это процесс, в рамках которого функция возвращает другую функцию

// function handle(){
//     let user = 'admin'
//     return function(){
//         console.log(user)
//     }
// }

// let message = handle()

// message()


// --------------------------------------
// Пример 2

// function getCounter(){
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter)
//     }   
// }

// let count1 = getCounter()
// let count2 = getCounter()

// console.log('count1')
// count1()
// count1()
// count1()
// count1()
// count1()

// console.log('count2')
// count2()
// count2()
// count2()



// -------------------------------------
// Пример 3

// function getUrl(domen){
//     return function(url){
//         console.log(`${url}.${domen}`)
//     }
// }

// const domenCom = getUrl('com')
// const domenNet = getUrl('net')

// domenCom('google')
// domenCom('mail')
// domenCom('facebook')
// domenNet('alibaba')



// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures



// let a = 'global';
// function outer() {
//     let b = 'outer';
// function inner() {
//       let c = 'inner'
//       console.log(c);   // выдаст 'inner'
//       console.log(b);   // выдаст 'outer'
//       console.log(a);   // выдаст 'global'
//     }
//     console.log(a);     // выдаст 'global'
//     console.log(b);     // выдаст 'outer'
//     inner();
//   }
// outer();
// console.log(a);  