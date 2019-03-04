$("#first").hide();
$("#second").hide();
$("#third").hide();
$("#forth").hide();
$("#res").hide();
$("#zeroa").hide();
$("#starts").hide();
$("#math").hide();
$("#answer").hide();
$("#res").hide();
$("#puz").hide();
$(".trap").hide();
$(".rec").hide();
$(".star").hide();
$("#riddle").hide();
$("#final").hide();
$("#name").hide();
$("#end").hide();
$("#die").hide();
$("#dies").hide();
$("#return").hide();

$(".alia").one('click', function(){
   $("#first").text("Alien: How DARE you intrude our planet!!!");  
   $("#first").show();
   $("#zero").hide();
   $("#zeroa").show();
});

$("#first").click(function(){
    $("#second").text("Human: We are space explorers from Earth and are here to colonize this planet.");
    $("#second").show();
    $("#first").hide();
});

$("#second").click(function(){
    $("#third").text("Alien: This is a planet of high intelligence, if you wish to conquer us, you must pass three test to prove your skill. But if you fail in any of the test, you DIE!!!");
    $("#third").show();
    $("#second").hide();
});
$("#third").click(function(){
    $("#forth").text("Human: No problem, I will accept your challenge.");
    $("#forth").show();
    $("#third").hide();
    $("#starts").show();
    $("#starts").text("START!!!");
});
$("#starts").click(function(){
    $(".main").hide();
    $(".alia").hide();
    $("#zeroa").hide();
    $("#starts").hide();
    $("#forth").hide();
    $("#math").show();
    $("#math").text("14y+21*2=2y+120");
    $("#answer").show();
    $("#res").show();
});    

var answer="6.5";
$("#res").click(function(){
    if($("#answer").val()===answer){
    $("#math").hide();
    $("#puz").text("Select the odd one out");
    $("#puz").show();
    $("#answer").hide();
    $("#res").hide();
    $(".rec").show();
    $(".star").show();
    $(".trap").show();
}
    if($("#answer").val()!==answer){
    $("#dies").fadeIn();
    $("#die").text("YOU DIED...");
    $("#die").show();
    $("#answer").hide();
    $("#res").hide();
    $("#math").hide();
}
});
$(".rec").click(function(){
    $(".star").hide();
    $(".alia").hide();
    $(".trap").hide();
    $(".rec").hide();
    $("#puz").hide();
    $("#die").text("YOU DIED...");
    $("#die").show();
    $("#dies").fadeIn();
});  
$(".trap").click(function(){
    $(".star").hide();
    $(".alia").hide();
    $(".trap").hide();
    $(".rec").hide();
    $("#puz").hide();
    $("#die").text("YOU DIED...");
    $("#die").show();
    $("#dies").fadeIn();
}); 
$(".star").click(function(){
    $(".star").hide();
    $(".rec").hide();
    $(".trap").hide();
    $("#puz").hide();
    $("#riddle").show();
    $("#riddle").text("What belongs to you but others use it more than you do? (type in lower case)");
    $("#name").show();
    $("#end").show();
});
    
var answer2="your name";
$("#end").click(function(){
    if($("#name").val()===answer2){
        $(".main").show();
        $(".alia").show();
        $("#final").show();
        $("#final").text("Alien:Uggh...You have proven yourself worthy to be our ruler.");
        $("#name").hide();
        $("#riddle").hide();
        $("#end").hide();
        $("#return").text("Head back to main page");
        $("#return").show();
}
    if($("#name").val()!==answer2){
    $("#dies").fadeIn();
    $("#die").text("YOU DIED...");
    $("#die").show();
    $("#name").hide();
    $("#riddle").hide();
    $("#end").hide();
}
});
    