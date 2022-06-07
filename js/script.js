// Recupération du body dans une variable body
let body = document.getElementsByTagName('body')[0];
// Création d'un header (header)
let header = document.createElement("header");
// Création d'une balise h1 (h1Home)
let h1Home = document.createElement("h1");

body.style.backgroundColor="#7C3E66";
// Insert dans le body le header (header) et la balise h1 (h1Home)
body.appendChild(header);
header.appendChild(h1Home);

// Insert dans la balise h1 (h1Home) le texte "Menu Pricipal"
h1Home.innerText = "Menu Principal";
// Centre le texte 
h1Home.style.textAlign = "center";
h1Home.style.margin = "100px";
// Appel la fonction smoothlyChangeColor pour changer la couleur du h1
smoothlyChangeColor();

// Création d'une div (divFlex) qui va permette de flex les différents cartes des exercices
let divFlex = document.createElement("div");
// Insert la divFlex dans le body
body.appendChild(divFlex);

// Ajoute du style dans la divFlex ► (Flex, width, justify-content)
divFlex.style.display = "flex";
divFlex.style.width = "100%";
divFlex.style.justifyContent = "space-around";



// =============================================================================== \\
// ===================== Création de la carte de l'exercice 1 ===================== \\
// =============================================================================== \\

// Création d'une div (divCardExo1) pour englober les éléments de la carte de l'exercice 1
let divCardExo1 = document.createElement("div");
// Attribue l'ID exo1 à la div (divCardExo1)
divCardExo1.setAttribute("id","exo1");
// Insert la divCardExo1 dans la divFlex
divFlex.appendChild(divCardExo1);

// Recupère la divCardExo1 grâce à l'ID exo1 dans la variable CardExo1
let CardExo1 = document.getElementById("exo1");
// Ajoute du style de CardExo1 ► Ajoute une bordure, un border-radius et un padding
CardExo1.style.border = "1px solid black";
CardExo1.style.borderRadius = "20px";
CardExo1.style.padding = "25px";
CardExo1.style.marginRight = "20px";
CardExo1.style.backgroundColor = "#F2D1D1";

// Création d'une balise h2 (h2Exo1)
let h2Exo1 = document.createElement("h2");
// Création de deux p (PremierTextExo1 & DeuxiemeTextExo1)
let PremierTextExo1 = document.createElement("p");
let DeuxiemeTextExo1 = document.createElement("p");

// Insert du texte dans le h2 (h2Exo1)
h2Exo1.innerText = "Exercice 1 - La liste";
// Centre le h2
h2Exo1.style.textAlign = "center";

// Insert du texte dans les différents p (PremierTextExo1 & DeuxiemeTextExo1)
PremierTextExo1.innerText = "Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'. Vous pouvez trouver les noms sur ce lien : https://mlp.fandom.com/fr/wiki/Personnages";
DeuxiemeTextExo1.innerText = "Vous générerez une liste html qui affichera les différents noms de personnages.";

// Ajoute le h2 et les deux p dans la divCardExo1
divCardExo1.appendChild(h2Exo1);
divCardExo1.appendChild(PremierTextExo1);
divCardExo1.appendChild(DeuxiemeTextExo1);

// Ajoute du style à la divCardExo1
divCardExo1.style.width = "20%";

// Création d'un a (buttonAccesExo1)
let buttonAccesExo1 = document.createElement("a");
// Ajoute comme attribut href et le lien d'une page (exo1/exo1.html ► Accèder à l'exercie 1)
buttonAccesExo1.setAttribute("href", "exo1/exo1.html");
// Insert du texte dans le a (buttonAccesExo1)
buttonAccesExo1.innerText = "Accèder à l'exercice"
// Ajoute le a buttonAccesExo1 dans la divCardExo1
divCardExo1.appendChild(buttonAccesExo1);



// =============================================================================== \\
// ===================== Création de la carte de l'exercice 2 ===================== \\
// ================================================================================= \\


// Création d'une div (divCardExo2) pour englober les éléments de la carte de l'exercice 1
let divCardExo2 = document.createElement("div");
// Attribue l'ID exo2 à la div (divCardExo2)
divCardExo2.setAttribute("id","exo2");
// Insert la divCardExo2 dans la divFlex
divFlex.appendChild(divCardExo2);

// Recupère la divCardExo2 grâce à l'ID exo2 dans la variable CardExo2
let CardExo2 = document.getElementById("exo2");
// Ajoute du style de CardExo2 ► Ajoute une bordure, un border-radius et un padding ect...
CardExo2.style.border = "1px solid black";
CardExo2.style.borderRadius = "20px";
CardExo2.style.padding = "25px";
CardExo2.style.marginRight = "20px";
CardExo2.style.backgroundColor = "#FF06B7";

// Création d'une balise h2 (h2Exo2)
let h2Exo2 = document.createElement("h2");
// Création de deux p (PremierTextExo2)
let PremierTextExo2 = document.createElement("p");

// Insert du texte dans le h2 (h2Exo2)
h2Exo2.innerText = "Exercice 2 - L'horloge";
// Centre le h2
h2Exo2.style.textAlign = "center";

// Insert du texte dans les différents p (PremierTextExo2)
PremierTextExo2.innerText = "Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes pour afficher l'heure actuelle.";

// Ajoute le h2 et les deux p dans la divCardExo2
divCardExo2.appendChild(h2Exo2);
divCardExo2.appendChild(PremierTextExo2);

// Ajoute du style à la divCardExo2
divCardExo2.style.width = "20%";

// Création d'un a (buttonAccesExo2)
let buttonAccesExo2 = document.createElement("a");
// Ajoute comme attribut href et le lien d'une page (exo2/exo2.html ► Accèder à l'exercie 2)
buttonAccesExo2.setAttribute("href", "exo2/exo2.html");
// Insert du texte dans le a (buttonAccesExo2)
buttonAccesExo2.innerText = "Accèder à l'exercice"
// Ajoute le a buttonAccesExo2 dans la divCardExo2
divCardExo2.appendChild(buttonAccesExo2);



// =============================================================================== \\
// ===================== Création de la carte de l'exercice 3 ===================== \\
// =============================================================================== \\

// Création d'une div (divCardExo3) pour englober les éléments de la carte de l'exercice 3
let divCardExo3 = document.createElement("div");
// Attribue l'ID exo3 à la div (divCardExo3)
divCardExo3.setAttribute("id","exo3");
// Insert la divCardExo3 dans la divFlex
divFlex.appendChild(divCardExo3);

// Recupère la divCardExo3 grâce à l'ID exo3 dans la variable CardExo3
let CardExo3 = document.getElementById("exo3");
// Ajoute du style de CardExo3 ► Ajoute une bordure, un border-radius et un padding
CardExo3.style.border = "1px solid black";
CardExo3.style.borderRadius = "20px";
CardExo3.style.padding = "25px";
CardExo3.style.marginRight = "20px";
CardExo3.style.backgroundColor = "#A5BECC";

// Création d'une balise h2 (h2Exo3)
let h2Exo3 = document.createElement("h2");
// Création de deux p (PremierTextExo3 & DeuxiemeTextExo3)
let PremierTextExo3 = document.createElement("p");

// Insert du texte dans le h2 (h3Exo3)
h2Exo3.innerText = "Exercice 3 - Le FizzBuzz";
// Centre le h2
h2Exo3.style.textAlign = "center";

// Insert du texte dans les différents p (PremierTextExo3)
PremierTextExo3.innerText = "Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 'fizzbuzz' si le nom est un multiple de 3 et 5. Vous utiliserez une fonction !";

// Ajoute le h2 et les deux p dans la divCardExo3
divCardExo3.appendChild(h2Exo3);
divCardExo3.appendChild(PremierTextExo3);

// Ajoute du style à la divCardExo3
divCardExo3.style.width = "20%";

// Création d'un a (buttonAccesExo3)
let buttonAccesExo3 = document.createElement("a");
// Ajoute comme attribut href et le lien d'une page (exo3/exo3.html ► Accèder à l'exercie 3)
buttonAccesExo3.setAttribute("href", "exo3/exo3.html");
// Insert du texte dans le a (buttonAccesExo3)
buttonAccesExo3.innerText = "Accèder à l'exercice"
// Ajoute le a buttonAccesExo3 dans la divCardExo3
divCardExo3.appendChild(buttonAccesExo3);



// =============================================================================== \\
// ===================== Création de la carte de l'exercice 4 ===================== \\
// =============================================================================== \\

// Création d'une div (divCardExo4) pour englober les éléments de la carte de l'exercice 4
let divCardExo4 = document.createElement("div");
// Attribue l'ID exo4 à la div (divCardExo4)
divCardExo4.setAttribute("id","exo4");
// Insert la divCardExo4 dans la divFlex
divFlex.appendChild(divCardExo4);

// Recupère la divCardExo4 grâce à l'ID exo4 dans la variable CardExo4
let CardExo4 = document.getElementById("exo4");
// Ajoute du style de CardExo4 ► Ajoute une bordure, un border-radius et un padding
CardExo4.style.border = "1px solid black";
CardExo4.style.borderRadius = "20px";
CardExo4.style.padding = "25px";
CardExo4.style.backgroundColor = "#F5DF99";

// Création d'une balise h2 (h2Exo4)
let h2Exo4 = document.createElement("h2");
// Création de deux p (PremierTextExo4 & DeuxiemeTextExo2)
let PremierTextExo4 = document.createElement("p");

// Insert du texte dans le h2 (h2Exo4)
h2Exo4.innerText = "Exercice 4 - Le FizzBuzz ++";
// Centre le h2
h2Exo4.style.textAlign = "center";

// Insert du texte dans les différents p (PremierTextExo4 & DeuxiemeTextExo4)
PremierTextExo4.innerText = "Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous utiliserez des boutons pour incrémenter et décrémenter le chiffre. Vous utiliserez une écoute d'événement pour les boutons !";

// Ajoute le h2 et les deux p dans la divCardExo4
divCardExo4.appendChild(h2Exo4);
divCardExo4.appendChild(PremierTextExo4);

// Ajoute du style à la divCardExo4
divCardExo4.style.width = "20%";

// Création d'un a (buttonAccesExo4)
let buttonAccesExo4 = document.createElement("a");
// Ajoute comme attribut hrel et le lien d'une page (exo4/exo4.html ► Accèder à l'exercie 4)
buttonAccesExo4.setAttribute("href", "exo4/exo4.html");
// Insert du texte dans le a (buttonAccesExo4)
buttonAccesExo4.innerText = "Accèder à l'exercice"
// Ajoute le a buttonAccesExo4 dans la divCardExo4
divCardExo4.appendChild(buttonAccesExo4);


// ==================================================================== \\
// =========================== FONCTIONS ============================== \\
// ==================================================================== \\

// Permet de changer de couleur (en mode 'transition douce') toutes les secondes
function smoothlyChangeColor() {
    // Attribut CSS pour la transtion
    h1Home.style.transition = "color 0.5s";
    // Appelle notre méthode pour générer une couleur hexa aléatoire et l'affecte à notre variable
    h1Home.style.color = getRandomColor();
    // Rappelle la méthode toutes les 1 sec (1000 ms)
    setTimeout(smoothlyChangeColor, 1000);
}

// Permet de générer aléatoirement un couleur en hexodécimal
function getRandomColor() {
    // Suite de caractères hexadécimaux
    let letters = '0123456789ABCDEF';
    // Premier caractère d'une couleur
    let color = '#';
    // On va chercher 6 lettre au pif parmi notre liste
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    // Et on retourne le résultat
    return color;
}



