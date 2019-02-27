// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

'use strict'

setTimeout(() => {
    console.log('hello');
}, 3000)


// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.

setTimeout(() => {
    console.log('Logged after 5 seconds');
}, 5000)

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener('click', () => {
    setTimeout(() => {
        console.log('clicked')
    }, 3000);
})

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

const hoveredDiv = document.querySelector('#js-pokemon');
hoveredDiv.addEventListener('mouseenter', () => {
    setTimeout(() => {
        console.log('I was hovered 5.5 seconds ago');
        console.log('Congratulation! You catch a Ratata!');
    }, 5000)
});