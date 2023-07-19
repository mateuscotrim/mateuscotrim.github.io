var nav = document.getElementById('navbar');
window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 80) {
        nav.style.background = "#1b1b1b";
    } else {
        nav.style.background = "transparent";
    }
});

const target = document.querySelectorAll("[anime]");
const animationClass = "animate";

function animationScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4));
    target.forEach((element) => {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animationScroll();
if (target.length) {
    window.addEventListener("scroll", () => {
        animationScroll();
    });
}