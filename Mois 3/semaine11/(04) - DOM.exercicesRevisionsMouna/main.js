/* Reproduis le contenu html en DOM.

Crée les li avec une boucle while 




ensuite au click assigne une couleur random à chaque li en utilisant le e.target.
*/


let myDIV = document.createElement("div");
document.body.appendChild(myDIV);
let myUL = document.createElement("ul")
myDIV.appendChild(myUL)

let myCompteur = 0;
while (myCompteur < 5) {
   let lesLi = document.createElement("li");
   lesLi.textContent = "Je suis un li"
   myUL.appendChild(lesLi)
   myCompteur++;
}

let tabColor = Array.from(document.getElementsByTagName("li"));
let colorRandom = ["red", "green", "blue", "yellow", "purple"];
let item = Math.floor(Math.random() * colorRandom.length);

tabColor.forEach(element => {
    element.addEventListener("click",(e) => {
        let item = Math.floor(Math.random() * colorRandom.length);
        if (e.target.innerText == "Je suis un li") {
            e.target.style.color = colorRandom[item]
        }
    })
});


