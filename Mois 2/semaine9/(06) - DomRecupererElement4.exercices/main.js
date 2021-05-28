// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
let firstH3 = document.getElementsByTagName("div")[0].firstElementChild;
console.log(firstH3);
// ### 2. Affiche le titreNiv3
let secondH3 = document.getElementsByTagName("h3")[1];  
console.log(secondH3);
// ### 3. Affiche l'élément qui précède le titreNiv3
let previousSecondH3 = secondH3.previousElementSibling;
console.log(previousSecondH3);
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let secondPara = document.getElementsByTagName("p")[1];
let nextSecondPara = secondPara.nextElementSibling;
console.log(nextSecondPara);
// ### 5. Affiche le parent des éléments ayant comme class "important" 
let y = Array.from(document.querySelectorAll(".important"));
console.log(y);
y.forEach(element => {
    console.log(element.parentElement);
});

// let parentDuLi = document.getElementsByClassName("important")[0].parentElement;
// console.log(parentDuLi); réponse d'ilias D pour cibler un élement particulier

// ### 6. Affiche le premier enfant, du parent de "listElements"
let listElements = document.getElementById("listElements").parentElement.firstElementChild;
console.log(listElements);

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let ClassImportant = Array.from(document.querySelectorAll(".important"));
console.log(ClassImportant);
let DernierClassImportant = ClassImportant[ClassImportant.length-1];
console.log(DernierClassImportant);

// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let pGeneral = document.getElementsByTagName("p")[3];
let pGeneral2 = pGeneral.nextElementSibling.nextElementSibling;
console.log(pGeneral2);

// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let pNom = document.getElementsByTagName("span")[1].parentElement;
let pPrenom = pNom.nextElementSibling;
// let reponseOneshot = document.getElementsByTagName("span")[1].parentElement.nextElementSibling;
console.log(pNom);
console.log(pPrenom);
// ### 10. En partant de Nicolas, affiche Primo


// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let grandP = document.querySelector(".grandParagraphe")
console.log(grandP);

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle

let prout = Array.from(document.querySelectorAll("li"));
console.log(prout); 
prout.forEach(element => {
    console.log(element);
});

