class Personne{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        // fonction seDeplacer
        // fonction payerArticle
        // fonction couper 
    }
}

class Lieux{
    constructor(nom, personnes) {
     this.nom = nom;
     this.personnes = personnes;
    }
}
let maison = new Lieux("maison", []);

class Outils{
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}
let couteau = new Outils("couteau", "coupé");

class Produits{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let oignon = new Produits("oignon","entier", 1)
let oeuf = new Produits("oeuf", "entier", 2)
let epice = new Produits("epice", "moulu", 5)
let fromage = new Produits("fromage", "entier", 10)

class Epicerie{
    constructor(nom, personnes, paniers){
        this.nom = nom;
        this.personnes = personnes;
        this.paniers = paniers;
    }
}
let aldi = new Epicerie("aldi", [], "panier1")


class Poele{
    constructor(contenu) {
        this.contenu = contenu;
        // fonction cuir
    }
}

class Bol{
    constructor()
    // fonction mélanger
}