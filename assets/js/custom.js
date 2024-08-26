$(document).ready(function ($) {
    "use strict";





    /* ===================================
       Slider Carousel
    ====================================== */
    if ($(".slider_carousel").length) {
        $(".slider_carousel").owlCarousel({
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 6000,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon fa fa-angle-left"></span>',
                '<span class="icon fa fa-angle-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
            },
        });
    }

    /* ===================================
       Scrollig
    ====================================== */
    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($(".main-header").length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $(".main-header");
            var sticky_header = $(".main-header .sticky-header");
            if (windowpos > 120) {
                siteHeader.addClass("fixed-header");
                sticky_header.addClass("animated slideInDown");
            } else {
                siteHeader.removeClass("fixed-header");
                sticky_header.removeClass("animated slideInDown");
            }
        }
    }
    headerStyle();

    $(window).on("scroll", function () {
        headerStyle();
        OnePageMenuScroll();
        if ($(".scroll-to-top").length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $(".scroll-to-top").fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $(".scroll-to-top").fadeOut(500);
            }
        }
    });



    /* ===================================
       select
    ====================================== */
    $('select').niceSelect();



    /* ===================================
       satisfaction_counter_number
    ====================================== */
    $('.satisfaction_counter_number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    /* ===================================
       accordion_content_box
    ====================================== */
    if ($(".accordion_content_box").length) {
        $(".accordion_content_box").on("click", ".accordion_active_btn", function () {
            var outerBox = $(this).parents(".accordion_content_box");
            var target = $(this).parents(".accordion");

            if ($(this).next(".accordion_details").is(":visible")) {
                //return false;
                $(this).removeClass("accordion_active");
                $(this).next(".accordion_details").slideUp(300);
                $(outerBox).children(".accordion_content_box_li").removeClass("accordion_active_block");
            } else {
                $(outerBox).find(".accordion_content_box_li .accordion_active_btn").removeClass("accordion_active");
                $(this).addClass("accordion_active");
                $(outerBox).children(".accordion_content_box_li").removeClass("accordion_active_block");
                $(outerBox)
                    .find(".accordion_content_box_li")
                    .children(".accordion_details")
                    .slideUp(300);
                target.addClass("accordion_active_block");
                $(this).next(".accordion_details").slideDown(300);
            }
        });
    }

    /* ===================================
       our_work_tab
    ====================================== */
    if ($(".our_work_tab").length) {
        $(".our_work_tab .our_work_tab_btns .our_work_tab_btn_li").on(
            "click",
            function (e) {
                e.preventDefault();
                var target = $($(this).attr("data-tab"));

                if ($(target).hasClass("actve-tab")) {
                    return false;
                } else {
                    $(".our_work_tab .our_work_tab_btns .our_work_tab_btn_li").removeClass(
                        "our_work_active_btn"
                    );
                    $(this).addClass("our_work_active_btn");
                    $(".our_work_tab .p-tabs-content .p-tab").removeClass(
                        "active-tab"
                    );
                    $(target).addClass("active-tab");
                }
            }
        );
    }


    /* ===================================
       our_work_carousel_active
    ====================================== */
    $('.our_work_carousel_active').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });


    /* ===================================
       main_counter
    ====================================== */
    $('.counter_number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    //video_crush_competition magnificPopup
    $('#video_crush_competition').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1',
                },
            },

            srcAction: 'iframe_src',
        }
    });

    //video_experience_us_live magnificPopup
    $('#video_experience_us_live').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1',
                },
            },

            srcAction: 'iframe_src',
        }
    });


    // testimonial_active
    $('.client_say_active').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })



}(jQuery));