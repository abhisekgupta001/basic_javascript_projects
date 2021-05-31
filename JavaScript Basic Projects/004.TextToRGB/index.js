var input=document.getElementById("input");
var display=document.getElementById("display");
var red=document.getElementById("red");
var green=document.getElementById("green");
var blue=document.getElementById("blue");

input.onchange = ()=>{
    display.innerHTML = input.value;
}


red.addEventListener("click",()=>{
    display.style.color="red";
})

green.addEventListener("click",()=>{
    display.style.color="green";
})

blue.addEventListener("click",()=>{
    display.style.color="blue";
})