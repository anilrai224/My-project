const openMenu=document.querySelector('.openMenu');
const navbar_right=document.querySelector('.navbar-right');
const closeMenu=document.querySelector('.closeMenu');

openMenu.addEventListener('click', ()=>{
    navbar_right.classList.toggle('active');
})


closeMenu.addEventListener('click', ()=>{
    navbar_right.classList.toggle('active');
})