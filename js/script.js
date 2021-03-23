const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('nav')
burgerBtn.addEventListener('click',()=>{
    if(burgerBtn.classList.contains('active')&& menu.classList.contains('active')){
        burgerBtn.classList.remove('active')
        menu.classList.remove('active')
    }else{
        burgerBtn.classList.add('active')
        menu.classList.add('active')
    }
    
})