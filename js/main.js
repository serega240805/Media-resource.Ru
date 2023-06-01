'use strict';

import anime from './node_modules/animejs/lib/anime.es.js';

const number = [12, 1258, 300, 35],
    numberElement = document.querySelectorAll('.header__num');

numberElement.forEach((element, index) => {
    anime({
        targets: element,
        innerHTML: [0, number[index]],
        duration: 5000,
        round: 1,
        easing: 'easeOutExpo'
    });
});

window.addEventListener('DOMContentLoaded', () => {

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

    const btnUp = document.querySelector('.btn-up');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            btnUp.classList.add('show');
        } else {
            btnUp.classList.remove('show');
        }
    });

    btnUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});