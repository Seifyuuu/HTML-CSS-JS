let btnConnexion = document.querySelector("#btnCo");
console.log(btnConnexion);
let divConnexion = document.querySelector("#pageConnexion")
console.log(divConnexion);
let allSect = Array.from(document.querySelectorAll(".blurred"));
console.log(allSect);
let btnClose = document.querySelector("#closeWindow")
console.log(btnClose);
let inscription = document.querySelector("#inscription")
let divInscri = document.querySelector("#formulaireNvx")
let subCo = document.querySelector("#subCo")

btnConnexion.addEventListener("click", () => {
    divConnexion.style.display = "block";
    allSect.forEach(element => {
        element.style.filter = "blur(10px)"
    });
})

btnClose.addEventListener("click", () => {
    divConnexion.style.display ="none";
    allSect.forEach(element => {
        element.style.filter = "blur(0px)"
    });
})

inscription.addEventListener("click", () =>{
    divInscri.style.display = "flex";
})

subCo.addEventListener("click", () =>{
    divInscri.style.display = "none";
})