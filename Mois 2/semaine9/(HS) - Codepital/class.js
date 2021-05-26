export {patients, docteur, diags, pharmacie, cimetiere, cures, }


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



// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 
// ​
// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade


class Patient{
    constructor(name, disease, money, bag, state, cure){
        this.name = name;
        this.disease = disease;
        this.money = money;
        this.bag = bag;
        this.state = state;
        this.cure = cure;
    }
    goTo(){

    }

    takeMed(){

    }    
}

let patients = [];
patients.push(new Patient("Marcus", "mal indenté", 100, "none", "sick", "none"));
patients.push(new Patient("Optimus", "unsave", 200, "none", "sick", "none"));
patients.push(new Patient("Sangoku", "404", 80, "none", "sick", "none"));
patients.push(new Patient("DarthVader", "azmatique", 110, "none", "sick", "none"));
patients.push(new Patient("Semicolon", "syntaxError", 60, "none", "sick", "none"));


// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.
// ​
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

let docteur = {
    name : "Dr.Nikomok",
    money : "0",
    cabinet : [],
    attente : patients,
   
    patientIn(){
        this.cabinet.push(this.attente.shift())
        let lemalade = this.cabinet[0];
        console.log(`${lemalade.name} est rentré`); 
    },
    diagnostique(){
        let lemalade = this.cabinet[0];
        console.log(`${lemalade.name} a le symptome ${lemalade.disease}`);
        let curelemalade;
        for (const i of diags) {
            if (i.disease == lemalade.disease) {
                curelemalade = i.cure;
                lemalade.cure = curelemalade;
            }
        }
        console.log(`Le traitement de ${lemalade.name} est ${curelemalade}`);
        lemalade.money = lemalade.money - 50;
        console.log(`${lemalade.name} a payé 50€`);
    },
    patientOut(){
        console.log(`Le patient est parti`);
        pharmacie.waiting.push(this.cabinet.shift())
        console.log(`${pharmacie.waiting[0].name} est arrivé à la pharmacie`);
    }
}


// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

let pharmacie = {
    waiting : [],

    seekMed(){
        let lemalade = this.waiting[0];
        for (const i of cures) {
            if (i.cure == lemalade.cure) {
                console.log(`Le ${i.cure} coûte ${i.price}€`);
                if (i.cure == lemalade.cure && i.price < lemalade.money){
                    
                    lemalade.bag = i.cure;
                    console.log(`${lemalade.name} a acheté ${lemalade.bag} et il lui reste ${lemalade.money}`);
                    pharmacie.waiting.shift()
                    console.log(`${lemalade.name} quitte la pharmacie`);
                }
                else{
                    console.log(`${lemalade.name} n'a pas l'argent et termine au cimetiere`);
                    cimetiere.push(pharmacie.waiting.shift());
                }      
            }
           
        }
        
    }
};
let cimetiere = [];

