var op1=document.getElementById("operand1");
var op2=document.getElementById("operand2"); 
var plus=document.getElementById("plus"); 
var minus=document.getElementById("minus"); 
var multiply=document.getElementById("multiply"); 
var divide=document.getElementById("divide"); 
var output=document.getElementById("output");


plus.addEventListener("click",()=>{
    var value1=parseInt(op1.value);
    var value2=parseInt(op2.value);
    var result=(value1+value2);
    output.innerText=result;
})
minus.addEventListener("click",()=>{
    var value1=parseInt(op1.value);
    var value2=parseInt(op2.value);
    var result=(value1-value2);
    output.innerText=result;
})
multiply.addEventListener("click",()=>{
    var value1=parseInt(op1.value);
    var value2=parseInt(op2.value);
    var result=(value1*value2);
    output.innerText=result;
})
divide.addEventListener("click",()=>{
    var value1=parseInt(op1.value);
    var value2=parseInt(op2.value);
    var result=(value1/value2);
    output.innerText=result;
})