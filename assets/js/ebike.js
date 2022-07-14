$('.card-body').mouseenter(function () { 
    $('.carousel-control-next-icon').css('display','');
    $('.carousel-control-prev-icon').css('display','');
});

$('.card-body').mouseleave(function () { 
    $('.carousel-control-next-icon').css('display','none');
    $('.carousel-control-prev-icon').css('display','none');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    if(jQuery.browser.mobile) return;
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true
    });
});