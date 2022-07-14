$(function(){
    // $("#includeMenu").load("menu.html");
    $("div[data-includeHTML]").each(function () {                
        $(this).load($(this).attr("data-includeHTML"));
    });
});