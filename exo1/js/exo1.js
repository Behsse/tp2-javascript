// Déclaration de l'objet poneys
const poneys = [
    {
        nom : "Twilight Sparkle",
        genre : "Alicorne & Humaine",
        sexe : "Féminin",
        residence : "Poneyville, Canterlot",
        occupation : "Princesse de l'amitié & Professeur"
    },
    {
        nom : "Applejack",
        genre : "Poney terrestre & Humaine",
        sexe : "Féminin",
        residence : "Ferme de la Douce Pomme à l'extérieur de Poneyville",
        occupation : "Fermière"
    },
    {
        nom : "Fluttershy",
        genre : "Pégase & Humaine",
        sexe : "Féminin",
        residence : "Maisonnette à la lisière de la forêt désenchantée à l'extérieur de Poneyville",
        occupation : "Gardienne d'animaux & Chanteuse des Poneyphoniques"
    },
    {
        nom : "Rarity",
        genre : "Licorne & Humaine",
        sexe : "Féminin",
        residence : "Boutique Carrousel à Poneyville",
        occupation : "Couturière & Chanteuse des Poneyphoniques"
    },
    {
        nom : "Pinkie Pie",
        genre : "Poney terrestre & Humaine",
        sexe : "Féminin",
        residence : "Sugarcube Corner à Poneyville",
        occupation : "Pâtissière chez M. et Mme Cake & Organisatrice de fêtes"
    },
    {
        nom : "Rainbow Dash",
        genre : "Pégase & Humaine",
        sexe : "Féminin",
        residence : "Poneyville",
        occupation : "Wonderbolt"
    }
];

// Recupération du body dans une variable body
let body = document.getElementsByTagName('body')[0];
// Style body
body.style.background = "repeating-linear-gradient(-45deg, red 0%, yellow 7.14%, rgb(0,255,0) 14.28%,rgb(0,255,255) 21.4%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%)";
body.style.backgroundSize= "250vh 100vh";
body.style.backgroundRepeat = "no-repeat";

// Création d'une div 
let CreatedivPoneys = document.createElement("div");
// Ajout d'une id poneys à la div
CreatedivPoneys.setAttribute("id", "poneys");
// Ajout la div dans le body
body.appendChild(CreatedivPoneys);

// Selection de la div 
let divPoneys = document.getElementById("poneys");
// Création d'un ul
let listePoneys = document.createElement("ul");
// Ajout du ul dans la div
divPoneys.appendChild(listePoneys);


// On itère sur chaque élément de poneys
for(let poney of poneys){
    // On créer une div 
    let divListePoneys = document.createElement("div");
    divListePoneys.setAttribute("class", "divPoneys")
    listePoneys.appendChild(divListePoneys);

    //Style de la div
    divListePoneys.style.width = "30%";
    divListePoneys.style.margin = "30px";
    divListePoneys.style.padding = "20px";
    divListePoneys.style.textAlign = "center";
    divListePoneys.style.border = "1px solid #F24C4C";
    divListePoneys.style.borderRadius = "25px";

    // On créer un li
    let puceNom = document.createElement("li");
    let puceGenre = document.createElement("li");
    let puceSexe = document.createElement("li");
    let puceResidence = document.createElement("li");
    let puceOccupation = document.createElement("li");
    
    // On remplis les li
    puceNom.innerText = `${poney.nom}`;
    puceGenre.innerText = `${poney.genre}`;
    puceSexe.innerText = `${poney.sexe}`;
    puceResidence.innerText = `${poney.residence}`;
    puceOccupation.innerText = `${poney.occupation}`;
    
    // On ajoute les li dans les ul
    divListePoneys.appendChild(puceNom);
    divListePoneys.appendChild(puceGenre);
    divListePoneys.appendChild(puceSexe);
    divListePoneys.appendChild(puceResidence);
    divListePoneys.appendChild(puceOccupation);

    // Style background div (image logo My Little Pony)
    divListePoneys.style.backgroundImage = "url(img/bg.jpg)";
    divListePoneys.style.backgroundPosition = "30% 70%";
    divListePoneys.style.backgroundSize = "100%"
    divListePoneys.style.backgroundRepeat = "no-repeat";
}

//Style
listePoneys.setAttribute("id", "listePoneys")
let styleLiList = document.getElementById("listePoneys");
styleLiList.style.listStyle = "none";
listePoneys.style.display = "flex";
listePoneys.style.flexWrap = "wrap";
listePoneys.style.justifyContent = "center";
listePoneys.style.alignItems = "center";
listePoneys.style.color = "#fff";




