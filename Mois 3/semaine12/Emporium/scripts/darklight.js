// Dark Mode & Light Mode
let btnLight = document.querySelectorAll("button")[4];
let btnDark = document.querySelectorAll("button")[5];
let allText = document.querySelectorAll("p,span,h1,h2,h3,h4,h5,h6");
let navbar = document.querySelector("header");
let body = document.querySelectorAll("section")
let section6 = document.querySelectorAll("div.greyBox");
let empo = document.querySelector("img#imgLogo");
let empo2 = document.querySelector("img#imgEmpo");
let txtSect4 = document.querySelector("h1#textSection4");
let priceP = document.querySelectorAll("p.priceP");
let pTxtImg = document.querySelectorAll("span.textOnImg");
let ShopAt = document.querySelector("h2#ShopAt");
let bgSection2 = document.querySelector("div#section2");
let html = document.querySelector("html");
let logoEmpo2 = document.querySelectorAll("img.logoEmpo2");
let imglogoEmpo2White = document.createElement("img");
let navbar3 = document.querySelector("nav");
let txtFooter = Array.from(document.querySelectorAll("footer"));
let logoConnexion = document.querySelector("#logoConnexion")
console.log(txtFooter);
imglogoEmpo2White.setAttribute("src", "../public/img/logoBlanc.png");

btnDark.addEventListener("click", () => {
   body.forEach(element => {
       element.style.backgroundColor = "black";
       document.body.style.backgroundColor = "black";
   });
   allText.forEach(element => {
       element.style.color = "white";
       navbar.style.color = "white";
   })
   section6.forEach(element =>{
       element.style.backgroundColor ="rgb(65, 65, 65)"
   })
   priceP.forEach(element =>{
    element.style.color = "red";
    })
    ShopAt.style.color = "red";
    logoEmpo2.forEach(element => {
        element.setAttribute("src","../public/img/logoBlanc.png")
    });
    navbar3.style.color ="white"
    navbar3.style.backgroundColor = "black";
    if (document.body.style.backgroundColor == "black") {
        logoImg.setAttribute("src", "./public/img/logoBlanc.png")
    } else {
        logoImg.setAttribute("src", "./public/img/logo.png")
    }
    divConnexion.style.backgroundColor = "black";
    logoConnexion.setAttribute("src", "./public/img/logoBlanc.png")

})

btnLight.addEventListener("click", ()=> {
    body.forEach(element => {
        element.style.backgroundColor = "rgb(243, 243, 243)";
        document.body.style.backgroundColor = "white";
    });
    allText.forEach(element => {
        element.style.color = "black";
        navbar.style.color = "black";
    })
    section6.forEach(element =>{
        element.style.backgroundColor ="rgb(220, 220, 220)"
    })
    txtSect4.style.color = "white"
    priceP.forEach(element =>{
        element.style.color = "red";
    })
    pTxtImg.forEach(element =>{
        element.style.color = "white";
    })
    ShopAt.style.color = "red";
    html.style.color = "rgb(243, 243, 243)";
    logoEmpo2.forEach(element => {
        element.setAttribute("src","../public/img/logo.png")
    });
    navbar3.style.color ="black"
    navbar3.style.backgroundColor = "white";
    if (document.body.style.backgroundColor == "black") {
        logoImg.setAttribute("src", "./public/img/logoBlanc.png")
    } else {
        logoImg.setAttribute("src", "./public/img/logo.png")
    }   
    if (divConnexion.style.backgroundColor == "black") {
        divConnexion.style.backgroundColor = "white"
        logoConnexion.setAttribute("src", "./public/img/logo.png")
    }
})

