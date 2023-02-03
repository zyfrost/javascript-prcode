document.querySelector("div").onload=diceGame();


function diceGame(randomVariable1,randomVariable2){
var randomVariable1 =Math.random();
randomVariable1 = Math.floor(randomVariable1 * 6)+1;


if(randomVariable1 ==1){
    document.querySelector("img").setAttribute("src" , "images/dice1.png");
}
if(randomVariable1 ==2){
    document.querySelector("img").setAttribute("src" , "images/dice2.png");
}
if(randomVariable1 ==3){
    document.querySelector("img").setAttribute("src" , "images/dice3.png");
}
if(randomVariable1 ==4){
    document.querySelector("img").setAttribute("src" , "images/dice4.png");
}
if(randomVariable1 ==5){
    document.querySelector("img").setAttribute("src" , "images/dice5.png");
}
if(randomVariable1 ==6){
    document.querySelector("img").setAttribute("src" , "images/dice6.png");
}
document.querySelector("div");
var randomVariable2 =Math.random();
randomVariable2 = Math.floor(randomVariable2 * 6)+1;


if(randomVariable2 ==1){
    document.querySelector("img.img2").setAttribute("src" , "images/dice1.png");
}
if(randomVariable2 ==2){
    document.querySelector("img.img2").setAttribute("src" , "images/dice2.png");
}
if(randomVariable2 ==3){
    document.querySelector("img.img2").setAttribute("src" , "images/dice3.png");
}
if(randomVariable2==4){
    document.querySelector("img.img2").setAttribute("src" , "images/dice4.png");
}
if(randomVariable2 ==5){
    document.querySelector("img.img2").setAttribute("src" , "images/dice5.png");
}
if(randomVariable2==6){
    document.querySelector("img.img2").setAttribute("src" , "images/dice6.png");
}


if(randomVariable1 > randomVariable2){
    document.querySelector("h1.result").textContent="Player 1 Wins 😈"
}
if(randomVariable2 > randomVariable1){
    document.querySelector("h1.result").textContent="Player 2 Wins 😈"
}
if(randomVariable2 == randomVariable1){
    document.querySelector("h1.result").textContent="TIE"
}
return randomVariable1 , randomVariable2 ;
}
