// //Je déclare la classe Humain avec son constructor et ses propriété. C'est ma classe parent
// class Humain{
//     constructor(nom, prenom, argent){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//     }
// }

// // je déclare une classe enfant (qui extend (étend) la classe parent (Humain))
// // les classes enfants récupèrent via les extends les propriétés et les méthodes de la classe parent
// // on déclare dans le constructor les propriétés dont on a besoin 
// class Espagnol extends Humain{
//     constructor(nom, prenom, argent, region, langue){
//         //super permet de récupérer le constructor et les propriétés de la classe parent (ici Humain)
//         super(nom, prenom, argent);
//         this.region = region;
//         this.langue = langue;
//     }
// }

// //classe enfant (qui extend (étend) la classe parent (Humain))
// class Belge extends Humain{
//     constructor(nom, prenom, argent, frites, gaufres){
//         super(nom, prenom, argent);
//         this.frites = frites;
//         this.gaufres = gaufres;
//     }
// }

// let jose = new Espagnol("Caravaca", "Jose", 2, "Cadiz", "espagnol"); //je déclare une instance de ma classe Espagnol en respectant l'ordre des propriétées
// let jan = new Belge("Jambon", "Jan", 10000, "frites mayo", "gaufres de liège");

// console.log(jose);
// console.log(jan);


class Guerrier{
    constructor(nom, type, pv){
        this.nom = nom;
        this.type = type;
        this.pv = pv;
    }
}

class Berserker extends Guerrier{
    constructor(nom, type, pv, typeDeHache, furie){
        super(nom, type, pv);
        this.typeDeHache = typeDeHache;
        this.furie = furie;
    }
}

class Archer extends Guerrier{
    constructor(nom, type, pv, typeDarc, typeDeFleches){
        super(nom, type, pv);
        this.typeDarc = typeDarc;
        this.typeDeFleches = typeDeFleches;
    }
}

class ArcherElemetaire extends Archer{
    constructor(nom, type, pv, typeDarc, typeDeFleches, elementFavori){
        super(nom, type, pv, typeDarc, typeDeFleches);
        this.elementFavori = elementFavori;
    }
}

class ArcherSneaky extends Archer{
    constructor(nom, type, pv, typeDarc, typeDeFleches, niveauDeDiscretion){
        super(nom, type, pv, typeDarc, typeDeFleches);
        this.niveauDeDiscretion = niveauDeDiscretion
    }
}


let guerrierGlobal = new Guerrier("Tom", "guerrier de base", "5");
let berserker = new Berserker("Guts", "Berserker", 75, "Demon Slayer", "25%");
let archer = new Archer("Legolas", "Archer", 50, "Arc Elfique", "Flèches de Morgul");
let archerElem = new ArcherElemetaire("Ali", "Archer Elementaire", 45, "Arc Elementaire", "Flèches de feu", "Feu");
let archerSneak = new ArcherSneaky("Hawk Eye", "Archer Discret", "50", "Arc Silencieux", "Flèches Fines", "80%");

console.log(guerrierGlobal);
console.log(berserker);
console.log(archer);
console.log(archerElem);
console.log(archerSneak);