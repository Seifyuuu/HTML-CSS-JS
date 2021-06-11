let nbr1 = document.querySelectorAll("input")[0];
let nbr2 = document.querySelectorAll("input")[1];
let btn = document.querySelectorAll("button")[0];
let result = document.querySelectorAll("span")[1];

btn.addEventListener("click", () => {
    result.innerHTML = parseInt(nbr1.value) + parseInt(nbr2.value); 
})
