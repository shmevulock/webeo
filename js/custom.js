/**
Company : Companyname
File    : custom.js
Version : 1.0
**/



/*************------------------------------


 JS INDEX
    ===================


    1. Sticky Header
    2. Parallax
    3. Mobile Menu
    4. Counter
    5. Portfolio


------------------------------*************/
(function ($) {
    "use strict";


    /****---- Sticky Header Start ----****/

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >=220) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
    
    function mainmen() {
        if ($(window).width() < 991) {
            $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >=163) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
        }
    }
  

               
    /****---- Sticky Header End ----****/


    /****---- Parallax Start ----****/


    $(document).ready(function () {
        $('#counter').parallax("50%", 0.1);
        $('#client').parallax("50%", 0.1);
        $('#services-counter').parallax("50%", 0.1);
        $('#member').parallax("50%", 0.1);
        $('#work-status').parallax("50%", 0.1);
        $('#portfolio').parallax("50%", 0.1);
        $('#services').parallax("50%", 0.1);
    });


    /****---- Parallax End ----****/


    /****---- Menu Start ----****/

    /*--------------- SMARTMENU ---------------*/
    $('#main-menu').smartmenus({
        mainMenuSubOffsetX: -1,
        mainMenuSubOffsetY: 4,
        subMenusSubOffsetX: 6,
        subMenusSubOffsetY: -6
    });

    /*--------------- SMARTMENUS MOBILE MENU TOGGLE BUTTON ---------------*/
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
        // animate mobile menu
        $mainMenuState.on('change', function () {
            var $menu = $('#main-menu');
            if (this.checked) {
                $menu.hide().slideDown(250, function () {
                    $menu.css('display', '');
                });
            } else {
                $menu.show().slideUp(250, function () {
                    $menu.css('display', '');
                });
            }
        });
        // hide mobile menu beforeunload
        $(window).on('bind', 'beforeunload unload', function () {
            if ($mainMenuState[0].checked) {
                $mainMenuState[0].click();
            }
        });
    }
    $(function () {
        // use the whole parent item as sub menu toggle button
        $('#main-menu').bind('click.smapi', function (e, item) {
            var obj = $(this).data('smartmenus');
            if (obj.isCollapsible()) {
                var $sub = $(item).dataSM('sub');
                if ($sub && $sub.is(':visible')) {
                    obj.menuHide($sub);
                    return false;
                }
            }
        });
    });


    /*--------------- navigation menu---------------*/
    function mainmenu() {
        if ($(window).width() < 992) {
            $('.navbar .dropdown-item').on('click', function (e) {
                var $el = $(this).children('.dropdown-toggle');
                var $parent = $el.offsetParent(".dropdown-menu");
                $(this).parent("li").toggleClass('open');

                if (!$parent.parent().hasClass('navbar-nav')) {
                    if ($parent.hasClass('show')) {
                        $parent.removeClass('show');
                        $el.next().removeClass('show');
                        $el.next().css({
                            "top": -999,
                            "left": -999
                        });
                    } else {
                        $parent.parent().find('.show').removeClass('show');
                        $parent.addClass('show');
                        $el.next().addClass('show');
                        $el.next().css({
                            "top": $el[0].offsetTop,
                            "left": $parent.outerWidth() - 4
                        });
                    }
                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
                $(this).find('li.dropdown').removeClass('show open');
                $(this).find('ul.dropdown-menu').removeClass('show open');
            });
        }
    }
    mainmenu()


    /****---- Menu End ----****/


    /****---- Counter Start ----****/


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /****---- Counter End ----****/

     /****---- WHATSAPP WINDOW AND MOVILE START ----****/
    function mainmenu() {
var ba=['nokia','iphone','blackberry','sony','lg',
'htc_tattoo','samsung','symbian','SymbianOS','elaine','palm',
'series60','windows ce','android','obigo','netfront',
'openwave','mobilexplorer','operamini'];
    var b, ua=navigator.userAgent.toLowerCase();
    for(var i=0; i <ba.length; i++){
        if(ua.indexOf(ba[i]) > -1){
            b=ba[i];
            break;
        }
    }
    if(b=='nokia' || b=='iphone' || b=='blackberry' || b=='sony' || b=='lg' || b=='htc_tattoo' || b=='samsung' || b=='symbian' || b=='SymbianOS' || b=='elaine' || b=='palm' || b=='series60' || b=='windows ce' || b=='android' || b=='obigo' || b=='netfront' || b=='openwave' || b=='mobilexplorer' || b=='operamini'){
       $("#whatsend").attr("href","https://api.whatsapp.com/send?l=es&phone=51963988161&text=¡Hola!,%20me%20gustaría%20cotizar%20un%20producto.");
    }else{
       $("#whatsend").attr("href","https://web.whatsapp.com/send?l=es&phone=51963988161&text=¡Hola!,%20me%20gustaría%20cotizar%20un%20producto.");
    }
    }
    /****---- WHATSAPP WINDOW AND MOVILE END ----****/

    /****---- Portfolio Start ----****/

    $('#portfolio').imagesLoaded(function () {
        $('.portfolio-gallary').isotope({
            itemSelector: '.port-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.port-item'
            }
        });

        $('.portfolio-sort ul li').on("click", function () {
            $('.portfolio-sort ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.portfolio-gallary').isotope({
                filter: selector
            });
            return false;
        });


         $('.blog-isotope').imagesLoaded(function () {
    var $blogisotope = $('.blog-isotope').isotope({
        itemSelector: '.blog-iso-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.blog-iso-item'
        }
    });
});


    });


    /****---- Portfolio End ----****/


})(jQuery);

