$(document).ready(function () {
    (function ($) {
        // ============
        // expand mobile menu
        $("#hamburger").click(function (e) {
            e.preventDefault();
            $(".navigation").toggleClass("nav-expand");
            $(this).children().first().toggleClass("fa-bars fa-times");
        });
        // expand search bar
        $("#searchBtn").click(function (e) {
            e.preventDefault();
            $("#searchInput").toggleClass("expanded-search-bar");
        });
        // replace inner html for nex button(carousel)
        $(".tns-controls button:nth-child(2)").html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
        // ============

        // scrolling animations start

        const header = document.querySelector("header");
        const sectionOne = document.querySelector(".fading-container");

        const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide-in");

        const sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px",
        };

        const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    header.classList.add("nav-scrolled");
                } else {
                    header.classList.remove("nav-scrolled");
                }
            });
        }, sectionOneOptions);

        sectionOneObserver.observe(sectionOne);

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px",
        };

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach((fader) => {
            appearOnScroll.observe(fader);
        });

        sliders.forEach((slider) => {
            appearOnScroll.observe(slider);
        });

        // scrolling animations end
    })(jQuery);
});
