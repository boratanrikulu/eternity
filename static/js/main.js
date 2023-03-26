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
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
}

function closeSlider() {
    document.getElementById('slider').style.display = "none";
    document.removeEventListener('keydown', keyboardSlider);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
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

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;
    processSwipe(touchStartX, touchEndX, touchStartY, touchEndY);

}

function processSwipe(touchStartX, touchEndX, touchStartY, touchEndY) {
    swipeLength = touchEndX - touchStartX;
    swipeVerticalLength = touchEndY - touchStartY;

    // do nothing if vertical travel is high (diagonal swipe)
    if(Math.abs(swipeVerticalLength) > 75) return;
    // do nothing if small accidental swipe
    if(Math.abs(swipeLength) < 0.2 * window.innerWidth) return;

    if(swipeLength > 0) { // swipe right
        plusSlides(-1);
    } else if(swipeLength < 0) { // swipe left
        plusSlides(+1);
    }
}
