const $btnMenu = document.querySelector('.btnMenu_open')
const $Menu = document.querySelector('.menu')

$btnMenu.addEventListener('click', function(){
    $Menu.classList.toggle('menuOpen')
})