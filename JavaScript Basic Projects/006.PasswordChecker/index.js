var input = document.getElementById("input");
var submit = document.getElementById("submit");
var warning = document.getElementById("warning");

submit.addEventListener("click",()=>{
    if(input.value.length>10){
        warning.innerText ="Submitted";
        warning.style.color = "green";
    }
    else{
        warning.innerText ="Please make sure your password is longer than 10 character"
        warning.style.color = "red";
    }
})
