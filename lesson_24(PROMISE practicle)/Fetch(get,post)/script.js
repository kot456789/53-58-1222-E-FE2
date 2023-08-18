// fetch (get и post запросы)
// GET-запросы позволяет отправить запрос на ЧТЕНИЕ данных
// POST-запросы позволяет отправить запрос на ИЗМЕНЕНИЕ данных внутри бэкенда

// Пример выполнение GET запроса
function getPosts(){
    let url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}


// Пример функции с POST запросом (добавление новой записи)
function postFetch(){
    let url = 'https://jsonplaceholder.typicode.com/posts'

    // Объект, который будет передан на сервер
    let new_post = {
        name: "Tigran!!!",
        job: "leader !!!!"
    }
        
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(new_post)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


function deleteFetch(){
    let url = 'https://jsonplaceholder.typicode.com/posts/5'
        
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// postFetch()


// deleteFetch()
// getPosts()