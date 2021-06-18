import * as MyFunctions from "./fonctions.js";
//création base
let base = document.createElement("div");
base.id = "calculatrice";
let baseBalk = document.createElement("input");
baseBalk.id = "balk";
baseBalk.type = "text"; //number fonctionne pas pcq je n'ai pas mis les opé en span 
baseBalk.style.textAlign = "center";
document.body.appendChild(base);
base.appendChild(baseBalk);
let titre = document.createElement("p");
titre.innerText = "ET MERCI"
titre.style.textAlign = "center";
titre.style.marginBottom = "1%";
titre.style.color = "white";
base.appendChild(titre);

//création btn opérations + del
let tabBtnOpe = [];
let btnOpe;
while (tabBtnOpe.length < 6) {
    btnOpe = document.createElement("button")
    tabBtnOpe.push(btnOpe);
}
base.append(...tabBtnOpe);
let i = 0;
while (i < 6) {
    tabBtnOpe[i].className = "boutons"
    i++
}
tabBtnOpe[0].innerHTML = "+";   
tabBtnOpe[1].innerHTML = "-";   
tabBtnOpe[2].innerHTML = "*";   
tabBtnOpe[3].innerHTML = "/";   
tabBtnOpe[4].innerHTML = "C"; 
tabBtnOpe[5].innerHTML = "=";

let input1;
let input2;
let operator;
let answer;
tabBtnOpe.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerText == "+") {
            input1 = parseInt(baseBalk.value);
            baseBalk.value = "";
            baseBalk.value += "+ ";
            operator = "+"
        } 
        if (e.innerText == "-") {
            input1 = parseInt(baseBalk.value);
            baseBalk.value = "";
            baseBalk.value += "- ";
            operator = "-"
        } 
        if (e.innerText == "*") {
            input1 = parseInt(baseBalk.value);
            baseBalk.value = "";
            baseBalk.value += "* ";
            operator = "*"
        } 
        if (e.innerText == "/") {
            input1 = parseInt(baseBalk.value);
            baseBalk.value = "";
            baseBalk.value += "/ ";
            operator = "/"
        } 
        if (e.innerText == "C") {
            MyFunctions.del(baseBalk);
        } 
        if (e.innerText == "=") {
            btnEqual();
        }
    })
});


//création btn nbr

let tabNbr = [{chiffre:0},{chiffre:1},{chiffre:2},{chiffre:3},{chiffre:4},{chiffre:5},{chiffre:6},{chiffre:7},{chiffre:8},{chiffre:9}] 
tabNbr.forEach(element => {
    let btnChiffre = document.createElement("button");
    btnChiffre.className = "boutonsNbr";
    btnChiffre.innerHTML = element.chiffre;
    base.appendChild(btnChiffre);
    btnChiffre.addEventListener("click", () => {
        if (btnChiffre.innerHTML == 0) {
            baseBalk.value += 0
        } 
        if (btnChiffre.innerHTML == 1) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 2) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 3) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 4) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 5) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 6) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 7) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 8) {
            baseBalk.value += btnChiffre.innerHTML
        }
        if (btnChiffre.innerHTML == 9) {
            baseBalk.value += btnChiffre.innerHTML
        }
    })
});  


// fonctions 

function btnEqual() {
    input2 = parseInt(baseBalk.value.split(" ")[1]);
    console.log(input1);
    console.log(operator);
    console.log(input2);
    switch (operator) {
        case '+':
            answer = (input1 + input2);
            console.log(answer);
            baseBalk.value = answer;
            break;
        case '-':
            answer = (input1 - input2);
            console.log(answer);
            baseBalk.value = answer;
            break;
        case '*':
            answer = (input1 * input2)
            console.log(answer);
            baseBalk.value = answer;
            break;    
        case '/':
            answer = (input1 / input2) ;
            console.log(answer);
            baseBalk.value = Math.round(answer);
            break;
}
}

