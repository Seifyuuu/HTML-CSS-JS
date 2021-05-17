// ## EXO1
// ### Créer une class Personnage avec comme propriétés :
// ### age , nom , ville
// ### Faire 2 instances de cette class.


// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

class Personnage{
    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.parler = (phrase) =>{
            return phrase;
        }
    }
}

let seif = new Personnage("Yo", "Seif", 22);
let bg = new Personnage("Alz", "Ouquoi", 20);

console.log(seif);
console.log(bg);

console.log(seif.parler("Salut je m'appelle " + seif.prenom));
console.log(bg.parler("Coucou" + seif.prenom));




