    // ### Créer deux personnages du nom de François et Sergio
    // ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
    // ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

    let perso1 = {
        prenom : "Sergio",
        aliments : ["pain","poulet","sauce"],
    }

    let perso2 = {
        prenom : "Francois",
        aliments : ["salade","fromage","oignons","tomates"],

        
        voler(){
            this.aliments.push("pain", "poulet");
            perso1.aliments.shift()
            perso1.aliments.shift()
            console.log(this.aliments);
            console.log(perso1.aliments);
        }

    }

    perso2.voler()