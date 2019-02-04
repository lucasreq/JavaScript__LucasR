
//# DOM


//```javascript

// const myDivs = 
// document.getElementsByTagName('div');
// console.log('myDivs',myDivs);

// const myDivs2 = 
// document.querySelectorAll('div');
// console.log('myDivs2',myDivs);

// const myParagraphs =
// document.getElementsByClassName('secondary-paragraph');
// const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');

// const myUniqueEl = 
// document.getElementById('js-unique-el');
// const myUniqueEl2 =
// document.querySelectorAll('#js-unique-el');

// const myParagraphsInDivs =
// document.querySelectorAll('div p');
// console.log('myParagraphsInDivs',myParagraphsInDivs);

// const spanBeforeDiv = document.querySelectorAll('div + span');
// console.log('spanBeforeDiv',spanBeforeDiv)

// const firstP = document.querySelector('.first-p');
// firstP.innerText= 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// const secondP = document.querySelector('.second-p');
// secondP.innerHTML = '<span>Hello</span>';
// console.log('secondP html', secondP.innerHTML);

// const myImg = document.querySelector('img');
// myImg.setAttribute('width','50%');
// myImg.setAttribute('height','auto');

// myImg.setAttribute('alt','Random image');

// firstP.style.color = 'blue';
// firstP.style.fontSize = '1.5rem';

// myImg.className = 'my-class'; // myImg.className += 'another-class'
// myImg.classList.add('my-class');
// myImg.classList.remove('some-class');

// const myBody = document.querySelector('body');
// const newEl = document.createElement('p');
// newEl.innerText = 'Hello';
// newEl.style.color = 'red';
// myBody.appendChild(newEl);

//myBody.removeChild(newEl2);
//```


//## Navigator
// * 1. nom de votre navigateur
const addUnTruc = document.querySelector('.main-paragraph');
addUnTruc.innerText = navigator.userAgent;

// * 2. langue principal de votre navigateur
const addUnAutreTruc = document.querySelector('.second-paragraph');
addUnAutreTruc.innerText = navigator.language;

// * 3. platforme de votre ordinateur
const addUnMachin = document.querySelector('.paragraph-3');
addUnMachin.innerText = navigator.platform;

//* 4. si vous avez activé les cookies dans votre navigateur
const addUnAutreMachin = document.querySelector('.paragraph-4');
addUnAutreMachin.innerText = navigator.cookieEnabled;

//## screen

// ### Affichez sur la page:

// * 1. largeur de l'écran de votre ordinateur:
const superPage1 = document.querySelector('.ecran-largeur');
superPage1.innerText = screen.width;

// * 2. hauteur de l'écran de votre ordinateur:
const superPage2 = document.querySelector('.ecran-hauteur');
superPage2.innerText = screen.height;

// * 3. orientation de votre écran:

const superPage3 = document.querySelector('.ecran-3');
superPage3.innerText = screen.orientation["type"];

//## window
// Affichez sur la page:
// * 1. largeur de la fenêtre d'affichage de votre navigateur

const superEcran = document.querySelector('.window-1');
superEcran.innerText = window.width;

// * 2. hauteur de la fenêtre d'affichage de votre navigateur

const superEcran2 = document.querySelector('.window-2');
superEcran2.innerText = window.height;

// * 3. largeur de votre navigateur

const superEcran3 = document.querySelector('.window-3');
superEcran3.innerText = navigator.width;

// * 4. hauteur de votre navigateur
const superEcran4 = document.querySelector('.window-4');
superEcran4.innerText = navigator.height;


//manip bouton

const myBtn = document.querySelector('#js-btn')
myBtn.addEventListener('click', (event) => {
    console.log('Clicked', event);
});

let isClicked = false;
const myGreyBtn = document.querySelector('#js-btn-grey')
myGreyBtn.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked){
        myGreyBtn.style.backgroundColor = 'green';

    }else{
        myGreyBtn.style.backgroundColor = 'grey';
    }
});

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter',() => {
    hoveredBtn.style.backgroundColor = 'red';
    hoveredBtn.textContent = 'YAMETE!! '
})
hoveredBtn.addEventListener('mouseleave',() => {
    hoveredBtn.style.backgroundColor = 'initial';
    hoveredBtn.textContent = 'Passe moi dessus'
})

window.addEventListener('contextmenu',(event) => {
    event.preventDefault();
    console.log('Mouse right button is clicked... Pourquoi il faut ça ce fdp');
})

const jsForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-input');

myInput.addEventListener('keyup', (e) => {
    console.log('e',e);
    console.log('input value : ', myInput.value);
})

jsForm.addEventListener('submit',(event) => {
    event.preventDefault
    alert(`Your input is ${myInput.value}`);
})