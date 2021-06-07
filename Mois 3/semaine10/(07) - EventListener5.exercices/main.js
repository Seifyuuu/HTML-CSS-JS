// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-error
let leH1 = document.querySelector("h1");
leH1.classList.add("text-error");

// ### 2. Au double clique du h3, la class text-error
let leH3 = document.querySelector("h3");

leH3.addEventListener("dblclick", () => {
    leH3.classList.add("text-error");
})



// ### 3. Ajoute la class text-style, quand on clique sur le paragraphe, trouve une methode qui retire la class si elle est déjà sur le paragraphe

let lesP = document.querySelector("p");

lesP.addEventListener("click", () => {
    lesP.classList.toggle("text-style")
})


// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let leP2 = Array.from(document.querySelectorAll("p")[1].children);


leP2.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("bolder")
    })
});

// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !


let leP3 = Array.from(document.querySelectorAll("p")[2].children);

leP3.forEach(element => {
    element.addEventListener("click", () => {
        leP3.forEach (element => {
            element.classList.remove("bolder-red")
        })
       element.classList.add("bolder-red")
    })
});
