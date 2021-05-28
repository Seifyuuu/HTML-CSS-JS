// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
let lesH3 = document.getElementsByTagName('div')[0].firstElementChild;
console.log(lesH3);
// ### 2. Affiche le titreNiv3
lesH3 = document.getElementsByTagName('h3')[1];
console.log(lesH3);
// ### 3. Affiche l'élément qui précède le titreNiv3
lesH3 = document.getElementsByTagName('h3')[1].previousElementSibling;
console.log(lesH3);
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling

let petitP = document.getElementsByTagName('p')[1].nextElementSibling;
console.log(petitP)
// ### 5. Affiche le parent des éléments ayant comme class "important"

let parentImportant = Array.from(document.getElementsByClassName("important"))
console.log(parentImportant);
parentImportant.forEach(element => {
    console.log(element.parentNode)
    
});
// ### 6. Affiche le premier enfant, du parent de "listElements"


let listElem = document.getElementsByTagName("ul")[0].firstElementChild;
console.log(listElem)


// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let impo = document.getElementsByTagName('li')[3].nextElementSibling;
console.log(impo);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let textG = document.getElementsByTagName('p')[3].nextElementSibling.nextElementSibling;
console.log(textG);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let prenom = document.getElementsByTagName('span')[1].parentElement.nextElementSibling;
console.log(prenom);
// ### 10. En partant de Nicolas, affiche Primo
let nico = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(nico)
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let mou = document.querySelector('.grandParagraphe');
console.log(mou);


// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle

let hbn = Array.from(document.querySelectorAll('li'));
console.log(hbn);


hbn.forEach(element => {
    console.log(element);
    
});
