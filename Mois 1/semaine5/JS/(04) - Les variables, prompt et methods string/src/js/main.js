//## 1.
//- Demande à l'utilisateur avec l'aide d'un prompt quel est son prénom
//- Répond lui avec Bonjour "prenom"

let prenom = prompt("Quel est ton prénom ?");
alert("Bonjour " + prenom );



//## 2.
//- Demande lui son age
//- Dit lui tu as x ans

let age = prompt("Quel âge as-tu ?");
alert("Tu as " + age + " ans");



//## 3.
//- Demande lui son prénom
//- Demande lui son nom de famille
//- Stock le prénom et le nom dans une variable
//- Répond avec le contenu de la variable

let prenom2 = prompt("C'est quoi ton prénom ?");
let nomdefamille = prompt("C'est quoi ton nom de famille ?");
alert("Ton nom entier est " + prenom2 + " " + nomdefamille);



//## 4.
//- Demande lui son prénom
//- Demande lui son nom de famille
//- Applique sur le prénom une methode pour le mettre en majuscule
//- Stock le prénom et le nom dans une variable
//- Répond lui avec le contenu de la nouvelle variable, Bonjour "NOM prénom"

let prenom3 = prompt("ton prénom gros");
let nomdefamille2 = prompt("ton nom gros");
let nomdefamille3 = nomdefamille2.toUpperCase();
let nomentier = prenom3 + " " + nomdefamille3;
alert("Bonjour " + nomentier);

