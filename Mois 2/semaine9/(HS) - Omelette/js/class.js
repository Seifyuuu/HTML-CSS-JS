export { perso1, maison, couteau, oignon, oeuf, epice, fromage, aldi, poele1}

class Personne{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (instanceLieu) => {
            // valoriser instanceLieu par le lieu 
            this.lieu = instanceLieu.nom;
            // pousser le nom.personne dans le direction.personnes
            instanceLieu.personnes.push(this.nom);
        }
        this.prendPanier = () => {
            this.mainDroite = aldi.panier1;
        }
        this.remplirPanier = () => {
            if (this.lieu == "aldi") {
                for (const i in aldi.stock) {
                    this.mainDroite.push(aldi.stock[i])
                    console.log(`Zac vient de de mettre ${aldi.stock[i].nom} dans le panier`);
                }
            }
        }
        this.payerPanier = () => {
            if (this.lieu == "aldi") {
                for (const i in perso1.mainDroite) {
                    console.log(`Zac vient de payer ${perso1.mainDroite[i].prix}€ pour ${perso1.mainDroite[i].nom}`);
                    this.argent = this.argent - perso1.mainDroite[i].prix
                }
            }
        }
        this.couper = () => {

        }
       
    }
}

class Endroit{
    constructor(nom, personnes) {
     this.nom = nom;
     this.personnes = personnes;
    }
}

class Epicerie extends Endroit{
    constructor(nom, personnes, panier1, panier2, panier3, stock){
        super(nom, personnes)
        this.panier1 = panier1;
        this.panier2 = panier2;
        this.panier3 = panier3;
        this.stock = stock;
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


class Poele{
    constructor(contenu) {
        this.contenu = contenu;
    }
}



let perso1 = new Personne("Zac", "Dehors", 50, "mainDroite", "mainGauche");
let maison = new Endroit("Dar", []);
let couteau = new Outils("couteau", "coupé");
let oignon = new Produits("oignon","entier", 1);
let oeuf = new Produits("oeuf", "entier", 2);
let epice = new Produits("epice", "moulu", 5);
let fromage = new Produits("fromage", "entier", 10);
let aldi = new Epicerie("aldi", [], [], [], [], [oignon, oeuf, epice, fromage]);
let poele1 = new Poele([]);