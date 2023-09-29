let close = document.getElementById("close");
let opne = document.querySelector("bar");
let nav = document.getElementById("navbar");

if (open){
    bar.addEventListener("click", () => {
    nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
    nav.classList.remove("active");
    });
}

// Navigate between images
let MainImg = document.getElementById("MainImg");
let Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function(){
    MainImg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function(){
    MainImg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function(){
    MainImg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function(){
    MainImg.src = Smallimg[3].src;
}