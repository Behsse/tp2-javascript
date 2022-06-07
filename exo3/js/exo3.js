// Recupération du body dans une variable body
let body = document.getElementsByTagName('body')[0];

//Style body
body.style.display = "flex";
body.style.flexWrap = "wrap";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.marginTop = "20%";
body.style.backgroundColor = "#FFE5B4";

// Création d'une div 
let CreatedivFizzBuzz = document.createElement("div");
// Ajout d'une id fizzbuzz à la div
CreatedivFizzBuzz.setAttribute("id", "fizzbuzz");
// Ajout la div dans le body
body.appendChild(CreatedivFizzBuzz);


// Boucle sur les nombres entre 1 et 100
for(let i = 1; i < 101; i++){
    // Création d'un p dans la variable ecriture
    let ecriture = document.createElement("p");
    
    // Style p
    ecriture.style.margin = "10px";

    // Si nombre est divisible par 15 ► écrit "fizzbuzz"
    if(i % 15 == 0){
        // Insert dans le p "FizzBuzz"
        ecriture.innerHTML = "FizzBuzz";
        // On ajoute le p dans le body
        body.append(ecriture);
        // Fonction pour changer les couleurs toutes les demi-secondes
        smoothlyChangeColor();
    }
    // Si nombre est divisible par 3 ► écrit "fizz"
    else if(i % 3 == 0){
        ecriture.innerHTML = "Fizz";
        body.append(ecriture);
        ecriture.style.color = "#1F4690";
    }
    // Si nombre est divisible par 5 ► écrit "buzz"
    else if(i % 5 == 0){
        ecriture.innerHTML = "Buzz";
        body.append(ecriture);
        ecriture.style.color = "#FFA500";
    }
    //Sinon affiche le nombre
    else{
        ecriture.innerHTML = i;
        body.append(ecriture);
        //Style
        ecriture.style.color = "#3C2C3E";
    }
}

// ==================================================================== \\
// =========================== FONCTIONS ============================== \\
// ==================================================================== \\

// Change la couleur des textes "FizzBuzz"
function smoothlyChangeColor() {
    // Attribut CSS pour la transtion
    body.style.transition = "color 0.5s";
    // Appelle notre méthode pour générer une couleur hexa aléatoire et l'affecte à notre variable
    body.style.color = getRandomColor();
    // Rappelle la méthode toutes les 0.5 sec (500 ms)
    setTimeout(smoothlyChangeColor, 500);
}

// Change le background du body
function smoothlyChangeBackgroundColor() {
    // Attribut CSS pour la transtion
    body.style.transition = "color 0.5s";
    // Appelle notre méthode pour générer une couleur hexa aléatoire et l'affecte à notre variable
    body.style.backgroundColor = getRandomColor();
    // Rappelle la méthode toutes les 5 sec (5000 ms)
    setTimeout(smoothlyChangeBackgroundColor, 5000);
}


// Permet de générer aléatoirement un couleur en hexodécimal
function getRandomColor() {
    // Suite de caractères hexadécimaux
    let letters = '0123456789ABCDEF';
    // Premier caractère d'une couleur
    let color = '#';
    // On va chercher 6 lettre au pif parmi notre liste
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Et on retourne le résultat
    return color;
}

smoothlyChangeBackgroundColor();
