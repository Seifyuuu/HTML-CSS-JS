// # Exo bonus 1
// - Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€


let personne = {
    argent : 30,
    achat : "",
    pain : 3,
    poulet : 6,

    payer(){
        achat = prompt("tu veux acheter quoi? (pain = 3€ ou poulet = 6€)");
        if (achat == "pain") {
            alert("tu as 27€ et un pain")
        }else{alert("recommence")}

        
        
        if (achat == "poulet") {
            alert("tu as 24€ et un poulet")
        }else{alert("recommence")}
    }


}


personne.payer()