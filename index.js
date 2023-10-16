function redirectToPage(url) {
    window.location.href = url;
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        // Calculate the Y-coordinate of the section
        const sectionY = section.getBoundingClientRect().top + window.scrollY+20;

        // Scroll smoothly to the section
        window.scrollTo({
            top: sectionY,
            behavior: "smooth"
        });
    }
}
let slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}