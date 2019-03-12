'use sctrict'

// clic afficher/masquer
$('#navbarDropdownMenuLink').click(() => {
    $('#navbarDropdownMenu').slideToggle();
});


// calculer le BMI + affiche le résultat avec un commentaire
$('#js-bmi-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue1 = $('#js-bmi-weight').val();
    const inputValue2 = $('#js-bmi-height').val();

    // Conversion char --> Float
    var weight = parseFloat(inputValue1);
    var height = parseFloat(inputValue2);

    //Calcul BMI
    var BMI = weight/ ((height / 100) * (height / 100));

    console.log(BMI)

    // Reinitialise le div après plusieurs requêtes
    $('#idk').empty();


    // Conditions d'affichage, commentaire du poids
    if (BMI < 18.5) {
        console.log("considered underweight");
        var element = document.createElement("div");
        element.innerHTML = ("<p> Votre BMI est égale à " + BMI + ". Considered underweight.");
        alert("considered underweight")
        $('#idk').append(element);
    }
    if (BMI >= 18.5 && BMI <= 25) {
        console.log("healthy weight");
        var element = document.createElement("div");
        element.innerHTML = ("<p> Votre BMI est égale à " + BMI + ". Healthy weight");
        alert("healthy weight")
        $('#idk').append(element);
    }
    if (BMI > 25) {
        console.log("considered overweight");
        var element = document.createElement("div");
        element.innerHTML = ( "<p> Votre BMI est égale à " + BMI + ". Considered overweight");
        alert("Too fat")
        $('#idk').append(element);
    }
});

// Affiche la date actuelle en années
var yeardate = new Date().getFullYear();
$('#js-current-year').append(yeardate);


// Le html à genérer
const bmiFacts = [
    {
        title: 'Future weight of children can be anticipated by BMI',
        description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
        img: 'http://lorempixel.com/200/200/cats'
    },
    {
        title: 'Losing BMI weight lowers the risk of diabetes',
        description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
        img: 'http://lorempixel.com/200/200/sports'
    },
    {
        title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
        description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
        img: 'http://lorempixel.com/200/200/fashion'
    },
    {
        title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
        description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
        img: 'http://lorempixel.com/200/200/food'
    },
];


// Création des divs
bmiFacts.forEach((el, index) => {
    var element1 = document.createElement("div");
    element1.className = 'col col-12 col-sm-6 col-lg-3 mb-3'
    element1.innerHTML = `
    <div class="card h-100">
      <img src="${el.img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${index + 1}${el.title}</h5>
        <p class="card-text">${el.description}</p>
      </div>
    </div>
    `
    $('#js-facts').append(element1)
})

// pub
var clique = 0
$('#js-ad-close')[0].addEventListener('click', () => {
    if (clique == 1) {
        $('#js-ad').remove()
    } else {
        window.open(`https://cat-bounce.com/`, '_blank')
        clique++;
    }
})

