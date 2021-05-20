var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var player1,player2,player3
var allPlayers;
var story;

function preload(){
 player1= loadAnimation ("images/PLAYER1_1.png","images/PLAYER1_2.png","images/PLAYER1_3.png");
 player2 = loadAnimation("images/p2_1.png","images/p2_2.png","images/p2_3.png","images/p2_4.png")
 player3 = loadAnimation ("images/T1.png","images/T2.png","images/T3.png","images/T4.png")
  
 bg=loadImage ("images/aladdin_cave.jpg");
}


function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  database.ref('/').update({
    'playerCount':0,
    'gameState':0
  }
  );
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===3){
  game.update(1)
}
if (gameState===1){
clear()
game.play();

}
}
