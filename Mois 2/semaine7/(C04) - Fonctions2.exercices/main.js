// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let reverseNumber = (nb) => {
//     // return parseInt(nb.split('').reverse().join(''));

//     nb = nb.split(''); //split va transformer la chaine de caractères en tableau
//     nb.reverse() //pour inverser l'ordre du tableau
//     nb = nb.join('') //pour retransformer le tab en string
//     nb = parseInt(nb) //pour retransformer mon string en int

//     return nb;
// }
// console.log(reverseNumber(prompt("Entrez un nombre :")));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
// let div;
// let divPar2 = (nb) => {
//     div = nb % 2; //contient soit 0 soit 1
//     switch(div){
//         case 0 :
//             alert(`Le num ${nb} est divisible par 2 : ${nb}:2 = ${nb/2}`);
//             break
//         case 1 :
//             alert(`Le num ${nb} n'est pas divisible par 2`);
//             break
//         default :
//             alert(`Veuillez rentrer une valeur correcte`)
//             break
//     }
// }
// divPar2(parseInt(prompt('Entrez un nombre divisible par 2')));

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

let logIn = (rep) => {
    while(rep != "mdp"){
        rep = prompt("Réessayez");
    }
    alert("Vous êtes connecté");
}

logIn(prompt("Quel est le mot de passe ?"));