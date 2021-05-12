// ## Exo 1
//### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let perso1 = {
    prenom : "Morsay",
    nom : "Truand2laGalere",
    sePresenter(){
        console.log(`Bonjour je m'appelle" ${this.prenom} ${this.nom}`);
    }
}
perso1.sePresenter()




//## Exo 2
//### Créer un objet avec un nom et une méthode
//### La méthode de votre objet lance un prompt permetant de changer son age
//### Une alert renvoi "[objet] a [age de l'objet] ans"

let chose = {
    nom : "Cartman",
    age : "",

    demandeAge(){
        age = parseInt(prompt("quel âge?"));
    },
    confirmAge(){
        alert("Cartman a " + age + "ans");
    }
}

chose.demandeAge()
chose.confirmAge()
