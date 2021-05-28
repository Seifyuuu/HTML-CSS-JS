//Pour cibler un élément grâce à son id
let myH1Id = document.getElementById("monId");
console.log(myH1Id);

//Changer le texte d'un élément
myH1Id.innerHTML = "J'ai changé mon texte grâce à innerHTML !";

//Pour cibler un élément grâce à sa class
//Stocke les élements dans un tableau (HTML Collection)
let myH1Class = document.getElementsByClassName("maClass");
console.log(myH1Class);

//Pour cibler un élement grâce à sa balise
//Stocke les élements dans un tableau (HTML Collection)
let myH2Balise = document.getElementsByTagName("h2");
console.log(myH2Balise);

//Pour cibler un élement avec querySelector
//Peut cibler n'importe quel type d'élément (class/id/balise), mais ne cible que le premier
let myH3QuerySelector = document.querySelector("h3");

//On utilise setAttribute() avec 2 paramètres (l'attribut et la valeur de l'attribut) pour ajouter un attribut à une balise via DOM
myH3QuerySelector.setAttribute('id', 'monIdSetAttribute');
console.log(myH3QuerySelector);

//Pour cibler un élément avec querySelectorAll
//Stocke les élements dans un tableau (Node List)
let myH3QuerySelectorAll = document.querySelectorAll("h3");
console.log(myH3QuerySelectorAll);

//enlever un élément
myH3QuerySelectorAll[1].remove();



//Créer un élement balise via DOM
let creerElem = document.createElement("h5");
console.log(creerElem);

//Créer un élément texte via DOM
let creerTexte = document.createTextNode("Mon Texte !");
console.log(creerTexte);




//Je cible l'élément parent où je veux injecter mon nouvel élément
let myBody = document.querySelector("body");
console.log(myBody);

// //J'attache mon h5 avec son texte à l'élément parent ciblé plus haut
myBody.appendChild(creerElem);

// //J'attache un texte à mon h5
creerElem.appendChild(creerTexte);

//Je peux récupérer un attribut avec getAttribute(), le paramètre contient l'attribut que l'on veut récupérer
let monH1AvecUneClasse = document.querySelectorAll('h1')[1];
console.log(monH1AvecUneClasse);
let attribut = monH1AvecUneClasse.getAttribute('id');
console.log(attribut)

//Pour modifier un attribut existant, j'utilise setAttribute(), le premier paramètre est l'attribut que je veux changer et le deuxième est la nouvelle valeur 
let monH1ChangerId = document.querySelectorAll('h1')[3];
monH1ChangerId.setAttribute('id', 'monIdChange');
console.log(monH1ChangerId);

monH1AvecUneClasse.setAttribute('class', "maNouvelleClass");
console.log(monH1AvecUneClasse);

let h1Rouge = document.getElementById('titreRouge');
h1Rouge.style.color = 'red';
h1Rouge.style.backgroundColor = "blue";