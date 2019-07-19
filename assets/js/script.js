$(function(){
    $("#aboutme").show();
    $("#portfolio").hide();
    $("#contactme").hide();
    // $("#firstdiv").show();

    $("#head3").click(function() {
        $("#aboutme").fadeIn();
        $("#portfolio").hide();
        $("#contactme").hide();
        // $("#firstdiv").hide();
    })

    $("#head4").click(function() {
        $("#aboutme").hide();
        $("#portfolio").fadeIn();
        $("#contactme").hide();
        // $("#firstdiv").hide();
    })

    $("#head5").click(function() {
        $("#aboutme").hide();
        $("#portfolio").hide();
        $("#contactme").fadeIn();
        // $("#firstdiv").hide();
    })

})
