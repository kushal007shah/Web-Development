var a = Math.floor((Math.random()*100)%6);
var b = Math.floor((Math.random()*100)%6);
// Loading all image locations in an array
var imgsrc = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//Query selector , add an image source to the img tag we had in html
document.querySelector(".img1").src =imgsrc[a];
document.querySelector(".img2").src =imgsrc[b];
if(a>b){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}
else if(a===b){
  document.querySelector("h1").innerHTML = "It's a Tie!!!";
}
else{
document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}
document.querySelector("h1").style.fontSize = "5rem";
