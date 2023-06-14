'use strict';

window.addEventListener("DOMContentLoaded", () => {

    // Burger-menu

    const burger = document.querySelector(".burger"),
        burgerMenu = document.querySelector(".menu")

    burger.addEventListener("click", (e) => {
        burger.classList.toggle("burger--opened");
        burger.classList.toggle("burger--closed");
        burgerMenu.classList.toggle("active-menu");
        burgerMenu.classList.toggle("hide");
        if (burgerMenu.classList.contains("active-menu")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    //  tabs

    const tabs = document.querySelector(".services__tabs"),
        tabButton = document.querySelectorAll(".tab-button"),
        contents = document.querySelectorAll(".content");

    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    }

    // button-up

    const btnUp = document.querySelector(".btn-up");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnUp.classList.add("show");
        } else {
            btnUp.classList.remove("show");
        }
    });

    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Other

});