import { perso1, maison, aldi, oignon, oeuf, epice, fromage } from "./class.js";



// >>1. Pour dire que le personnage est à la maison :
// >>1. Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// >>1. Afficher un message tel que :
// >>1. console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
perso1.seDeplacer(maison);
console.log(`${perso1.nom} est à la ${perso1.lieu}`);
// >>1. Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
perso1.seDeplacer(aldi);
console.log(`${perso1.nom} est à ${perso1.lieu}`);
// >>1. Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.
// >>1. Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
// >>1. console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`);
perso1.prendPanier();
console.log(`Dans mon panier de la main droite j'ai : ${perso1.mainDroite}`);

// >>1. Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
//>>1. Afficher un message à chaque ingrédient pris
perso1.payerProduit();
console.log(aldi);
