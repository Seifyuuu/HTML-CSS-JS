//- Créer dans une balise h1 sur votre page jS.
let h1 = document.createElement("h1");
//- Stocker dans dans une variable le contenu "Run Forest !" 
let h1txt = document.createTextNode("Run Forrest !");
//- Trouver le moyen d'insérer votre contenu ("Run Forest !") dans votre balises h1
h1.appendChild(h1txt);
//- Insérer votre balise ( avec son contenu) dans votre Html et montrer moi ça dans votre console.
let mybody = document.querySelector("body");
mybody.appendChild(h1)
console.log(mybody);