class Lieu{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = [];
    }
}
let molengeek = new Lieu("Molengeek")
let snack = new Lieu()
let maison = new Lieu()


class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;  
        this.seDeplacer = () => {
          return "je marche comme un chien";
        }
    }
}
let perso1 = new Personne("Boubou", "Azizi", 30);



class Bus{
    constructor(personnes, caisse){
        this.personnes = [];
        this.caisse = caisse;
        this.ticket = 2.80;
        this.embarquer = () => {
            if (perso1.argent >= 2.80) {
                this.personnes.push(perso1) 
            } else{"descend"}
        }
    }
}

// ### Créez une instance de Bus. 
let bus1 = new Bus([], 10)

// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
bus1.embarquer(perso1);

// ### 8h45 Vous êtes à MolenGeek.
bus1.personnes.pop()
molengeek.personnes.push(perso1)

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
molengeek.personnes.pop()
bus1.embarquer(perso1);
bus1.personnes.pop()
snack.personnes.push(perso1)
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
snack.personnes.pop()
perso1.seDeplacer()
molengeek.personnes.push(perso1)

//### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
molengeek.personnes.pop()
bus1.embarquer()
maison.personnes.push()

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(perso1.argent, bus1.caisse);

