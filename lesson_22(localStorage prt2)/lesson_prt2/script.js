let div_root = document.querySelector('#root')
let div_products = document.createElement('div')
div_products.className = 'product_wrapper'
div_root.append(div_products)

// Задача. 
// Доработать процесс таким образом, чтобы массив с продуктами добавлялся в localStorage.

// Оператор нулевого слияния ??
// Оператор, который устанавливает значение в зависимости от значения левого и правого операнда.
// Если левый операнд будет равен null иил undefined, тогда в качестве значение сформируется правый операнд
// В противном случае, сформируется значение левого операнда

let data = JSON.parse(localStorage.getItem('products')) ?? []

function render(array){
    for (let elem of array){
        let div_item = document.createElement('div')
        let h2_item = document.createElement('h2')
    
        div_item.className = 'product_item'
        h2_item.innerText = elem
    
        div_item.append(h2_item)
        div_products.append(div_item)
    }
}

// ------------------------
// Работа с формой

let input_title = document.querySelector('input')
let form_elem = document.querySelector('form')

function rerender(item){
    div_products.innerHTML = ''
    data.push(item)
    localStorage.setItem('products', JSON.stringify(data))
    render(data)
}

form_elem.onsubmit = (e) => {
    e.preventDefault()
    rerender(input_title.value)
}


render(data)


