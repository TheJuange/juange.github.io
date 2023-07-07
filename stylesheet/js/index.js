const menu=document.getElementById('menu');
const mainMenu=document.getElementById('main-menu');
menu.addEventListener('click', () =>{
mainMenu.classList.toggle('main-menu__show');
});