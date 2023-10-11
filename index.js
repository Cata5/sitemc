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