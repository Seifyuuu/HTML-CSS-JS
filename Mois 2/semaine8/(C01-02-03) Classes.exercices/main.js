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

class Personne{
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.seDeplacer = (x) => {
            
        };
        this.payer = (x) =>{

        };
        this.couper = (x, y) => {

        };
    }
    maMth = () => {
        // avant on était obligé de bind la fct
    }
}
let personnage = new Personne('Maxime', "néant", 100, []);
console.log(personnage);

// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix
class Objet{
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}

// III
// ### Créer deux instances d'objets avec un nom et un prix
let aquarium = new Objet("aquarium", 50);
let terrarium = new Objet("terrarium", 60);
// ### Créer une boite (tableau) et mettre les deux objets dedans.
let boite = [];
boite.push(aquarium);
boite.push(terrarium);

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet, boite)
// ### _Méthode : acheter(vendeur, objet)
class Personnage{
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet, boite) => {
            this.sac.push(objet);
            boite.splice(boite.indexOf(objet),1);
            console.log(`${this.nom} a mis un ${objet.nom} dans son sac`);
        };
        this.acheter = (vendeur, objet) => {
            if(this.argent >= objet.prix){
                //je peux acheter

                this.argent -= objet.prix; 
                //this.argent = this.argent-objet.prix
                //tu as 60 la théière vaut 40
                //il te reste 20
            
                vendeur.argent += objet.prix;
                //vendeur.argent = vendeur.argent+objet.prix
                //le vendeur empoche les 40 dépensés pour la théière

                this.sac.push(objet);
                vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
                console.log(`${this.nom} a acheté ${objet.nom} a ${vendeur.nom}`);
            }else{
                //je peux pas acheter
                console.log("Va acheter des trucs moins chers !");
            }
            
        };
    }
}

let julio = new Personnage("Julio", [], 30);
let miguel = new Personnage("Miguel", [], 70);

julio.prendre(aquarium, boite);
miguel.prendre(terrarium, boite);

miguel.acheter(julio, aquarium);
julio.acheter(miguel, terrarium);



// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.