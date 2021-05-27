// > Créez une div avec dédans un h1, un h2, un input et un button
let thediv = document.createElement("div");
let theH1 = document.createElement("h1");
let theH2 = document.createElement("h2");
let theBtn = document.createElement("button");
let theInput = document.createElement("input");

// thediv.appendChild(theH1);
// thediv.appendChild(theH2);
// thediv.appendChild(theBtn);
// thediv.appendChild(theInput);

thediv.append(theH1,theH2,theBtn,theInput)
//fait la même chose que les 4 lignes au dessus permet de push en un coup


//> Affichez cette div dans l'HTML
let theBody = document.querySelector("body");
theBody.appendChild(thediv);
console.log(theBody);



// > Le h1 doit contenir "Je suis un titre"
// > Le h2 doit contenir "Je suis un sous-titre"
// > Le button doit contenu "Acceptez"
let theTxt1 = document.createTextNode("Je suis un titre");
let theTxt2 = document.createTextNode("Je suis un sous-titre");
let theBtnTxt = document.createTextNode("Acceptez");
theH1.appendChild(theTxt1);
theH2.appendChild(theTxt2);
theBtn.appendChild(theBtnTxt);

// > Changer le contenu du h1 en "Je suis un grand titre"
theH1.innerHTML = "Je suis devenu un grand titre"




