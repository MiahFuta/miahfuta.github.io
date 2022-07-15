$(window).on('load', function () {
    setTimeout(function() {

        $("#menu").css("opacity", "0.5");

        $('#menu :checkbox').change( function(){
            if (this.checked) {
                $("#menu").css("opacity", "0.5");
            } else {
                $("#menu").css("opacity", "1");
            }
        });

        $("#menu").on("mouseover", function () {
            $("#menu").css("opacity", "1");
            // $('input#collapse').prop("checked", false);
        });
        
        $("#menu").on("mouseleave", function () {
            $("#menu").css("opacity", "0.5");
            // $('input#collapse').prop("checked", true);
        });

    }, 100);
});