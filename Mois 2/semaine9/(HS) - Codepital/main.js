// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

class Diag{
    constructor(disease, cure) {
        this.disease = disease;
        this.cure = cure;
    }
}

let diags = []
diags.push(new Diag("mal indenté", "ctrl+maj+f"));
diags.push(new Diag("unsave", "saveOnFocusChange"));
diags.push(new Diag("404", "CheckLinkRelation"));
diags.push(new Diag("azmatique", "Ventoline"));
diags.push(new Diag("syntaxError", "f12+doc"));

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

class Cure{
    constructor(cure, price){
        this.cure = cure;
        this.price = price;
    }
}​

let cures = [];
cures.push(new cure("ctrl+maj+f", 60));
cures.push(new cure("saveOnFocusChange", 100));
cures.push(new cure("CheckLinkRelation", 35));
cures.push(new cure("Ventoline", 40));
cures.push(new cure("f12+doc", 20));

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

let pharmacie = [];
let cimetiere = [];