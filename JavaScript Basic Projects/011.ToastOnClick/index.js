var btn = document.getElementById("btn");
var container = document.getElementById("container");

btn.addEventListener("click",()=>{
    createToast();
})

function createToast(){
    var toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText="Kisne touch kiya usko MC";

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}