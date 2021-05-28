// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
let testGet = document.getElementsByClassName("redPurple")
console.log(testGet);
// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
let testQuery = document.querySelectorAll('.redPurple');
console.log(testQuery);
// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"
let testQuery2 = document.querySelectorAll('h1[class ="redPurple"]')
// let autreManiere = document.querySelectorAll('h1.redPurple')
console.log(testQuery2);
// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
let testQuery3 = document.querySelectorAll('p,span,li');
console.log(testQuery3);
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
let testQuery4 = document.querySelectorAll('li[class ="important"], p')
console.log(testQuery4);
// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"
let testQuery5 = document.querySelectorAll('h1[class="redPurple"], span[class="redPurple"]')
console.log(testQuery5);