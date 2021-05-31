function createHeart()
{
    var heart = document.createElement("div");
    heart.innerHTML="❤";
    heart.classList.add("heart");

    document.body.appendChild(heart);


    heart.style.left = Math.random() * 100 +"vh";
    heart.style.animationDuration = Math.random() * 2 + 3 +"s" ;

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,1000);