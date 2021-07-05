$(document).ready(function() {
    var x = document.getElementById("img3").alt;
    $('#img1').click(function() {
        $(this).attr("src", $(this).attr("alt-pic"));
    });
    $('#img2').click(function() {
        $(this).attr("src", $(this).attr("alt-pic"));
    });
    $('#img3').click(function() {
        $(this).attr("src", $(this).attr("alt-pic"));
    });

});