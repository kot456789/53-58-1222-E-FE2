
const div_elem = document.querySelector('div')

function renderStars(n){
    const div_stars = document.createElement('div')
    for(let i = 1; i <= 5; i++){
        let span = document.createElement('span')
        span.className = 'fa fa-star'
        if (i <= n){
            span.classList.add('active')
        }
        div_stars.append(span)
    }
    return div_stars
}


div_elem.append(renderStars(5))
div_elem.append(renderStars(4))
div_elem.append(renderStars(3))
div_elem.append(renderStars(2))
div_elem.append(renderStars(1))
div_elem.append(renderStars(0))