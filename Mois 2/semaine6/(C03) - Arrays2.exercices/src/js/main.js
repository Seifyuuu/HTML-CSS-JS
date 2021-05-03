// // Exercice 1
// let myVar = "objet";
// let tabExo = ["trop cool", myVar, 6256, 8916, false];
// console.log(tabExo);

// //Exercice2
// console.log(tabExo.length);

// //Exercice 3
// tabExo.pop();
// console.log(tabExo);

// //Exercice 4
// tabExo.shift();
// console.log(tabExo);

// //Exercice 5
// tabExo.push("End", "End2");
// console.log(tabExo);

// //Exercice 6
// tabExo.unshift("abeille", "fromage", "avion");
// console.log(tabExo);

// //Exercice 7
// console.log(tabExo.reverse());

//Exercice 8
let boite = [];
boite.push("crabe");
boite.push("aquarium");
console.log(boite);

boite.unshift("confiture");
console.log(boite);

boite.push("crevette", "feuille", "baguettes");
console.log(boite);

boite.splice(0,3);
console.log(boite);

boite.unshift("pantalon");
console.log(boite);
console.log(boite.length);

boite.splice(boite.length-2);
console.log(boite)

boite.splice(0);
console.log(boite);