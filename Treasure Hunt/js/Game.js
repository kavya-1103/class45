class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerRef=await database.ref('playerCount').once("value");
      if(playerRef.exists()){
        playerCount=playerRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }

  play(){
form.hide();
textSize(20);
text("games start",80,130);

Player.getPlayerInfo();
if(allPlayers!==undefined){
  var y=150


  for(var i in allPlayers){
  
if(i==="player"+player.index){
  fill ("red");
}

else{
  fill ("black")
}


y+=20
textSize(13)
text(allPlayers[i].name+":"+allPlayers[i].distance,80,35)



  }
}

  }
  }
