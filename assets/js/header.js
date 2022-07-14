$(function(){
    $("div[data-includeHTML]").each(function () {                
        $(this).load("imports/" + $(this).attr("data-includeHTML"));
    });
});