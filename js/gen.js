const homeLink = document.querySelector('.homeLink');
const aboutLink = document.querySelector('.aboutLink');
const serviceLink = document.querySelector('.serviceLink');
const getintouchLink = document.querySelector('.getintouchLink');
const getintouchBtn = document.querySelector('#getintouchBtn');
const navUl = document.querySelector('.navUl');
const clsBtn = document.querySelector('.clsBtn');
const opnBtn = document.querySelector('.opnBtn');

homeLink.addEventListener('click', () => {
    clickedHomeLink();
})

aboutLink.addEventListener('click', () => {
    clickedbAoutLink();
})

serviceLink.addEventListener('click', () => {
    clickedServiceLink();
})

getintouchLink.addEventListener('click', () => {
    clickedGetintouchLinkk();
})

getintouchBtn.addEventListener('click', () => {
    clickedGetintouchLinkk();
})



function clickedHomeLink(){
    homeLink.classList.add('active')
    homeLink.classList.remove('removeactive')
    aboutLink.classList.add('removeactive')
    serviceLink.classList.add('removeactive')
    getintouchLink.classList.add('removeactive')

    navUl.classList.add('clickedHome')
    navUl.classList.remove('clickedAbout')
    navUl.classList.remove('clickedService')
    navUl.classList.remove('clickedGetintouch')
}

function clickedbAoutLink(){
    aboutLink.classList.add('active')
    aboutLink.classList.remove('removeactive')
    homeLink.classList.add('removeactive')
    serviceLink.classList.add('removeactive')
    getintouchLink.classList.add('removeactive')

    navUl.classList.remove('clickedHome')
    navUl.classList.add('clickedAbout')
    navUl.classList.remove('clickedService')
    navUl.classList.remove('clickedGetintouch')
}

function clickedServiceLink(){
    serviceLink.classList.add('active')
    serviceLink.classList.remove('removeactive')
    homeLink.classList.add('removeactive')
    aboutLink.classList.add('removeactive')
    getintouchLink.classList.add('removeactive')
    
    navUl.classList.remove('clickedHome')
    navUl.classList.remove('clickedAbout')
    navUl.classList.add('clickedService')
    navUl.classList.remove('clickedGetintouch')
}

function clickedGetintouchLinkk(){
    getintouchLink.classList.add('active')
    getintouchLink.classList.remove('removeactive')
    homeLink.classList.add('removeactive')
    aboutLink.classList.add('removeactive')
    serviceLink.classList.add('removeactive')
    
    navUl.classList.remove('clickedHome')
    navUl.classList.remove('clickedAbout')
    navUl.classList.remove('clickedService')
    navUl.classList.add('clickedGetintouch')
}

opnBtn.addEventListener('click', () => {
    opnBtn.style.display = 'none'
    clsBtn.style.display = 'block'
    navUl.style.display = 'flex'
    
});

clsBtn.addEventListener('click', () => {
    opnBtn.style.display = 'block'
    clsBtn.style.display = 'none' 
    navUl.style.display = 'none'
    
    
});
