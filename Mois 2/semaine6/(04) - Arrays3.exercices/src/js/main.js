// - # Exercice 6


//1°
let monTab = ['crabe', 'crevette', 'homard', 'cloporte'];
//## Supprimer le dernier élément de l'array
monTab.pop()
//## Supprimer le premier élément de l'array
monTab.shift();
//## Ajouter un élément a la fin de l'array
monTab.push("choco");
//## Ajouter un élément au debut de l'array
monTab.unshift("lait");
//## Mettre le deuxième élément en majuscule 
monTab.splice(1, 1, monTab[1].toUpperCase());
//console.log(monTab[1].toUpperCase());
//monTab[1] = monTab[1].toUppercase();

//## Changer l'ordre de l'array
monTab.reverse()
console.log(monTab);



//2°

let chiffres = [4, 5, 2, 1, 3];
//## Première methode (Ordonner)
//## 1, 2, 3, 4, 5
chiffres.sort();
//## Deuxième methode (Concaténer les chiffres en un string)
//## 1-2-3-4-5
let chiffres2 = chiffres.join();
console.log(chiffres2);
//## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
chiffres2 = chiffres2.split();
//## Afficher l'array avec les chiffres ordonnées
console.log(chiffres2);



//# 3°
//- ## Créez un tableau vide
let tab = []
//- ## Ajouez 10 élément dans votre array
tab.push(0,1,2,3,4,5,6,7,8,9);
console.log(tab);
//- ## Affichez le contenu de l'array et sa taille
console.log(tab.length);
//- ## Trouvez l'index de chaque élément
console.log(tab.indexOf("elem10"));
//- ## Utiliser une methode qui permet de supprimer un element grâce à l'index
tab.splice(4,1);
//- ## Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
let classe = ["elem1","elem2", "elem3", "elem4", "elem5", "elem6", "elem7", "elem8", "elem9", "elem10", "elem11", "elem12",];
console.log(classe[Math.random()*classe.length]);
//- ## En une ligne supprimer 'Nathan' du tableau
classe.splice(classe.indexOf("Nathan"), 1 );
console.log(classe);
