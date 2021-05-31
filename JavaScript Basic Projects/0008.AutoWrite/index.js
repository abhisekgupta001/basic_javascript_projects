var text="web Developer";
var title=document.getElementById("title");
var index=0;

function createText(){
title.innerText = text.slice(0,index);
index++;

if(index >text.length)
{
    index=0;
}

}

setInterval(createText,100);