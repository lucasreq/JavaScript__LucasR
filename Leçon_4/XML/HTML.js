// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.


let xhttp = new XMLHttpRequest();
// onreadystatechange est appelé de manière asynchrone et sera déclenché à chaque changement du statut de l'objet "XMLHttpRequest" (comme un écouteur d'événement)
xhttp.onreadystatechange = () => {
    /*
    Si l'état de "XMLHttpRequest" est égal à 4 (4 signifie "DONE"). Voir tous les statuts: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    Et si le statut la requête est égal à 200 (Ok / réussite)
    */
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        // procédez à un traitement de la réponse
        console.log(xhttp.responseText)
        const rawValue = xhttp.responseText
        const parsedValue = JSON.parse(rawValue)

        const hanSoloData = `
      <p>Nom : ${parsedValue.name}</p>
      <p>Sexe : ${parsedValue.gender}</p>
      <p>Date de naissance : ${parsedValue.birth_year}</p>
      `;

        document.body.innerHTML = hanSoloData;
    }
};
// La méthode "open" crée la requête
xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
// Quand le traitement de la requête est terminé, la méthode "send" envoie la requête
xhttp.send();


// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText)
        const rawValue = xhttp2.responseText;
        const parsedValue = JSON.parse(rawValue);

        parsedValue.results.forEach(person => {
            const myDiv = document.createElement('div');
            const personeData = `
            <p>Nom : ${person.name}</p>
            <p>Sexe : ${person.gender}</p>
            <p>Date de naissance : ${person.birth_year}</p>
            `;

            myDiv.innerHTML = personeData;
            document.body.appendChild(myDiv);
        })
    };
};
xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
xhttp2.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:
const planets = [1, 2, 3, 4, 5];

planets.forEach(planet => {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp2.status == 200) {
            console.log(xhttp.responseText)
        };
    };
    xhttp.open('GET', 'https://swapi.co/api/planets/' + planet, true);
    xhttp.send();
})

// Récupérez l'information du profil de Chewbacca (son id dans la base de données est 13) en format wookiee. 
// Attention les clés json sont également en wookiee. Pour chaque clé json, si la valeur est primitive 
// (string, number, etc), affichez la paire de clé/valeur.