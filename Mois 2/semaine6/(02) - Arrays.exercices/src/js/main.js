//## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13
let test = ["Banane", "Fraise", "Avocat"];


//## Afficher les éléments de l'array
console.log(test);
console.log(test[0]);
console.log(test[1]);
console.log(test[2]);


//## Afficher le nombre d'éléments de l'array
console.log(test.length);


//## Afficher les éléments de l'array 1 par 1
console.log(test.join(" - "));


//## Ajouter et afficher votre prénom a l'array
test.unshift("Seifedin");
console.log(test);


//## Remplacer et afficher un élément de l'array par autre chose
test.splice(3, 1,"Chocolat");
console.log(test);

// Retirer un élément du tableau 
test.shift();
console.log(test);
