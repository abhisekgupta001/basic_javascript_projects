const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    document.body.style.background = randomBg();
})

function colorOne()
{
    return `hsl(${Math.floor(Math.random()*360)},${Math.floor(Math.random()* 1+99) + "%"},${Math.floor(Math.random()*1+49) + "%"})`;
}
function colorTwo()
{
    return `hsl(${Math.floor(Math.random()*360)},${Math.floor(Math.random()* 1+99) + "%"},${Math.floor(Math.random()*1+49) + "%"})`;
}
function randomBg()
{
return `linear-gradient(${Math.floor(Math.random()*360) + "deg"},${colorOne()},${colorTwo()})`

}