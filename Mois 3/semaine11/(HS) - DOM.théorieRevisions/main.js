// I.I RECUPERER UN ELEMENT (simple)

// 1. getElementsByTagName() -> récupère des éléments grâce à leur nom de balise
// Cette méthode nous renvoie un pseudo-tableau auquel je ne peux pas appliquer ni de méthodes ni de propriétés. Je dois cibler un élément particulier du tableau grâce à son index pour pouvoir lui apporter des modifications
let monH3 = document.getElementsByTagName('h3')[0];

//2. getElementById() -> récupère un élément grâce à son nom d'id
let monLiId = document.getElementById('getById');

// 3. getElementsByClassname() -> récupère des éléments grâce à leur nom de class
// Cette méthode nous renvoie un pseudo-tableau auquel je ne peux pas appliquer ni de méthodes ni de propriétés. Je dois cibler un élément particulier du tableau grâce à son index pour pouvoir lui apporter des modifications
let monLiClass = document.getElementsByClassName('getByClass')[0];

// 4. querySelector() -> récupère le premier élément du document en fonction de l'id, de la class ou du tag name spécifié en paramètre de la méthode
let monLiQuery = document.querySelector('li');
let maClassQuery = document.querySelector('.getByClass');
let monIdQuery = document.querySelector('#getById');
let monP = document.querySelector('div > p');

// 5. querySelectorAll() -> récupère tous les éléments en fonction de l'id, de la class ou du tag name spécifié en paramètre de la méthode
// Cette méthode nous renvoie un pseudo-tableau auquel je ne peux pas appliquer ni de méthodes ni de propriétés. Je dois cibler un élément particulier du tableau grâce à son index pour pouvoir lui apporter des modifications
let mesLiQueryAll = document.querySelectorAll('li');
let mesClassQuery = document.querySelectorAll('.getByClass');


// I.II RECUPERER UN ELEMENT (avancé)

// 1. .nextElementSibling -> récupère l'élement suivant frère/soeur 
let liNextSibling = document.querySelector('#getById').nextElementSibling;

// 2. .previousElementSibling -> récupère l'élement précédent frère/soeur 
let liPrevSibling = document.querySelectorAll('li')[7].previousElementSibling;

// 3. .parentElement -> récupère le parent de l'élément
let ulParent = document.getElementsByClassName('getByClass')[0].parentElement;

//4. .children -> récupère les enfants de l'élément
let ulEnfants = document.querySelector('ul').children

//5. .firstElementChild -> récupère le premier élément enfant de l'élément
let premLi = document.querySelector('ul').firstElementChild

//6. .lastElementChild -> récupère le dernier élément enfant de l'élément
let derLi = document.querySelector('ul').lastElementChild


//II. Modifier le contenu d'un élément
let fruitPref = document.querySelectorAll('li')[6];
fruitPref.innerHTML = "Cerise";


// III . Créer, supprimer et attacher un élément
let newBtn = document.createElement("button");
newBtn.innerHTML = "Bouton créé en DOM";
document.body.appendChild(newBtn);

let newLi = document.createElement("li");
newLi.innerHTML = "Ceci est un li fait en DOM"
let myUl = document.querySelector('ul');
myUl.appendChild(newLi);

let h3Remove = document.querySelector('h3');
h3Remove.remove();

// IV. get et setAttribute

// 1. getAttribute() -> montre le.s attribut.s précisé.s en paramètre de la méthode
let showClasses = document.getElementsByTagName('li')[1];
console.log(showClasses.getAttribute('id'))

//2. setAttribute() -> ajoute l'attribut et la valeur passés en paramètres de la méthode
let myFirstLi = document.querySelector('li');
myFirstLi.setAttribute('style', 'border : dotted green 1px');

// V. Le style
derLi.style.backgroundColor = "red";
derLi.style.color = "white";
derLi.style.border = "solid black 5px"
derLi.style.textAlign = "center"

// VI. Classlist 
ulParent.classList.add("maClass1");
//ulParent.classList.remove("maClass1");

// VII. Event Listener

let myBtn = document.querySelector('button');
let myPChangeColor = document.getElementsByClassName('getByClass')[2]
let changeColor = (element, couleur) => {
    element.style.color = couleur
}

myBtn.addEventListener("click" , () => {
    changeColor(newLi, "tomato")
});

newBtn.addEventListener('click', () => {
    fruitPref.classList.toggle('maClass1');
})

// VIII. Events et e.target
let secondP = myPChangeColor.nextElementSibling;
secondP.addEventListener('click' , (e) => {
    console.log(e.target)
})

let tab = ["1", "2", "3"]

let div1 = document.createElement("div");
div1.innerHTML = tab[0]
document.body.appendChild(div1)

let div2 = document.createElement("div");
div2.innerHTML = tab[1]
document.body.appendChild(div2)

let div3 = document.createElement("div");
div3.innerHTML = tab[2]
document.body.appendChild(div3)

let tabDiv = [div1, div2, div3]
tabDiv.forEach(element => {
    element.style.border = 'solid black 3px'
    element.style.width = "100px"
    element.style.textAlign = "center"
});

document.body.addEventListener('click', (e) => {
    if(e.target.innerHTML === "1"){
        e.target.style.color = "red"
    }else if(e.target.innerHTML === "2"){
        e.target.style.color = "blue"
    }else if(e.target.innerHTML === "3"){
        e.target.style.color = "green"
    }
})