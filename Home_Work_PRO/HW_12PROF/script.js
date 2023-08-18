let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]
 
 //-------------------------------
// Task 1

//    Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID


// const filteredGoods = goods.filter(item => item.id % 2 === 0)

// console.log(filteredGoods);

// --------------------------------
// Task 2

// Посчитайте сумму всех товаров, учитывая их количество


// let sum = goods.reduce((acc, curr) => acc + curr.price * curr.count, 0)

// console.log(sum); 

// --------------------------------
// Task 3

// Найдите значение элемента массива (продукта), цена которого будет кратна 5


 
//  let product = goods.find(item => item.price % 5 === 0)
 
//  console.log(product); 

 // ------------------------------
 // Task 4

 // Найдите индекс элемента, count которого будет больше 11

//  let index = goods.findIndex(item => item.count > 11)
// console.log(index);

// -------------------------------
// Task 5

// Посчитайте количество элементов, count которых является нечетным числом
 
 

// let count = 0

// goods.forEach(item => {
//   if (item.count % 2 !== 0) {
//     count++
//   }
// })

// console.log(count);

// -----------------------------
// Task 6

// Посчитайте количество элементов, имя которых начинается на “Т”


// const goodsStartingWithT = goods.filter(item => item.title[0] === 'Т')
// const count = goodsStartingWithT.length
// console.log(count);


// ------------------------------
// Task 7


// Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)


// const discountedPrices = goods.map(item => item.price * 0.65)

// console.log(discountedPrices);

// ---------------------------------
// Task 8

// Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

// let newGoods = goods.map(good => {
    
//     let newGood = Object.assign({}, good)
    
//     newGood.count = 0
//     return newGood
//   })
  
//   console.log(newGoods);

  // ------------------------------
  // Task 9

  // Отсортируйте массив по сво-ву title


let sortedGoods = goods.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedGoods);