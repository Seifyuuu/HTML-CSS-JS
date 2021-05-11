// # Exercice 1 boucle while
// - A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// - Déclarez une variable compteur qui commence par 0
// - A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt
// let chiffre = prompt("Donne un numéro");
// let compteur = 0;
// while(chiffre >= compteur){
//     console.log(compteur);
//     compteur++;
// }

// - # Exo 2 Boucles WHILE
//     - ## Créez une variable classe avec un array
//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - ## Après avoir rempli la classe, affichez tous les etudiants
// let classe = [];
// let nomEleve;
// let nbMax = prompt("Nombre max d'élèves ?");

// while(classe.length < nbMax){
//     nomEleve = prompt("Entrez un nom d'élève");
//     classe.push(nomEleve);
// }
// console.log(classe);
// alert("Le nombre d'élèves est suffisant !");

// - ##  Ex 03
//     ## Créer un tableau de 9 prénoms 
//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)

// let tab = ["Nasila", "Mouna", "Adil", "Seifedin", "Stan", "Chris", "Ali", "Django", "Cactus"];
// let i = 0;
// while(i < 9){
//     console.log(`Bonjour ${tab[i]}`);
//     i++;
// }

// - ##  Exo 04
//     ## Créer un tableau de 6 fruits
//     ## Avec l'aide d'une boucle while vider le tableau.
//     ## Utilisez fruits.length
// let fruits = ["groseilles", "prunes", "fraises", "mûres", "pommes", "poires"];
// while(fruits.length > 0){
//     fruits.pop();
//     console.log(fruits);
// }

// - ##  Exo 05
//     ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

//METHODE AVEC POP()

// let panierLegumes = ["chou-fleur", "poireau", "courgette", "carotte"];
// let longueur = panierLegumes.length-1;
// let caisseLegumes = [];

// while(longueur >= 0){
//     caisseLegumes.push(panierLegumes[longueur]);
//     panierLegumes.pop();
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     longueur--;
// }

//METHODE AVEC SHIFT()

// let panierLegumes = ["chou-fleur", "poireau", "courgette", "carotte"];
// let longueur = panierLegumes.length-1;
// let caisseLegumes = [];

// while(longueur >= 0){
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     longueur--;
// }


// - ##  Exo6
//     ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

let guess = prompt("Je commence la nuit et je finis le matin, qui suis-je ?").toLowerCase();

while(guess != "n"){
    guess = prompt("Je commence la nuit et je finis le matin, qui suis-je ?").toLowerCase();
}

alert("Félicitations");