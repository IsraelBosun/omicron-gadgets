var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("nav-menu");
var newNavMenu = document.getElementById("nav-menux");

var hamNav = function(){
    // hamburger.classList += "active"
    // navMenu.classList += "active"
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    newNavMenu.classList.toggle("active");
};

hamburger.addEventListener("click", hamNav)




console.log(navMenu)
console.log(hamburger)
console.log()