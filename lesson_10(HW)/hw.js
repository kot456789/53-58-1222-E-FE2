// Task 3

// let boolean = false
// let num = 25


// function changeValue(boolean, num){
//     if (boolean){
//         return num ** 2
//     } else {
//         return num ** (1/2)
//     }
// }

// let result = changeValue(boolean, num)

// console.log(result)


// --------------------------
// Решение 2
// В решении выше использовать тернарный оператор и стрелочную функцию

// let changeValue = (boolean, num) => (boolean) ? num ** 2 : num ** 0.5
// let result = changeValue(false, 25)

// console.log(result)

// ---------------------------------
// Task 4 

function countString(string){
    let count = 0
    for (let i = 0; i < string.length; i++){
        let elem = string[i].toLowerCase()
        if (elem !== 'а' && elem !== 'о' && elem !== 'у' && elem !== 'с' ){
            count += 1
        }
    }
    return count
}

// console.log(countString('ТИГРАааааааАААААН'))



// ------------------------
// Task 5

// function createQuence(num){
//     for(let i = 1; i <= num; i++){
//         console.log('*'.repeat(i))
//     }
// }

// Решение 2

// function createQuence(num){
//     let star = '*'
//     for(let i = 0; i < num; i++){
//         console.log(star)
//         star = star + '*'
//     }
// }
// createQuence(5)

// Решение
// function createQuence(num){
//     for(let i = 0; i < num; i++){
//         let star = '*'
//         for(let j = 0; j < i; j++){
//             star += '*'
//         }
//         console.log(star)

//     }
// }

// createQuence(3)