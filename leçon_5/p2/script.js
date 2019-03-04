'use strict';

/* // Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.
const h1text = $('h1').text();
console.log('h1text', h1text);

// Récupérez et logguez dans la console le contenu du titre de la page.
$('h1').text('My page title');

const articleHTML = $("#js-article").html;

// Récupérez et logguez dans la console le HTML de l'article.
$('#js-article').html(`
        <h2 > This is my article. </h2>
        <p> This is my article 's content.</p>
        <a href = "https://example.com"> Read more </a>
        `);



// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();
console.log('valeur champ saisie', inputValue);

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagle'); */

// Sélectionnez le formulaire dans le DOM. Ajoutez un écouteur d'événements 'submit' au formulaire pour déclencher un événement à chaque fois que le formulaire est soumis. Quand ce formulaire est soumis, récupérez la valeur saisie dans le champ de recherche. Si la valeur saisie est égale à 'Chat', insérez le texte 'Miaou!' dans le <div> avec l'id js-search-result. Sinon dans ce même <div> insérez du HTML <p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>.

// $('#js-search-form')[0].addEventListener('submit', (event) => {
//     event.preventDefault();
//     const inputValue = $('#js-search').val();

//     if (inputValue == 'chat') {
//         $('#js-search-result').html(`<p>Miaou!</p>`);
//     } else {
//         $('#js-search-result').html(`<p>Pas de resultats pour la recherche : <strong>'` + inputValue + `'</strong></p>`);
//     }

// });

// Ajoutez la classe 'alert-primary' au <div>.

// $('#js-alert').addClass('alert-primary');


// // Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.

// $('#js-alert').removeClass('alert-primary');

// // Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.

// $('#js-alert').addClass('alert alert-warning');

// // Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.

// if ($('#js-alert').hasClass('alert-warning')) {
//     $('#js-alert').removeClass('alert-warning');
// }

// // En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.

// $('#js-btn')[0].addEventListener('click', () => {
//     $('#js-alert').toggleClass('alert-success');
// });

// // Récupérez et logguez dans la console la couleur du fond du bouton.

// console.log($('#js-btn').css('background-color'));


// // Passez la couleur du fond du bouton en #71b8af.

// $('#js-btn').css('background-color', '#71b8af')

// // Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.

// $('#js-btn').css({
//     color: '#fff2d5',
//     'border-radius': '3px'
// })

// if ($('#js-danger-alert').hasClass('alert-danger')) {
//     $('#js-danger-alert-btn').removeClass('btn-success');
//     $('#js-danger-alert p').addClass('text-danger');
// }

// $('#js-danger-alert-btn')[0].addEventListener('click', () => {
//     $('#js-danger-alert-btn').css({
//         display: 'none'
//     });
// });
let counter = 0;

$('#js-btn').click(() => {
    console.log('Clicked!');
    counter++;
    if (counter > 5) {
        $('#js-btn').off('click');
    }
    console.log('counter', counter)
});

$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green')
});

$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue')
});

$('.tooltip-wrapper').mouseenter(() => {
    $('.tooltip').css({
        display: block
    });
}
$('.tooltip-wrapper').mouseleave(() => {
    $('.tooltip').css('display', 'none')
});