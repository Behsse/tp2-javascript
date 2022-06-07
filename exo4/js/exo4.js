// Recupération du body dans une variable body
let body = document.getElementsByTagName('body')[0];
//Style body
body.style.backgroundColor = "#112B3C";

// Création d'une div 
let CreatedivFizzBuzz = document.createElement("div");
// Ajout d'une id fizzbuzz à la div
CreatedivFizzBuzz.setAttribute("id", "fizzbuzz");
// Ajout la div dans le body
body.appendChild(CreatedivFizzBuzz);

// Création d'un "span"
let spanFizzBuzz = document.createElement("span");
// Attribut l'id compteurFizzBuzz au span
spanFizzBuzz.setAttribute("id", "compteurFizzBuzz");


// ============== CREATION DU BOUTON D'INCREMENTATION ================ \\

// Création du premier bouton d'incrementation
let buttonDecrementFizzBuzz = document.createElement("button");
// Attribut l'id buttonIncrementFizzBuzz au bouton
buttonDecrementFizzBuzz.setAttribute("id", "buttonDecrementFizzBuzz");
buttonDecrementFizzBuzz.setAttribute("class", "button");
// Définis le texte dans le bouton
buttonDecrementFizzBuzz.innerText = "-1 boy";
// Ajoute le bouton dans la div CreatedivFizzBuzz
CreatedivFizzBuzz.appendChild(buttonDecrementFizzBuzz);


// ====================== AJOUT DU SPAN AU MILIEU DES DEUX BOUTONS ========================== \\

// Ajoute au span la chaine de caractère 0
spanFizzBuzz.innerText = "0";
// Ajoute le span dans la div (CreatedivFizzBuzz)
CreatedivFizzBuzz.appendChild(spanFizzBuzz);


// ============== CREATION DU BOUTON DE DECREMENTATION ================ \\

// Tout comme le bouton d'incrementation au dessus ► Simple modification du nom, de l'id et le texte du bouton
let buttonIncrementFizzBuzz = document.createElement("button");
buttonIncrementFizzBuzz.setAttribute("id", "buttonIncrementFizzBuzz");
buttonIncrementFizzBuzz.setAttribute("class", "button");
buttonIncrementFizzBuzz.innerText = "+1 boy";
CreatedivFizzBuzz.appendChild(buttonIncrementFizzBuzz);


// Récupération des deux boutons par leurs id dans des varibales (buttonIncr & buttonDecr)
let buttonIncr = document.getElementById("buttonIncrementFizzBuzz");
let buttonDecr = document.getElementById("buttonDecrementFizzBuzz");

// Création d'un compteur pour incrementer et décrementer (initialisation à zéro comme le début de la valeur du span (0))
let compteurFizzBuzz = 0;
// Récupère l'id compteurFizzBuzz ► Le span 
let FizzBuzzCompteur = document.getElementById("compteurFizzBuzz");

// Ecoute d'event sur le bouton d'incrementation (buttonIncr)
buttonIncr.addEventListener("click", (event) =>{
    // Condition pour afficher 0 quand le compteurFizzBuzz = 0
    if(compteurFizzBuzz == 0){
        FizzBuzzCompteur.innerText = compteurFizzBuzz;
        compteurFizzBuzz++;
    }
    // Vérification du modulo pour chaque valeur de compteurFizzBuzz (% 15, % 3 et % 5)
    else if(compteurFizzBuzz % 15 == 0){
        // Insert et remplace le texte "FizzBuzz" dans le span
        FizzBuzzCompteur.innerText = "FizzBuzz";
        // Incrementation de 1 sur le compteur
        compteurFizzBuzz++;
    }else if(compteurFizzBuzz % 3 == 0){
        FizzBuzzCompteur.innerText = "Fizz";
        compteurFizzBuzz++;
    }else if(compteurFizzBuzz % 5 == 0){
        FizzBuzzCompteur.innerText = "Buzz";
        compteurFizzBuzz++;
    }else{
        // Affichage du compteur en nombre si les autres conditions ne sont pas respectées
        FizzBuzzCompteur.innerText = compteurFizzBuzz;
        compteurFizzBuzz++;
    }
});

// Tout comme l'écoute de l'event sur le bouton d'incrementation
// L'écoute d'event sur le bouton de décrémentation (buttonDecr)
buttonDecr.addEventListener("click", (event) =>{
    // Condition pour afficher 0 quand le compteurFizzBuzz = 0
    if(compteurFizzBuzz == 0){
        FizzBuzzCompteur.innerText = compteurFizzBuzz;
        compteurFizzBuzz--;
    }
    else if(compteurFizzBuzz % 15 == 0){
        FizzBuzzCompteur.innerText = "FizzBuzz";
        // Décrementation de 1 sur le compteur
        compteurFizzBuzz--;
    }else if(compteurFizzBuzz % 3 == 0){
        FizzBuzzCompteur.innerText = "Fizz";
        compteurFizzBuzz--;
    }else if(compteurFizzBuzz % 5 == 0){
        FizzBuzzCompteur.innerText = "Buzz";
        compteurFizzBuzz--;
    }else{
        FizzBuzzCompteur.innerText = compteurFizzBuzz;
        compteurFizzBuzz--;
    }
});

//Styles
FizzBuzzCompteur.style.color = "#EFEFEF";
FizzBuzzCompteur.style.fontSize = "50px";
FizzBuzzCompteur.style.margin = "100px";

CreatedivFizzBuzz.style.display = "flex";
CreatedivFizzBuzz.style.justifyContent = "center";
CreatedivFizzBuzz.style.alignItems = "center";
CreatedivFizzBuzz.style.marginTop = "20%";

// Style des deux boutons

    // Bouton incrémentation
buttonIncr.style.background = "none";
buttonIncr.style.padding = "10px 25px";
buttonIncr.style.borderRadius = "20px";
buttonIncr.style.color = "#fff";
buttonIncr.style.border = "2px solid #EFEFEF";
buttonIncr.style.fontSize = "20px";

    // Bouton de décrémentation
buttonDecr.style.background = "none";
buttonDecr.style.padding = "10px 25px";
buttonDecr.style.borderRadius = "20px";
buttonDecr.style.color = "#fff";
buttonDecr.style.border = "2px solid #EFEFEF";
buttonDecr.style.fontSize = "20px";




