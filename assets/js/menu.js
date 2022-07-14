$("#menu").on("mouseover", function () {
    $("#menu").css("opacity", "1");
});

$("#menu").on("mouseleave", function () {
    if ( $('input#collapse').is(':checked') ) {
        $("#menu").css("opacity", "0.5");
    }
});