let currentSlideIndex = 1; // Initialize with the first slide

function plusSlides(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add the slide-in-out class to the displayed slide
    slides[currentSlideIndex - 1].classList.add("slide-in-out");
    slides[currentSlideIndex - 1].style.display = "block";
    dots[currentSlideIndex - 1].className += " active";

    // Remove the slide-in-out class after the animation is complete
    setTimeout(() => {
        slides[currentSlideIndex - 1].classList.remove("slide-in-out");
    }, 2000); // Adjust this timing to match your animation duration
}

// Show the first slide when the page loads
showSlides(currentSlideIndex);
let contentIndex = 1; // Initialize with the first content

function plusSlides(n) {
    showContent(contentIndex += n);
}

function currentSlide(n) {
    showContent(contentIndex = n);
}

function showContent(n) {
    let contentContainers = document.getElementsByClassName("content-container");
    let dots = document.getElementsByClassName("dot");

    if (n > contentContainers.length) {
        contentIndex = 1;
    }
    if (n < 1) {
        contentIndex = contentContainers.length;
    }

    for (let i = 0; i < contentContainers.length; i++) {
        contentContainers[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    contentContainers[contentIndex - 1].style.display = "block";
    contentContainers[contentIndex - 1].classList.add("slide-in");
    dots[contentIndex - 1].className += " active";

    setTimeout(() => {
        contentContainers[contentIndex - 1].classList.remove("slide-in");
    }, 1000); // Adjust this timing to match your animation duration
}

// Show the first content when the page loads
showContent(contentIndex);
