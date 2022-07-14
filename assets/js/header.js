$(function(){
    // $("#includeMenu").load("menu.html");
    $("div[data-includeHTML]").each(function () {                
        $(this).load("imports/" + $(this).attr("data-includeHTML"));
    });
});