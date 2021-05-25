import { perso1, maison, aldi, oignon, oeuf, epice, fromage, recipient, couteau, poele } from "./class.js";


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
perso1.remplirPanier();

// >>1. Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
// >>1. Afficher un message de ce qu'il reste d'argent sur le personnage.
// >>1. rentrer à la maison (comme ça on pourra cuisiner)
perso1.payerPanier();
console.log(perso1.argent);
perso1.seDeplacer(maison);
console.log(`${perso1.nom} est à la ${perso1.lieu}`);


// >>1. Mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
// >>1. Vérifier que les ingrédients ne se trouvent plus dans le panier on a oublié de le rapporter x)
// >>1. Afficher un petit message de chaque ingrédient qu'on met dans le bol.
perso1.remplirBol()
console.log(perso1.mainDroite);

// >>1. Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
// >>1. Afficher un petit message
// >>1. Retourner à la maison pour continuer l'omelette
// >>1. Afficher un petit message

perso1.seDeplacer(aldi);
perso1.seDeplacer(maison);




// >>1. Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
// >>1. Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
// >>1. Afficher un message avec le nouveau mélange
console.log(perso1.lieu);
perso1.couper()
recipient.melanger("Omelette")
console.log(recipient.contenu);



// >>1. vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
// >>1. Afficher un message final, notre omelette est cuite :)
recipient.vider()
console.log(poele.contenu);
poele.cuir()