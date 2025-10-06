// for burger navbar
const openNav = document.querySelector('#menu-toggle');
const NavContainer = document.querySelector('.NavContainer');
const close = document.querySelector('#Close');

openNav.addEventListener("click", ()=> {
    if(openNav) {
        NavContainer.style.display = "flex";
    } 
})

close.addEventListener('click', ()=> {
    if (close) {
        NavContainer.style.display = "none";
        
    }
})