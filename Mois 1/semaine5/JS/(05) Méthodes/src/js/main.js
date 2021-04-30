///### 1. let phrase = 'Bonjour tout le monde'

let phrase = "Bonjour tout le monde ";
let zin = "Va manger Number";

///### 2. Afficher la longueur de la phrase

console.log(phrase.length);


///### 3. Enlever l'espace à la fin grâce à une méthode

console.log(phrase.trim());


///### 4. Reafficher la longueur de la phrase

console.log(phrase.length);


///### 5. Afficher uniquement la dernière lettre de la phrase

console.log(phrase.substr(20));


///### 6. Enlever "Bonjour" de la phrase

let phrase2 = phrase.replace('Bonjour',' ');
console.log(phrase2);


///### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

let phrase3 = phrase2.replace(' ', 'Bonjour');
console.log(phrase3);


///### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
let phrase4 = phrase3.replace('tout le monde', ' ');
console.log(phrase4);


///### 9. Remplacer dans la phrase le mot "number" par le mot "string"
let zin2 = zin.replace('Number', 'string');
console.log(zin2);


///### 10. Bonus : Donner un chiffre aléatoire
let zin3 = zin2 + Math.random();
console.log(zin3);