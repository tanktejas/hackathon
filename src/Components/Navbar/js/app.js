(function ($) {
    "use strict";

    aosInit();

    $(window).on('scroll', function () {
        stickyHeader();
        scrollToTop();
    })

    $(document).ready(function () {
        disableBodyScroll();
        videoWrapper();
        videoSoundToggle();
        smoothScroll();
        backgroundColor();
        jsCounter();
        masonaryFilter();
        testimonialCarousel();
        serviceCarousel();
        partnerCarousel();
        workCarousel();
    })

    $(window).on('load', function () {
        isotopeInit();
        magnificPopup();
    })

    // AOS init
    function aosInit() {
        AOS.init({
            duration: 700,
            easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            once: true,
            startEvent: "load"
        })
    }

    // stickyHeader init
    function stickyHeader() {
        var sticky = $('.grip-header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    }

    // scrollToTop init
    function scrollToTop() {
        if ($(window).scrollTop() >= 500) {
            $('.scroll-top').addClass('show');
        } else {
            $('.scroll-top').removeClass('show');
        }
    }

    // disableBodyScroll init
    function disableBodyScroll() {
        var vScrollWidth = window.innerWidth - $(document).width();        
        function noBodyScroll() {
            $('body').css({
                'padding-right' : vScrollWidth+'px',
                'overflow-y' : 'hidden'
            })
        }
        function doBodyScroll() {
            setTimeout(function(){
            $('body').css({
                'padding-right' : 0,
                'overflow-y' : 'auto'
            }) },200)
        }
        var navbarToggler = $('.navbar-toggler');
        $(navbarToggler).on('click', function(){
            if(navbarToggler.attr('aria-expanded') == 'false') {
                noBodyScroll();
            }
            if(navbarToggler.attr('aria-expanded') == 'true') {
                doBodyScroll();
            }
        })
    }

    // Inline videoWrapper Init
    // function videoWrapper() {
    //     $('.popup-video').on('mouseenter', function() {
    //         $('.video-wrapper').addClass('open-video')
    //     })
    //     $('.popup-video').on('mouseleave', function() {
    //         $('.video-wrapper').removeClass('open-video')
    //     })
    // }

    // videoSoundToggle Init
    // function videoSoundToggle() {
    //     $('.html5-video video').prop('muted', true)
    //     $('.sound-control svg').on('click', function (){
    //         if( $('.html5-video video').prop('muted') ) {
    //             $('.html5-video video').prop('muted', false)
    //         } else {
    //         $('.html5-video video').prop('muted', true)
    //         }
    //     });
    //     $('.volume-up').hide()
    //     $('.sound-control').on('click', function(){
    //         $('.volume-up').toggle()
    //         $('.volume-mute').toggle()
    //     })
    // }

    // Smooth-Scroll init
    function smoothScroll() {
        var scrollLink = $('.scroll-to-anim');
        scrollLink.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 100
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        })
    }

    // // Inline BackgroundColor Init
    function backgroundColor() {
        $('[data-bgc]').each(function () {
            var color = $(this).attr('data-bgc')
            $(this).css({
                'background-color': color
            })
        })
    }

    // jsCounter init
    function jsCounter() {
        $('.js-counter').appear(function() {
            var count = $(this);
            count.countTo({
                from: 0,
                to: count.html(),
                speed: 1200,
                refreshInterval: 60
            })
        })
    }

    // mesonary-filter init
    function masonaryFilter() {
        var $masonaryFilter = $('.mesonary-filter');
        $masonaryFilter.isotope();
        $('.work-filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $masonaryFilter.isotope({
                filter: filterValue
            });
            $(this).addClass('active').siblings().removeClass('active');
        })
    }

    // isotope init
    function isotopeInit() {
        var $mesonaryInit = $('.mesonaryInit').isotope();
        $mesonaryInit.imagesLoaded().progress( function() {
            $mesonaryInit.isotope('layout');
        })
    }

    // magnificPopup Init
    function magnificPopup() {
        $('.zoom-image').magnificPopup({
            delegate: '.zoom-image-item',
            type: 'image',
            removalDelay: 200,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            gallery: {
                enabled: !0
            },
            image: {
                verticalFit: !0
            },
            closeOnContentClick: true,
            midClick: true 
        })
        if ($('.popup-video').length > 0) {
            $('.popup-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 200,
                preloader: true,
                fixedContentPos: true,
            })
        }
    }

    // TestimonialCarousel Init
    function testimonialCarousel() {
        $('.testimonial-carousel').flickity({
            cellAlign: 'center',
            prevNextButtons: false,
            contain: true,
            groupCells: true,
            wrapAround: true
        })
    }

    // serviceCarousel Init
    function serviceCarousel() {
        $('.service-carousel').flickity({
            cellAlign: 'left',
            prevNextButtons: false,
            pageDots: false,
            freeScroll: true,
            contain: true
        })
    }

    // partnerCarousel Init
    function partnerCarousel() {
        $('.partner-carousel').flickity({
            cellAlign: 'left',
            prevNextButtons: false,
            pageDots: false,
            freeScroll: true,
            contain: true,
            autoPlay: true,
            wrapAround: true,
            pauseAutoPlayOnHover: false
        })
    }

    // workCarousel Init
    function workCarousel() {
        $('.work-carousel').flickity({
            cellAlign: 'left',
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true
        })
    }

})(jQuery);
