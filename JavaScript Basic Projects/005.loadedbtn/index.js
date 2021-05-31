var text= document.getElementById("text");
var loaded= document.getElementById("loaded");

loaded.addEventListener("click",()=>{
    toggleClass();
})


function toggleClass(){
     text.classList.toggle("show");
     loaded.innerText = "Reload";
}