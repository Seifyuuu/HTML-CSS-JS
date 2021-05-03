let maVar = "ceci est une variable";

let semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log(semaine);
console.log(semaine[2]);
console.log(semaine[0]);
console.log(semaine[6]);
console.log(`Ajd nous sommes ${semaine[0]} et demain nous serons ${semaine[1]}`);

// length permet de voir la longueur d'un tableau
console.log(semaine.length);

// push() permet d'ajouter un élément en fin de tableau
semaine.push("Jeudredi");       
console.log(semaine);

// pop() permet de retirer un élément en fin de tableau
semaine.pop();
console.log(semaine);

// unshift() ajoute un élément en début de tableau
semaine.unshift("Jeudredi");
console.log(semaine);

// shift() retire un élément en début de tableau
semaine.shift();
console.log(semaine);

// splice() permet de supprimer ou remplacer les éléments d'un tableau et comprend 3 arguments : 
// le premier spécifie la position de départ (où rajouter ou remplacer)
// le deuxième spécifie combien d'éléments à remplacer 
// le dernier spécifie ce qu'il faut ajouter/remplacer
    semaine.splice(3, 2, "Jeudredi", "Lundimanche");
console.log(semaine);

// join() concatène tous les éléments d'un tableau. Par défaut, le séparateur est une virgule, mais on peut le changer en le spécifiant dans les parenthèses de la méthode
console.log(semaine.join(" "));

// slice() renvoie un nouveau tableau à partir d'une portion de notre tableau initial. Le premier argument spécifie l'index de départ (inclus) et le second spécifie l'index de fin (non-inclus).
console.log(semaine.slice(1,5));

// concat() fusionne deux tableaux et renvoie un nouveau tableau 
let semaine2 = ["Sadimanche", "Mercredong"];
let semaine3 = semaine2.concat(semaine);
console.log(semaine3);

// reverse() inverse le sens d'un tableau
console.log(semaine3.reverse());