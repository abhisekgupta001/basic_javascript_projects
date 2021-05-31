var btn = document.getElementById("btn");
var nav = document.getElementById("nav");

btn.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
})