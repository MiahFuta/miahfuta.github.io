

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
        theBigPause();
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
                    $("#lastUpdated").html('Page Last Updated: ' + theDate + ' at ' + theTime + ' EST.');
                } else {
                    $("#lastUpdated").replaceWith('');
                }
            }
        },
        beforeSend: setHeader
    });
    function setHeader(xhr) {
        // Set Auth Token ((( No Scopes are Included! Only Public Data can be seen! ))) See all this extra work I have to do to prevent GitHub from removing this commit? SMH
        var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX192ftdxDA8VoGKYES4tRYAyNamYRDo8E5++AFTa4SryvRFcpzBv2oSkOlbmQjqufhj40lq199I52g==', '89bf3c5c60535aebc9b9cdb5d935ac1a');
        xhr.setRequestHeader('Authorization','token ' + bytes.toString(CryptoJS.enc.Utf8));
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

// Start Video Carousel
const videos = [];
const tag = document.createElement("script");
const firstScriptTag = document.getElementsByTagName("script")[0];

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube wants this function, don't rename it
function onYouTubeIframeAPIReady() {
  const slides = Array.from(document.querySelectorAll(".carousel-item"));
  slides.forEach((slide, index) => {
    // does this slide have a video?
    const video = slide.querySelector(".video-player");
    if (video && video.dataset) {
      const player = createPlayer({
        id: video.id,
        videoId: video.dataset.videoId,
      });
      videos.push({ player, index });
    }
  });
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    videoId: playerInfo.videoId,
    playerVars: {
      showinfo: 0,
    },
  });
}

function theBigPause() {
  videos.map((video) => video.player.pauseVideo());
}

$(function () {
  $(".carousel").on("slide.bs.carousel", function (e) {
    theBigPause();
    const next = $(e.relatedTarget).index();
    const video = videos.filter((v) => v.index === next)[0];
    if (video) {
    //   video.player.playVideo();
    }
  });
});
// End Video Carousel

// Start Fix Dono for Mobile
$(window).on('load', function () {
    if (jQuery.browser.mobile) {
        $('div.donoQR').replaceWith('');
        $('div.donoName').css('margin-right', '0px');
        $('.fa-solid.fa-arrow-down').css('padding-right', '0px');
    }
});
// End Fix Dono for Mobile