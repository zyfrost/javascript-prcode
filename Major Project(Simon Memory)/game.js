
buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern =[];
var level = 0;
var started =false;


//gives a random number from 0 to 3 ;
function nextSequence() {

    level++;

  
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber]; //selects a random color fron buttonColors array
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);


    
    playsound(randomChosenColor);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
   

 


}


//create function and remember clicks
  


function playsound(name){

    $(".btn").click(function () {

        var audio = new Audio("sounds/" + name + ".mp3");
         audio.play();
    });
    
}

   




//to select and deselect the gray color 
function animatepress(){

    $(".btn").click(function(){


        $(this).addClass("pressed").attr("id");
    setInterval(() => {
        $(this).removeClass("pressed").attr("id");
      }, 100);
   

    

})
    
}
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id"); 
    
    userClickedPattern.push(userChosenColor); 
    
    playsound(userChosenColor);
    animatepress(userChosenColor);

});


$(document).keypress(function() {
    if (!started) {
  
      
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  

  
 

 