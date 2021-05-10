// -  # Exo 1 Boucles FOREACH
//     ## - Creer une variable de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
let classe = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];

classe.forEach(elem =>{
    console.log(`Bonjour ${elem}`)
});

// - # Exo 2 Boucle FOREACH
//     - ## Créez un un array qui contient 5 éléments
//     - ## Affichez touts les éléments a l'aide d'une boucle foreach
let ra = ["a", "b", "c", "d", "e"];
ra.forEach(element =>{
    console.log(element);
});











//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.
let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(element => {
    //1. je console log le type de chacun de mes éléments
    console.log(typeof element);

    //2. je trie mes éléments en fonction de leur type
    if(typeof element == "string"){
        typeString.push(element);
    }else if(typeof element == "number"){
        typeNumber.push(element);
    }else if(typeof element == "object"){
        typeObject.push(element);
    }else{
        typeAutre.push(element);
    }
});
//3. supprime tout ce qu'il y a dans le tableau
donnees.splice(0, donnees.length);

//4. j'affiche tout
console.log(donnees);
console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);