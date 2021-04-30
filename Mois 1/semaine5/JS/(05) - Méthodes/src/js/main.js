///### 1. let phrase = 'Bonjour tout le monde'

let phrase = "Bonjour tout le monde ";
let zin = "Va manger Number";

///### 2. Afficher la longueur de la phrase

console.log(phrase.length);

///### 3. Enlever l'espace à la fin grâce à une méthode
phrase = phrase.trimEnd();
console.log(phrase);

///### 4. Reafficher la longueur de la phrase

console.log(phrase.length);

///### 5. Afficher uniquement la dernière lettre de la phrase
console.log(phrase.substr(20));
console.log(phrase.charAt(phrase.length-1));

///### 6. Enlever "Bonjour" de la phrase

//méthode 1 
//phrase = phrase.replace('Bonjour ', '');
let phrase2 = phrase.replace('Bonjour ','');
console.log(phrase2);

//méthode 2
//phrase = phrase.substr(8);

///### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

let phrase3 = phrase2.replace(' ', 'Bonjour');
console.log(phrase3);

///### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
let phrase4 = phrase3.substr(0,7);
console.log(phrase4);

//méthode2 : 
// phrase = phrase.slice(0,8)


///### 9. Remplacer dans la phrase le mot "number" par le mot "string"
let zin2 = zin.replace('Number', 'string');
console.log(zin2);

///### 10. Bonus : Donner un chiffre aléatoire
let chiffre= (Math.random() * 10);
console.log(chiffre);
