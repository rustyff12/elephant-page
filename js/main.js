document.addEventListener("DOMContentLoaded", function () {
    var parallaxSections = document.querySelectorAll('[data-parallax="scroll"]');
    
    function updateParallax() {
        parallaxSections.forEach(function (section) {
            var scrollPosition = window.scrollY;
            var translateY = scrollPosition * 0.7; // You can adjust the speed

            section.style.backgroundPosition = 'center ' + translateY + 'px';
        });
    }

    // Attach event listener to window scroll
    window.addEventListener("scroll", updateParallax);

    // Initial update
    updateParallax();
});