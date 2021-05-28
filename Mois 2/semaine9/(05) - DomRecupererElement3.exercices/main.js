// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let txtFirstParaClassTartine = document.querySelector(".tartine").textContent;
console.log(txtFirstParaClassTartine);

// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let txtIdToast = document.querySelector("#toast").innerText;
console.log(txtIdToast);

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let txtSecondParaClassTartine = document.getElementsByClassName('tartine')[length+1];
console.log(txtSecondParaClassTartine);
