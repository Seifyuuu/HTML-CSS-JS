//- ## Exercice 1 boucle while
//- ## A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
//- ## Déclarez une variable compteur qui commence par 0
//- ## A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt


let chiffre = parseInt(prompt("Give me a number"));
let début = 0;

while (chiffre >= début) {
    console.log(début);
    début++;
}


//- ##  Exo 02
//- ## Créez une variable classe avec un array
//- ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//- ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//- ## Après avoir rempli la classe, affichez tous les etudiants


let classe = []
let max = parseInt(prompt("nombre élèves max"));
let prenom;

while (max > classe.length) {
    prenom = prompt("qui ajouter ?");
    classe.push(prenom);
    
}
console.log(classe);



