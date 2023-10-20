
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
            let dots1 = document.getElementsByClassName("dot1");
            let slides = document.getElementsByClassName("mySlides");
            let slides1 = document.getElementsByClassName("mySlides1");
            if (n > slides.length) {
                currentSlideIndex = 1;
            }
            if (n > slides1.length) {
                currentSlideIndex = 1;
            }
            if (n < 1) {
                currentSlideIndex = slides.length;
                currentSlideIndex = slides1.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < slides1.length; i++) {
                slides1[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            for (i = 0; i < dots1.length; i++) {
                dots1[i].className = dots1[i].className.replace(" active", "");
            }

            // Add the slide-in and slide-out classes to the displayed slide
            slides[currentSlideIndex - 1].classList.add("slide-in");
            slides[currentSlideIndex - 1].style.display = "flex";
            slides1[currentSlideIndex - 1].classList.add("slide-in");
            slides1[currentSlideIndex - 1].style.display = "flex";
            dots[currentSlideIndex - 1].className += " active";
            dots1[currentSlideIndex - 1].className += " active";
        }
        // Show the first slide when the page loads
    showSlides(currentSlideIndex);
