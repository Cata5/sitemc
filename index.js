
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

            // Add the slide-in and slide-out classes to the displayed slide
            slides[currentSlideIndex - 1].classList.add("slide-in");
            slides[currentSlideIndex - 1].style.display = "flex";
            dots[currentSlideIndex - 1].className += " active";

            // Remove the slide-in class after the animation is complete
            setTimeout(() => {
                slides[currentSlideIndex - 1].classList.remove("slide-in");
            }, 2000); // Adjust this timing to match your animation duration
        }

        // Show the first slide when the page loads
        showSlides(currentSlideIndex);