<nav class="navbar">
<ul class="navbar-menu">
    <li><a href="#" class="navbar-menu__link navbar-menu__link--active">Link 1</a></li>
    <li><a href="#" class="navbar-menu__link">Link 2</a></li>
    <li><a href="#" class="navbar-menu__link">Link 3</a></li>
    <li><a href="#" class="navbar-menu__link">Link 4</a></li>
</ul>
</nav>    
// -----------------------------#
// ------------------------------#

let dropdown = document.querySelector(".dropdown");

const handlerToggle = () => {
        let menu = document.querySelector(".navbar-menu");

        // menu.classList.toggle("navbar-menu__mobile");

        if(menu.classList.contains("navbar-menu__mobile")){
            menu.classList.remove("navbar-menu__mobile")
        }else{
            menu.classList.add("navbar-menu__mobile")
        }
}

dropdown.addEventListener("click", handlerToggle)