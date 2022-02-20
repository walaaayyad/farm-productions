const navbar = document.querySelector('.navbar');

const scrollHandeler = ()=> {
    if(window.scrollY >= 70) {
        navbar.classList.add('navbar-top');
    }else{
        navbar.classList.remove('navbar-top');
    
    }
}

window.addEventListener('scroll', ()=> {
    scrollHandeler();
    });