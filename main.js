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

        // scrolling animations start (NOT SUPPORTED IN IE)

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

        //initialize tiny slider
        tns({
            container: "#rewind",
            items: 1.1,
            rewind: true,
            swipeAngle: false,
            speed: 400,
            mouseDrag: true,
            arrowKeys: true,
            navPosition: "bottom",

            responsive: {
                350: {
                    items: 1.1,
                },
                390: {
                    items: 1.5,
                },
                500: {
                    items: 2,
                },
                655: {
                    items: 2.5,
                },
                740: {
                    items: 3,
                },
                992: {
                    items: 3.5,
                },
                1050: {
                    items: 4.5,
                },
            },
        });

        tns({
            container: "#summerMoodSlider",
            items: 1,
            swipeAngle: false,
            speed: 400,
            mouseDrag: true,
            arrowKeys: false,
            navPosition: "bottom",
            autoplay: true,
            controls: false,
            nav: false,
            // autoplayButton: true,
        });
        // replace inner html for nex button(carousel)
        $(".tns-controls button:nth-child(2)").html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
        //initialize tiny slider end

        // products switch tabs

        const productsButtons = $("#productsButtons");
        const productItems = $(".product-items");

        // switch active tabs fn
        const switchTab = (btn) => {
            productItems.each((i, item) => {
                $(item).fadeOut();
            });
            $(`[data-trigger="${btn}"]`).fadeIn();
        };

        // turn on active tab on load
        $(productsButtons)
            .children()
            .each(function () {
                if ($(this)[0].classList.contains("active")) {
                    switchTab($(this)[0].id);
                    console.log("=");
                } else {
                    console.log("-");
                }
            });

        // switch tabs on click
        productsButtons.click(function (e) {
            e.preventDefault();
            $(productsButtons)
                .children()
                .each(function () {
                    if ($(this)[0].id == e.target.id) {
                        switchTab($(this)[0].id);
                        $(e.target).addClass("active");
                    } else {
                        $($(this)[0]).removeClass("active");
                    }
                });
        });

        // ============
    })(jQuery);
});
