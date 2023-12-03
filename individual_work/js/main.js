"use strict"
console.log("thy")
let challenges = document.querySelectorAll(".challenges article");

challenges.forEach(element => {
    let title = element.querySelector(".card__group--title");
    title.addEventListener("click", () => {
        element.classList.toggle("one-col");
    })
});