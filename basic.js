var button = document.querySelector("#button");
var popup = document.getElementById("show");
button.addEventListener("click",function(){
    button.style.visibility = "hidden";
    popup.classList.add("open-popup");
})

var hidden = document.getElementById("hidden");

hidden.addEventListener("click",function(){
    popup.classList.remove("open-popup");
    button.style.visibility = "";
})