$(window).on('load', function () {
    setTimeout(function() {

        if(jQuery.browser.mobile) {
            $("#menu").css("width", "50px");
            $("#menu").css("opacity", "0.5");

            $('#menu :checkbox').change( function(){
                if (this.checked) {
                    $("#menu").css("width", "50px");
                    $("#menu").css("opacity", "0.5");
                } else {
                    $("#menu").css("width", "100px");
                    $("#menu").css("opacity", "1");
                }
            });
        }

    }, 100);
});