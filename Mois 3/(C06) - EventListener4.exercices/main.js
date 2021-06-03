// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let myH1 = document.querySelector("h1");
myH1.addEventListener("dblclick", () => {
    myH1.style.backgroundColor = "red";
    myH1.style.color = "white";
});
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let myH3 = document.querySelector("h3");

myH3.addEventListener("mouseover", () => {
    myH3.textContent = myH3.textContent.substr(0, myH3.textContent.length-1);
});

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let myP = document.querySelector("p");
myP.addEventListener("click", () => {
    if(myP.style.backgroundColor == "blue" && myP.style.color == "gold"){
        myP.style.backgroundColor = "white";
        myP.style.color = "black";
    }else{
        myP.style.backgroundColor = "blue";
        myP.style.color = "gold";
    }
});