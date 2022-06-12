const control = document.querySelector('#burger');
const card = document.querySelector('.menu-list');
const navLinks = document.querySelectorAll('.menu-list li')


function toggleControl() {
    control.classList.toggle('toggle');
    card.classList.toggle('nav-active');

    navLinks.forEach((link, i) =>{
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.2}s`
        }
    })
}

control.addEventListener('click', toggleControl)

console.log('hello')