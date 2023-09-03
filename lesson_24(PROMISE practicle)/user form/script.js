const form = document.querySelector('form')
const div_root = document.querySelector('#root')
const input_elem = document.querySelector('.del_input')
const btn_elem = document.querySelector('.btn')

// Событие для кнопки удаления пользоветля по ID
btn_elem.onclick = () => {
    let id = input_elem.value
    deleteUser(id)
}

// Событие для формы добавления нового пользвоателя
form.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(form)
    let data = Object.fromEntries(form_data)
    fecthNewUser(data)
}

// Функция формирующая разметку по указанному массиву
function render(array){
    div_root.innerHTML = ''
    for (let elem of array){
        let div_container = document.createElement('div')
        let h2_name = document.createElement('h2')
        let p_age = document.createElement('p')
        let p_salary = document.createElement('p')
        let p_job_id = document.createElement('p')

        div_container.className = 'container'
        h2_name.innerText = `${elem.name} (${elem.id})`
        p_age.innerText = 'Age: ' + elem.age
        p_salary.innerText = 'Salary: ' + elem.salary
        p_job_id.innerText = 'Job_id: '+ elem.job_id

        div_container.append(h2_name, p_age, p_salary, p_job_id)
        div_root.append(div_container)
    }
}

// DELETE - запрос
function deleteUser(id){
    let url = 'http://158.160.60.49:3050/users/'+id
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            init()
        })
}

// POST - запрос
function fecthNewUser(obj){
    let url = 'http://158.160.60.49:3050/user/create'

    fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            init()
        })
}

// Функция для загрузки карточек (сетевой GET запрос )
function init(){
    let url = 'http://158.160.60.49:3050/users/'
    fetch(url)
        .then(res => res.json())
        .then(data => render(data))
}


init()