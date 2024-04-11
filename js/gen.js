let opnBtn = document.querySelector('.menuOpenBtn');
let clsBtn = document.querySelector('.menuClseBtn');

opnBtn.addEventListener('click', () => {
    opnBtn.style.display = 'none';
    clsBtn.style.display = 'block';
    navUl.style.display = 'flex';
})

clsBtn.addEventListener('click', () => {
    clsBtn.style.display = 'none';
    opnBtn.style.display = 'block';
    navUl.style.display = 'none';
})

const homeBtn = document.querySelector('.hmeBtn');
const abtBtn = document.querySelector('.abtBtn');
const srvBtn = document.querySelector('.srvBtn');
const getBtn = document.querySelector('.getBtn');
const navUl = document.querySelector('.navUl');
const getBtnt = document.querySelector('#getBtnt');

function clickedhmeBtn(){
    navUl.classList.add('clickedhmeBtn')
    navUl.classList.remove('clickedabtBtn')
    navUl.classList.remove('clickedsrvBtn')
    navUl.classList.remove('clickedgetBtn')
}

function clickedabtBtn(){
    navUl.classList.add('clickedabtBtn')
    navUl.classList.remove('clickedhmeBtn')
    navUl.classList.remove('clickedsrvBtn')
    navUl.classList.remove('clickedgetBtn')
}

function clickedsrvBtn(){
     navUl.classList.add('clickedsrvBtn')
    navUl.classList.remove('clickedhmeBtn')
    navUl.classList.remove('clickedabtBtn')
    navUl.classList.remove('clickedgetBtn')
}

function clickedgetBtn(){
    navUl.classList.add('clickedgetBtn')
    navUl.classList.remove('clickedhmeBtn')
    navUl.classList.remove('clickedabtBtn')
    navUl.classList.remove('clickedsrvBtn')
}

homeBtn.addEventListener('click', () => {
    clickedhmeBtn();
})

abtBtn.addEventListener('click', () => {
    clickedabtBtn();
})

srvBtn.addEventListener('click', () => {
    clickedsrvBtn();
})

getBtn.addEventListener('click', () => {
    clickedgetBtn();
})

getBtnt.addEventListener('click', () => {
    clickedgetBtn();
})



