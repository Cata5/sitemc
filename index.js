







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
