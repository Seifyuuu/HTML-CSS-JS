// Classe lieu

class Lieux{
    constructor(nom, contenu, ingredients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let maison = new Lieux("maison", []);
let epicerie = new Lieux("epicerie", [], []);
let cuisine = new Lieux("cuisine", [], []);


// classe ingredients

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
let epice = new Ingredients("epice", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6)

// classe personne

class Personne{
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = []; 
        this.seDeplacer = () =>{
            return console.log(`${this.nom} va à ${this.lieu}`);
        }
        this.payer = () => {
            return console.log(`${this.nom} paye `);
        }
        this.couper = () =>{
            return console.log(`${this.nom} retire ${this.panier}`);
        }
    }
}

let Maxime = new Personnage("Maxime", "Neant", 100, [])



 