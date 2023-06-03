gsap.registerPlugin(TextPlugin, ScrollTrigger);



const  num = document.querySelectorAll(".header__num");

    gsap.from(num, {
        scrollTrigger: {
            trigger: ".header__bottom",
            start : "top bottom", 
        },
        textContent: 0,
        duration: 3,
        ease: "power1.in",
        snap: { textContent: 1 },
    });


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }