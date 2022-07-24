document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

const path = window.location.href

let currentScroll = 0

function openSlider() {
    currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    document.body.classList.add("noscroll");
    document.getElementById('slider').style.display = "grid";
    document.addEventListener('keydown', keyboardSlider);
}

function closeSlider() {
    document.getElementById('slider').style.display = "none";
    document.removeEventListener('keydown', keyboardSlider);
    if (history.replaceState) {
        history.replaceState({}, path, path);
    }
    document.body.classList.remove("noscroll");
    window.scrollTo(0, currentScroll);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slide = document.getElementsByClassName("slide");
    if (n > slide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    if (history.replaceState) {
        history.replaceState({}, path, slide[slideIndex - 1].getAttribute("path"));
    }
    if (slide[slideIndex - 1].getAttribute("info") != "true") {
        document.getElementById('arrow').style.display = "none";
    } else {
        document.getElementById('arrow').style.display = "block";
    }
    slide[slideIndex - 1].scrollTo(0, 0)
    slide[slideIndex - 1].style.display = "flex";
}

function keyboardSlider(event) {
    if (event.key == "ArrowLeft") {
        plusSlides(-1);
    }
    if (event.key == "ArrowRight") {
        plusSlides(+1);
    } else if (event.key === "Escape") {
        closeSlider()
    }
}
