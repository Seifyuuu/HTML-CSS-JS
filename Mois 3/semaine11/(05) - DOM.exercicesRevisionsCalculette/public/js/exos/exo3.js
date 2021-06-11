let nbr5 = document.querySelectorAll("input")[4];
let nbr6 = document.querySelectorAll("input")[5];
let btn4 = document.querySelectorAll("button")[2];
let result3 = document.querySelectorAll("span")[4];
let spanOpe = document.querySelectorAll("span")[3];
let operators = document.querySelectorAll("button")[3];
let operators2 = document.querySelectorAll("button")[4];
let operators3 = document.querySelectorAll("button")[5];
let operators4 = document.querySelectorAll("button")[6];
console.log(nbr5, nbr6, btn4, result3, operators);

operators.addEventListener("click", () => {
    spanOpe.innerText = "+"
})
operators2.addEventListener("click", () => {
    spanOpe.innerText = "-"
})
operators3.addEventListener("click", () => {
    spanOpe.innerText = "*"
})
operators4.addEventListener("click", () => {
    spanOpe.innerText = "/"
})


btn4.addEventListener("click", () => {
    if (spanOpe.innerText == "+") {
        result3.innerHTML = parseInt(nbr5.value) + parseInt(nbr6.value);
    }
    else if(spanOpe.innerText == "-"){
        result3.innerHTML = parseInt(nbr5.value) - parseInt(nbr6.value);
    }
    else if(spanOpe.innerText == "*"){
        result3.innerHTML = parseInt(nbr5.value) * parseInt(nbr6.value);
    }
    else if(spanOpe.innerText == "/"){
        result3.innerHTML = parseInt(nbr5.value) / parseInt(nbr6.value);
    }
})