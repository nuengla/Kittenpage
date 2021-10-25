var nav = document.querySelector(".nav");
var menu = document.querySelector(".menu");
var close = document.querySelector("#close");
var body = document.querySelector("body");

function shownav(){
    nav.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block";
    body.style.overflowY = "hidden";
    
}
function hidenav(){
    nav.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none";
    body.style.overflowY = "scroll";
}
