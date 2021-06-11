let nbr3 = document.querySelectorAll("input")[2];
let nbr4 = document.querySelectorAll("input")[3];
let btn2 = document.querySelectorAll("select")[0];
let btn3 = document.querySelectorAll("button")[1];
let result2 = document.querySelectorAll("span")[2];
console.log(btn2.value);

btn3.addEventListener("click", () => {
    if (btn2.value == "+") {
        result2.innerHTML = parseInt(nbr3.value) + parseInt(nbr4.value);
    } else if (btn2.value == "-") {
        result2.innerHTML = parseInt(nbr3.value) - parseInt(nbr4.value);
    } else if (btn2.value == "*") {
        result2.innerHTML = parseInt(nbr3.value) * parseInt(nbr4.value);
    } else if (btn2.value == "/") {
        result2.innerHTML = parseInt(nbr3.value) / parseInt(nbr4.value);
    }
})

