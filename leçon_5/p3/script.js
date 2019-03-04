'use strict';

// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.
$('#js-show-alert').click(() => {
    $('#js-alert').show();
});

$('#js-hide-alert').click(() => {
    $('#js-alert').hide();
});

$('#js-slide-exemple-adress').click(() => {
    $('js-slide-example-links').slideDown();
});

// $('js-slide-example-links').fadeIn();
// $('js-slide-example-links').fadeOut();
$('js-slide-example-links').fadeToggle();


$('#js-animation-1')
    .delay(3000)
    .animate({
        left: '300px',
        width: '200px'
    }, 700)
    .animate({
        height: '400px'
    });
