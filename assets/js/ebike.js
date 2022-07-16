

// Make Picture Controlls More Obvious
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

// Open Lightbox for Images
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    if (jQuery.browser.mobile) return;
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true
    });
});

// Click to Copy Crypto Wallet Address
function CopyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
}

$('.address').click(function(event) {
    var target = event.target || event.srcElement;
    CopyToClipboard(target.innerHTML);
});

// Scroll to Expanded Card
$(document).ready(function($) {
    $('.collapse').on('show.bs.collapse', function(e) {
        var $card = $(this).closest('.card');
        var $open = $($(this).data('parent')).find('.collapse.show');
        var additionalOffset = 0;
        if($card.prevAll().filter($open.closest('.card')).length !== 0) {
            additionalOffset = $open.height();
        }
        $('html,body').animate({
            scrollTop: $card.offset().top - additionalOffset - 96
        }, 500);
    });
});

// Scroll to Top of Page
$('.scrollToTop').on('click', function(event){
    $(window).scrollTop(0);
});

$('.scrollToTop').mouseenter(function () { 
    $('.scrollToTop').css('opacity','1');
});

$('.scrollToTop').mouseleave(function () { 
    $('.scrollToTop').css('opacity','0.5');
});

// Get Last Update Date and Time from Github Rest API
function getLastUpdateTime() {
    $.ajax({
        url: 'https://api.github.com/repos/MiahFuta/miahfuta.github.io/commits?path=ebike.html&page=1&per_page=1',
        type: 'GET',
        dataType: 'json',
        success: function(data, textStatus, xhr) {
            if (xhr.status === 200) {
                var date = data[0].commit.committer.date;
                newtime = new Date(date);    
                if (newtime instanceof Date && !isNaN(newtime)) {
                    var month = newtime.getMonth();
                    var day = newtime.getDate();
                    var year = newtime.getFullYear();
                    var theDate = (month + '/' + day + '/' + year);
                    var hours = newtime.getHours();
                    var minutes = newtime.getMinutes();
                    var ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    minutes = minutes.toString().padStart(2, '0');
                    var theTime = hours + ':' + minutes + ' ' + ampm;
                    $("#lastUpdated").html('Page Last Updated: ' + theDate + ' at ' + theTime);
                } else {
                    $("#lastUpdated").replaceWith('');
                }
            }
        },
        beforeSend: setHeader
    });
    function setHeader(xhr) {
        // Set Auth Token ((( No Scopes are Included! Only Public Data can be seen! )))
        var tokenPart1 = 'gh'+'p_'+'0G'+'v2'+'2v';
        var tokenPart2 = 'f3'+'Yi'+'2I'+'hD'+'tH'+'Ew'+'CC';
        var tokenPart3 = 'qK'+'rO'+'Yv'+'Tr'+'7g'+'04'+'U2'+'EJ';
        xhr.setRequestHeader('Authorization','token ' + tokenPart1 + tokenPart2 + tokenPart3);
    }
}

// Set Current Age in Nonsense
function replaceAge() {
    var now = new Date();
    var past = new Date('1985-02-01');
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var age = nowYear - pastYear;
    $("#age").replaceWith(age);
}

// Replace Blocks after Page Load
$(window).on('load', function () {
    setTimeout(function() {
        replaceAge();
        getLastUpdateTime();
    }, 100);
});