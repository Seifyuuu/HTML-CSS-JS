// Exo 1

// Exo 2
let temps = prompt("Quel temps fait t-il ? (pluie/orage/nuage/soleil/neige)");
switch (temps) {
  case "pluie":
    alert("Je prends un parapluie");
    break;
  case "orage":
    alert("J'installe un paratonnerre");
    break;
  case "nuage":
    alert("Je souffle les nuages");
    break;
  case "soleil":
    alert("Je bronze");
    break;
  case "neige":
    alert("Vive la neige");
    break;
  default:
    alert("écrit bien toi aussi");
    break;
}


// Exo 3 

let nbr1 = parseInt(prompt("Donne un chiffre"));
let ope = prompt("Tu veux faire quoi ? ( + - * / )")
let nbr2 = parseInt(prompt("Donne un deuxième chiffre"));

switch (ope) {
  case ("+"):
    alert(nbr1 + nbr2)
    break;
  case ("-"):
    alert(nbr1 - nbr2)
    break;
  case ("/"):
    alert(nbr1 / nbr2)
    break;
  case ("*"):
    alert(nbr1 * nbr2)
    break;
  default: 
  alert("soit correct")
    break;
}