var hamburger = $('.hamburger-menu');
var ham_btn = $('.fa-bars');
var close_btn = $('.close');
ham_btn.click(
    function(){
        hamburger.addClass('active')
    }
);

close_btn.click(
    function(){
        ham_btn.removeClass('active')
    }
);
