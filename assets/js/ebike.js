$('.card-body').mouseenter(function () { 
    $('.carousel-control-next').css('opacity','1');
    $('.carousel-control-prev').css('opacity','1');
    $('.carousel-fullscreen-icon').css('opacity','1');

});

$('.card-body').mouseleave(function () { 
    $('.carousel-control-next').css('opacity','0.5');
    $('.carousel-control-prev').css('opacity','0.5');
    $('.carousel-fullscreen-icon').css('opacity','0.5');

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

function replaceUpdated() {
    var jqxhr = $.getJSON( "https://api.github.com/repos/MiahFuta/miahfuta.github.io/commits?path=ebike.html&page=1&per_page=1", function() {
        console.log( "success" );
    })
    .done(function() {
        var time = jqxhr.responseJSON[0]['commit']['committer']['date'];
        newtime = new Date(time);     
        let hours = newtime.getHours();
        let minutes = newtime.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = hours + ':' + minutes + ' ' + ampm;
        var reply = 'Last Updated: ' + (newtime.getMonth() + '/' + newtime.getDate() + '/' + newtime.getFullYear());
        $("#lastUpdated").html(reply + ' at ' + strTime);
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });
}

$(window).on('load', function () {
    setTimeout(function() {

        $("#age").replaceWith(replaceAge());
        replaceUpdated();

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

$(document).ready(function($) {

    $('.collapse').on('show.bs.collapse', function(e) {
        var $card = $(this).closest('.card');
        var $open = $($(this).data('parent')).find('.collapse.show');
        
        var additionalOffset = 0;
        if($card.prevAll().filter($open.closest('.card')).length !== 0)
        {
              additionalOffset =  $open.height();
        }
        $('html,body').animate({
          scrollTop: $card.offset().top - additionalOffset
        }, 500);
    });

});

$('.scrollToTop').on('click', function(event){
    $(window).scrollTop(0);
});

$('.scrollToTop').mouseenter(function () { 
    $('.scrollToTop').css('opacity','1');
});

$('.scrollToTop').mouseleave(function () { 
    $('.scrollToTop').css('opacity','0.5');
});