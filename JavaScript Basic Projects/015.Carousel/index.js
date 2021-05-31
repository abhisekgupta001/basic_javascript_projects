var imgContainer = document.getElementById("img-container");

var index = 0;

function run()
{
    index++;
    if(index>3)
    {
        index = 0;
    }

    imgContainer.style.transform = `translateY(${-index * 500}px)`;
    console.log(imgContainer.style.transform)
}

setInterval(run,2000);