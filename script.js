$(document).ready(function(){
    $(".menu-bar").click(function(){
        var menuBtn = $('.menu-bar');

        if (menuBtn.hasClass('fa-bars')) {
            menuBtn.removeClass('fa-bars').addClass('fa-times');
            $('.ul-pointer').css('display', 'block');
        } else {
            menuBtn.removeClass('fa-times').addClass('fa-bars');
            $('.ul-pointer').css('display', 'none');

        }
    });
});