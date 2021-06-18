// When the user scrolls the page, execute myFunction
window.onscroll = function() {GoingDownLikeARollerCoster()};

let navbar2 = document.getElementById("navbarAnim");
let leLogo = document.querySelector("img");
let leUl = document.querySelector("ul");
let logoLi = document.createElement("li");
let logoImg = document.createElement("img");
logoImg.setAttribute("src", "./public/img/logo.png")
logoLi.style.width = "8%"
logoImg.classList.add("imgLogoNavbar")
logoLi.appendChild(logoImg)

// Get the offset position of the navbar
let sticky = navbarAnim.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function GoingDownLikeARollerCoster() {
  if (window.pageYOffset >= sticky) {
    navbar2.classList.add("sticky")
    leLogo.style.display = "none";
    leUl.insertBefore(logoLi, leUl.firstChild)

  } else {
    navbar2.classList.remove("sticky");
    leLogo.style.display = "initial";
    logoLi.remove()
  }
}
