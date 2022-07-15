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
        });
        
        $("#menu").on("mouseleave", function () {
            $("#menu").css("opacity", "0.5");
        });

        $(window).click(function() {
            $('input#collapse').prop("checked", true);
        });
        
        $('#menu').click(function(event) {
            event.stopPropagation();
        });

    }, 100);
});