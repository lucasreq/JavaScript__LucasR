// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'.

const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200/';
myImg.onload = () => {
    console.log('Done');
    document.body.appendChild(myImg)
}
myImg.onerror = () => {
    console.log('error');
}


// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.

// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02