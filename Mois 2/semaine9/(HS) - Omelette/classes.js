class Personne{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
}

class Lieux{
    constructor(nom, personnes) {
     this.nom = nom;
     this.personnes = personnes;
    }
}

class Outils{
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}

class Produits{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

class Epicerie{
    constructor(nom, personnes, paniers){
        this.nom = nom;
        this.personnes = personnes;
        this.paniers = paniers;
    }
}

class Poele{
    constructor(contenu) {
        this.contenu = contenu;
        // fonction cuir
    }
}