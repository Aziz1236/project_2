function homeHidden (){
const home_text = document.querySelector('.home__button-text')
home_text.classList.toggle('home__hidden')
};



const Clicks = document.querySelectorAll('.header__link[data-goto]')
const getAtr = document.getElementById('body')
Clicks.forEach(item => {
    item.addEventListener('click', function (){
        const Atr = this.getAttribute('data-goto')
        document.querySelector(Atr).scrollIntoView({behavior:'smooth'})
    } )
});








