// $(window).on('load', function () {

//     setTimeout(function() {

        // $("#menu").css("width", "50px");
        // $("#menu").css("opacity", "0.5");

        $('#menu :checkbox').change( function(){
            if (this.checked) {
                $("#menu").css("width", "50px");
                $("#menu").css("opacity", "0.5");
            } else {
                $("#menu").css("width", "100px");
                $("#menu").css("opacity", "1");
            }
        });

        $("#menu").on("mouseover", function () {
            $("#menu").css("opacity", "1");
        });

        $("#menu").on("mouseleave", function () {
            if ( $('input#collapse').is(':checked') ) {
                $("#menu").css("opacity", "0.5");
            }
        });

//     }, 100);

// });