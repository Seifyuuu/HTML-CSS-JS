//1. Déclarer un tableau (array)

let Lemon = "Salut";
let tableau = ["Seif", Lemon, 9, 10, true];
console.log(tableau);


//2. Length

console.log(tableau.length);


//3. Supprimer dernier élément

tableau.pop();
console.log(tableau);


//4. Supprimer premier élément 
 
tableau.shift();
console.log(tableau);


//5. Rajouter 2 éléments 

tableau.unshift("Bonjour");
console.log(tableau);
tableau.push(11)
console.log(tableau);


//6. Rajouter 3 éléments au milieu

tableau.splice(5,0,"ouais", "nan", "si");
console.log(tableau);

//7. Retourner le tableau

console.log(tableau.reverse());


// 8. Le monstre
let boite = []
boite.push("crabe"); //boite.push("crabe", "aquarium");
boite.push("aquarium");
alert(boite);

boite.unshift("confiture");
alert(boite);

boite.push("crevette","feuille","baguette");
alert(boite);

boite.shift();
boite.shift();
boite.shift();
//boite.splice(0,3);

boite.unshift("chocolat");
console.log(boite);

alert(boite.length);

boite.pop();
boite.pop();
//boite.splice(boite.length-2);

boite.shift();
boite.shift();
//boite.splice(0)

alert(boite);
