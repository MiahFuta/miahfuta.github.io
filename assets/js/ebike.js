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

function replaceAge() {
    var now = new Date();
    var past = new Date('1985-02-01');
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var age = nowYear - pastYear;
    return age;
}

$(window).on('load', function () {
    setTimeout(function() {

        $("#age").replaceWith(replaceAge());

    }, 100);
});


function CopyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
}

$('.address').click(function(event) {
    var target = event.target || event.srcElement;
    CopyToClipboard(target.innerHTML);
});

$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-title a').offset().top -20
            }, 500); 
        }
    }); 
});

$(window).on('load', function () {

    setTimeout(function() {

        $('#accordion').on('shown.bs.collapse', function () {
     
            var panel = $(this).find('.collapse.show');
             
            $('html, body').animate({
                scrollTop: panel.offset().top - '86'
            }, 0);
             
        });

    }, 100);
    
});