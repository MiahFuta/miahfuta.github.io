$('input[type=checkbox]').change( function(){
    if (this.checked) {
        $("#menu").css("width", "50px");
    } else {
        $("#menu").css("width", "200px");
    }
});

$(window).on('load', function () {
    $("#menu").css("width", "50px");
});