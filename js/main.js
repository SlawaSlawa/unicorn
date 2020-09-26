'use strict';
$(document).ready(function () {
    // ARTICLES SLIDER
    $('.articles__slider').owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2,

            },
            1156: {
                items: 3,
            }
        }
    });

    $("#articlesSliderNext").click(function () {
        $('.articles__slider').trigger('next.owl.carousel');
    });

    // CLIENTS SLIDER
    $('.clients__slider').owlCarousel({
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 3
            },
            400: {
                items: 4
            },
            600: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });

    $("#clientsSliderNext").click(function () {
        console.log('click');
        $('.clients__slider').trigger('next.owl.carousel');
    });

    // PORTFOLIO SLIDER
    $('.portfolio__slider').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    // MORE SLIDER
    $('.more-news-slider').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    $("#moreSliderNext").click(function () {
        $('.more-news-slider').trigger('next.owl.carousel');
    });

    // SLIDERS END

    // BURGER
    $('.burger').on('click', function () {
        $(this).toggleClass('burger--active');
        $('.header__nav').toggleClass('header__nav--active')
    })
    // BURGER END

    //Плавный переход по якорям
    $('.header__nav a[href^="#"]').click(function () {
        const _href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' }, 1000);
        return false;
    });
    //Плавный переход по якорям END

    // Кнопка наверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            if ($('#btn-up').is(':hidden')) {
                $('#btn-up').css({ opacity: 1 }).fadeIn('slow');
            }
        } else {
            $('#btn-up').stop(true, false).fadeOut('fast');
        }
    });

    $('#btn-up').click(function () { $('html, body').stop().animate({ scrollTop: 0 }, 400); });
    // Кнопка наверх

    // Бегущие цифры

    const animateBlocks = document.querySelectorAll('.animation-start');
    let animationFlag = false;
    let topToAnimation = 200;


    animateBlocks.forEach((item) => {
        window.addEventListener('scroll', function (e) {

            const scrollPage = window.pageYOffset + topToAnimation,
                distanceToElement = item.offsetTop;

            if (scrollPage >= distanceToElement && animationFlag == false) {
                timer('successfulProjects', 110, 10);
                timer('awesomeClients', 25, 10);
                timer('openSourcePlugins', 30, 10);
                timer('openSourceThemes', 13, 10);
                animationFlag = true;
            }
        });
    });

    function timer(elId, num, speed) {
        let count = 0;
        const el = document.getElementById(elId);

        let interval = setInterval(() => {
            el.textContent = count++;
            if (el.textContent == num) {
                clearInterval(interval);
            }
        }, speed);
    }

    // Бегущие цифры END



});

