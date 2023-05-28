'use strict';

const tabs = document.querySelector(".services__tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

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

// На верх

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