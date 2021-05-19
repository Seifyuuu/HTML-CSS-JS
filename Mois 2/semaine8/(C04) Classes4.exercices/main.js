// I.
// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1
// class Personnage {
//     constructor(age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//         this.sePresenter = () =>{
//             console.log(`Bonjour, je m'appelle ${this.nom}`);
//         }
//     }
// }

// let paul = new Personnage(50, "Papa", "Bruxelles");
// let mimi = new Personnage(17, "Mimi", "Bruxelles");
// paul.sePresenter();
// mimi.sePresenter();

//II.
// ## EXO2
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

class Lieux{
    constructor(nom, contenu, ingredients){
        this.nom = nom;
        // this.nom vaut la propriété de l'objet créé en instantiant Lieux (ligne 56)
        // et = nom vaut la valeur du paramètre passé dans la méthode constructor()
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let obj1 = new Lieux('maison', []);
console.log(obj1);

let epicerie = new Lieux('épicerie', [], []);
let kouizine = new Lieux('kouizine', [], []);

// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

class Ingredients{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epices = new Ingredients("epices", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }

// class Personne{
//     constructor(nom, lieu, argent, panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.seDeplacer = (x) => {
            
//         };
//         this.payer = (x) =>{

//         };
//         this.couper = (x, y) => {

//         };
//     }
//     maMth = () => {
//         // avant on était obligé de bind la fct
//     }
// }
// let personnage = new Personne('Maxime', "néant", 100, []);
// console.log(personnage);

// // ## Exo3

// // ### Créer une class Objet
// // ### _Propriétés : nom, prix
// class Objet{
//     constructor(nom, prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// III
// ### Créer deux instances d'objets avec un nom et un prix
// let aquarium = new Objet("aquarium", 50);
// let terrarium = new Objet("terrarium", 60);
// // ### Créer une boite (tableau) et mettre les deux objets dedans.
// let boite = [];
// boite.push(aquarium);
// boite.push(terrarium);

// // ### Créer une class Personnage
// // ### _Propriétés : nom(string), sac(tableau), argent(number)
// // ### _Méthode : prendre(objet, boite)
// // ### _Méthode : acheter(vendeur, objet)
// class Personnage{
//     constructor(nom, sac, argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         this.prendre = (objet, boite) => {
//             this.sac.push(objet);
//             boite.splice(boite.indexOf(objet),1);
//             console.log(`${this.nom} a mis un ${objet.nom} dans son sac`);
//         };
//         this.acheter = (vendeur, objet) => {
//             if(this.argent >= objet.prix){
//                 //je peux acheter

//                 this.argent -= objet.prix; 
//                 //this.argent = this.argent-objet.prix
//                 //tu as 60 la théière vaut 40
//                 //il te reste 20
            
//                 vendeur.argent += objet.prix;
//                 //vendeur.argent = vendeur.argent+objet.prix
//                 //le vendeur empoche les 40 dépensés pour la théière

//                 this.sac.push(objet);
//                 vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
//                 console.log(`${this.nom} a acheté ${objet.nom} a ${vendeur.nom}`);
//             }else{
//                 //je peux pas acheter
//                 console.log("Va acheter des trucs moins chers !");
//             }
            
//         };
//     }
// }

// // ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// let julio = new Personnage("Julio", [], 30);
// let miguel = new Personnage("Miguel", [], 70);

// julio.prendre(aquarium, boite);
// miguel.prendre(terrarium, boite);

// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// miguel.acheter(julio, aquarium);
// julio.acheter(miguel, terrarium);


// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let molengeek = new Lieu("Molengeek", []);
let snack = new Lieu("Snack", []);
let maison = new Lieu("Maison", []);

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus ou en y allant à pieds.
// ### Puis créez une instance de votre personnage.
class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) => {
            //doit nous faire aller d'un point A a un point B en prenant le bus ou en allant à pieds
            if(transport == "pied"){
                console.log(`${this.prenom} a voulu y aller à pieds.`);
            }else if(transport.embarquer(this) == 1){
                console.log(`${this.prenom} est riche grâce à son salaire de MolenGeek, donc elle est allée en bus.`);
            }else{
                console.log(`${this.prenom} n'est pas riche à cause de son salaire de MolenGeek, donc elle est doit marcher.`)
            }
          //if(transport.embarquer(this) == true){
          //    console.log(`${this.prenom} est riche grâce à son salaire de MolenGeek, donc elle est allée en bus.`);
          //}else if(transport == "pied"){
          //    console.log(`${this.prenom} a voulu y aller à pieds.`);
          //}else{
          //    console.log(`${this.prenom} n'est pas riche à cause de son salaire de MolenGeek, donc elle est doit marcher.`)
          //}
            depart.personnes.splice(depart.personnes.indexOf(this),1);
            arrivee.personnes.push(this);
            console.log(`${this.prenom} est arrivée à ${arrivee.nom}`);
        }
    }
}

let fanny = new Personne("Hunin", "Fanny", 5.00);


// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus coute 2.80. Sinon, il faut y aller à pied.
// ### Créez une instance de Bus. 
class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (usager) => {
            if(usager.argent >= 2.80){
                usager.argent -= 2.80; //usager.argent = usager.argent - 2.20
                this.caisse += 2.80; // this.caisse = this.caisse + 2.20
                this.personnes.push(usager);
                console.log(`${usager.prenom} est rentré.e dans le bus.`);
                // t'es arrivé donc tu descends du bus
                this.personnes.splice(this.personnes.indexOf(usager), 1);
                console.log(`${usager.prenom} est sorti.e du bus.`);
                return true; //permet de vérifier si j'ai bien pris le bus
            }else{
                console.log(`${usager.prenom} marche biatch`);
                return false;
            }
        }
    }
}

let laStib = new Bus([], 0.00);

// ### 8h00 Vous êtes à la maison.
maison.personnes.push(fanny);
console.log(`08h00, ${fanny.prenom} est à la maison`);

// ### 8h30 Vous prennez le bus vers MolenGeek.
fanny.seDeplacer(maison, molengeek, laStib);

// ### 8h45 Vous êtes à MolenGeek.
console.log(`08h45, ${fanny.prenom} est à molengeek`);


// // ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
fanny.seDeplacer(molengeek, snack, laStib);


// // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
fanny.seDeplacer(snack, molengeek, "pied");

// // ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
fanny.seDeplacer(molengeek, maison, laStib);

// // ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(fanny.argent + " " + laStib.caisse);