// 0 
let mydivs = document.getElementsByTagName("div")
console.log(mydivs);

// ### 1. Récupère et affiche le premier enfant de la dernière div
let lastDiv = mydivs[2];
console.log(lastDiv);
let lastDivParent = lastDiv.children;
console.log(lastDivParent);
let firstChild = lastDivParent[0];
console.log(firstChild);

// ### 2. Récupère et affiche le dernier enfant de la dernière div

let lastChild = lastDivParent[2];
console.log(lastChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
let secondChild = lastDivParent[1];
console.log(secondChild);

let elementi = secondChild.children;
console.log(elementi);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le

let elementb = lastChild.children;
console.log(elementb);

// ### 5. Affiche l'élément parent de l'élément i

let elementiParent = elementi[0].parentElement;
console.log(elementiParent);

// ### 6. affiche l'élément parent de l'élément b
let elementbParent = elementb[0].parentElement;
console.log(elementbParent);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div
let nextFirstChild = firstChild.nextElementSibling
console.log(nextFirstChild);

