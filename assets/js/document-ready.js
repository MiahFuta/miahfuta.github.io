$(window).on('load', function () {

    setTimeout(function() {

        if(window.location.href.indexOf("?") > -1) {
            alert(window.location.href);
        }

        // $("#menu").css("width", "50px");
        // $("#menu").css("opacity", "0.5");

    }, 100);

});