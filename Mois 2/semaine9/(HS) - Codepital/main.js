import { patients, docteur, diags, pharmacie, cimetiere } from "./class.js";

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
}

let cures = [];
cures.push(new Cure("ctrl+maj+f", 60));
cures.push(new Cure("saveOnFocusChange", 100));
cures.push(new Cure("CheckLinkRelation", 35));
cures.push(new Cure("Ventoline", 40));
cures.push(new Cure("f12+doc", 20));




//


console.log(`Dans la salle d'attente il y'a ${docteur.attente.length} personnes`);
docteur.patientIn()
docteur.diagnostique()
docteur.patientOut()
