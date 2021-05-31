var open= document.getElementById("open");
var close= document.getElementById("close");
var container= document.getElementById("container");

open.addEventListener("click",()=>{
container.classList.toggle("active");
});
close.addEventListener("click",()=>{
    container.classList.toggle("active");
    });