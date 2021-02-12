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

    })(jQuery);
});
