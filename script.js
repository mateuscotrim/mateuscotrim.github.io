function menuMobile() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
        setTimeout(function () {
            document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
        }, 250)
    } else {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
    }
}

var nav = document.getElementById('navbar');
window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
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