"use strict"

const challenges = document.querySelectorAll(".challenges article");


// Переключатель сетки заданий
challenges.forEach(element => {
    const title = element.querySelector(".card__group--title");
    title.addEventListener("click", () => {
        element.classList.toggle("one-col");
    })
});

const notificationButton = document.querySelector("#notificationButton");
const notifications = document.querySelector("#notifications")

// Переключатель уведомлений
notificationButton.addEventListener("click", () => {
    notifications.classList.toggle("open");
})
// Выключатель уведомлений
notifications.addEventListener("click", (e) => {
    if(e.target != notifications) return;
    notifications.classList.remove("open");
})