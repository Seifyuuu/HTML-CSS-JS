// ## Exo 3

// ### Créer deux personnages du nom de François et Sergio
let francois ={
    nom:"francois",
    panier:["tomate","patate","durum"],
    derober() {
        for(let i =0;i<2;i++ ){
            this.panier.push(sergio.panier[0])
            sergio.panier.shift()
            
        }
        console.log(this.panier);
        console.log(sergio.panier);
    }

}
let sergio ={
    nom:"sergio",
    panier:["cerise","fraise","pita"]
}
francois.derober()
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.
