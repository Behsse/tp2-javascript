// Recupération du body dans une variable body
let body = document.getElementsByTagName('body')[0];
// Style body
body.style.backgroundImage = "url(img/bg.jpg)";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "center";
// body.style.margin = "50px";
body.style.fontFamily = "'VT323', monospace";

// Création d'une div 
let CreatedivHours = document.createElement("div");
// Ajout d'une id hours à la div
CreatedivHours.setAttribute("id", "hours");
// Ajout la div dans le body
body.appendChild(CreatedivHours);

// Selection de la div 
let divHours = document.getElementById("hours");
// Créer un span
let horlogeSpan = document.createElement("span");
// Attribut l'id horloge au span
horlogeSpan.setAttribute("id", "horloge");
// Ajout du span dans la div
CreatedivHours.appendChild(horlogeSpan);
// Recupère le span par son ID
let SpanHorloge = document.getElementById("horloge");

// Raffraichis toutes les 1 seconde (1000 = 1000ms)
function refresh(){
    let temps = 1000;
    // Régler l'heure en l'affichant avec la fonction (afficheHeure()) et applique le temps de raffraichissement
    setTimeout("afficheHeure()", temps);
}

// Affiche l'heure par heure, minute et seconde
function afficheHeure(){
    // Itère la date actuelle
    let date = new Date();
    // Attribut l'heure de la date dans la variable heure
    let heure = date.getHours();
    // Attribut les minutes de la date dans la variable minute
    let minute = date.getMinutes();
    // Attribut les secondes de la date dans la variable seconde
    let seconde = date.getSeconds();

    // Condition affiche le zéro devant le chiffre quand les attributs sont des chiffres
    if(heure < 10){
        heure = "0" + heure;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(seconde < 10){
        seconde = "0" + seconde;
    }
    // Création de l'affichage de l'horloge avec des ":" en séparation
    let horloge = heure + ":" + minute + ":" + seconde;
    // Inject l'affichage dans le span
    horlogeSpan.innerHTML = horloge;
    // Appel la fonction refresh() pour actualiser l'horloge
    refresh();
}

afficheHeure();



//Styles

divHours.style.textAlign = "center";
divHours.style.marginTop = "15%";
divHours.style.padding = "130px";
// divHours.style.height = "100vh";
// divHours.style.width = "100vh";
divHours.style.backgroundImage = "url(img/cadre-pkm-pile.svg)";
divHours.style.backgroundRepeat = "no-repeat";
divHours.style.backgroundPosition = "60% 100%";
divHours.style.backgroundSize = "50%";


SpanHorloge.style.fontSize = "150px";
SpanHorloge.style.color = "#293462";

// Création d'une div pour Pikachu
let createDivPikachu = document.createElement("div");
createDivPikachu.setAttribute("id", "div-pikachu");
body.appendChild(createDivPikachu);

let divPikachu = document.getElementById("div-pikachu");
let imgPikachu = document.createElement("img");
imgPikachu.setAttribute("src", "img/pikachu.gif");
imgPikachu.setAttribute("id", "img-pikachu");
divPikachu.appendChild(imgPikachu);
divPikachu.style.display = "flex";
divPikachu.style.position = "relative";
divPikachu.style.bottom = "10px";
divPikachu.style.right = "70px";

imgPikachu.style.width = "150px";
imgPikachu.style.height = "150px";
divPikachu.style.justifyContent = "flex-end";

let CreateDivLight = document.createElement("div");
CreateDivLight.setAttribute("id", "light");
body.appendChild(CreateDivLight);
let divlight = document.getElementById("light");
let imgLight = document.createElement("img");
imgLight.setAttribute("src", "img/eclaire.gif");
imgLight.setAttribute("id", "img-light");
CreateDivLight.appendChild(imgLight);

imgLight.style.height = "180px";
imgLight.style.width = "180px";

divlight.style.position = "relative";
divlight.style.bottom = "300px";
divlight.style.right = "200px";
divlight.style.transform = "rotate(180deg)"
