export {patients, docteur}
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
    payer(){

    }
    goTo(){

    }

    takeMed(){

    }    
}

let patients = [];
patients.push(new Patient("Marcus", "mal indenté", 100, "none", "sick"));
patients.push(new Patient("Optimus", "unsave", 200, "none", "sick"));
patients.push(new Patient("Sangoku", "404", 80, "none", "sick"));
patients.push(new Patient("DarthVader", "azmatique", 110, "none", "sick"));
patients.push(new Patient("Semicolon", "syntaxError", 60, "none", "sick"));

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.
// ​
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

let docteur = {
    name : "Dr.House",
    money : "0",
    cabinet : "[chat]",
    attente : patients,
    function patientIn(){
        
    },
    function diagnostique(){
        
    },
    function patientOut(){
        
    }
}
