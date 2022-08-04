/* 
    Exibir e esconder menu lateral da barra de navegação
*/

function sidebar() {
    const menu = document.querySelector(".button");
    const nav = document.querySelector(".sections");

    menu.addEventListener("click", function() {
        nav.classList.toggle("button-show");
    });

}

sidebar();