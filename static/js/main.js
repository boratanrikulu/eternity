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
let slide;

function openSlider() {
    currentScroll = scrollPosition();
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
    slide = null;
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
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide = slides[slideIndex - 1];
    if (history.replaceState) {
        history.replaceState({}, path, slide.getAttribute("path"));
    }
    if (slide.getAttribute("info") != "true") {
        document.getElementById('arrow').style.display = "none";
    } else {
        document.getElementById('arrow').style.display = "block";
    }
    slide.scrollTo(0, 0);
    slide.style.display = "flex";
}

function keyboardSlider(event) {
    if (event.key == "ArrowLeft") {
        plusSlides(-1);
    }
    if (event.key == "ArrowRight") {
        plusSlides(+1);
    } else if (event.key === "Escape") {
        closeSlider();
    }
}

function hideArrow() {
    if (slide) {
        let contents = slide.getElementsByClassName("content");
        if (contents) {
            let arrow = document.getElementById('arrow');
            if (isElInDom(contents[0])) {
                arrow.classList.add("hidden");
            } else {
                arrow.classList.remove("hidden");
            }
        }
    }
}

function scrollPosition() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

function isElInDom (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function checkArrow() {
    hideArrow();
    setTimeout(checkArrow, 100);
}

checkArrow();