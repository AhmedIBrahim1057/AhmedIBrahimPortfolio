$(document).ready(function(){

    $('.bars').on('click', function(){
        $('.menu').slideToggle();
    });

    $(window).on('scroll',function(){
        if($(this).scrollTop()>500)
        {
            $("nav").addClass("scrolled");
        }
        else
        {
            $("nav").removeClass("scrolled");
        }
    });

    AOS.init({
        delay: 100,
        duration: 1000
    });

});