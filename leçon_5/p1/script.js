$('div');
console.log('all divs', $('div'));


$('.js-paragraph');
console.log('select bu class name', $('.js-paragraph'));

$('h3:first');
console.log('le premier titre <h3>', $('h3:first'));

console.log('le premier <th> du premier <tr>', $('tr:first th:first'))

console.log('le premier <td> de chaque <tr>', $('tr td:first'))

$('a[target="_blank]"');

console.log("tout les liens externes ceux qui ont l'attribut target=blank", $('a[target="_blank]"'));

console.log("tout les liens internes ceux qui n'ont pas d'attribut target blank", $('a[target="_blank]"'))

$('form :button');