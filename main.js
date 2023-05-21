const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const search = document.querySelector('.search');
const navmenu = document.getElementById('nav-menu');
const slideLeftBttn = document.getElementById('left-arrow');

menu.addEventListener('click', function(){
    if(menu.className !==''){
        menu.style.display = 'none';
        closeMenu.style.display = 'block'
        navmenu.classList.add('show-nav')
    }
})

closeMenu.addEventListener('click', function(){
    if(menu.className !==''){
        this.style.display = 'none';
        menu.style.display = 'block';
        navmenu.classList.remove('show-nav');
    }
})

slideLeftBttn.addEventListener('click', function(){
    alert('hola!')
})