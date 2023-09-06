let close = document.getElementById("close");
let opne = document.querySelector("bar");
let nav = document.getElementById("navbar");

// if (bar) {
//     bar.addEventListener("click", () => {
//     nav.classList.add("active");
//     });
// }

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
