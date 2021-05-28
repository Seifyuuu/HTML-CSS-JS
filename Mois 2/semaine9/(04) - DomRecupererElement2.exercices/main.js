// ### 1. Affiche le contenu textuel du second h1
let secondH1 = document.getElementsByTagName("h1")[1].textContent;
console.log(secondH1);
// ### 2. Affiche le contenu textuel du dernier li
let lastLi = document.getElementsByTagName("li")[3].innerText;
console.log(lastLi);
// ### 3. Affiche le contenu textuel du premier p en majuscule
let firstP = document.getElementsByTagName("p")[0].innerText.toUpperCase()
console.log(firstP);
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let allLi = document.getElementsByTagName("li")
console.log(allLi);
// mettre dans un vrai tableau car htmlcollection est un psuedotableau
let arrayLi = Array.from(allLi);
console.log(arrayLi);

arrayLi.forEach(element => {
    element = element.textContent.toUpperCase();
    console.log(element);
});