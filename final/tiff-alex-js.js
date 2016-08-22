
$(document).ready(function(){
    var navigationItems = $('#cd-vertical-nav a'),
        currentDistanceFromTop = 0,
        targetTop = 0;

    var slickOptions = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        pauseOnHover: true,
        adaptiveHeight: false
    };

    //Init carousel
    $('.carousel').slick(slickOptions);

    //---------------------NAVIGATION----------------------//
    updateNavigation();
    $('.parallax').on('scroll', function(){
       updateNavigation();

    });
    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));

    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
        $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selecting an element from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        currentDistanceFromTop = $('.parallax').scrollTop();
    }

    function smoothScroll(target) {
        targetTop = target.offset().top + currentDistanceFromTop;
        $('.parallax').animate(
            {'scrollTop': targetTop},
            1500
        );
        currentDistanceFromTop = $('.parallax').scrollTop();
    }

    //--------------TIMELINE----------------//

    var items = document.querySelectorAll(".timeline li");

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        for (var i = 0; i < items.length; i++) {
            if(isScrolledIntoView(items[i])){
                 items[i].classList.add("in-view");
            }
        }
    }

    function isScrolledIntoView(el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

});

