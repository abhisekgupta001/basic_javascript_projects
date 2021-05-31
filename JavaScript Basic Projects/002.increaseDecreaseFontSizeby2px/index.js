var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var input=document.getElementById("input");
var display=document.getElementById("display");


input.onchange=()=>{
    var text=input.value;
    display.innerText=text;
}
plus.addEventListener("click",()=>{
        var style = window.getComputedStyle(display, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        var newSize=currentSize+2;
        display.style.fontSize = newSize+"px";
})

minus.addEventListener("click",()=>{
    var style = window.getComputedStyle(display, null).getPropertyValue('font-size');
    var currentSize = parseInt(style);
    var newSize=currentSize-2;
    display.style.fontSize = newSize+"px";
})