class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('GameState');
        gameStateRef.on("value", function (data) {
            GameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            GameState: state
        });
    }
    async start() {
            if (GameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('PlayerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = PlayerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                
                 drawSprites();
                 for(var plr in allPlayers){
                    var index =0;
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;

                    
                     
                     players[index -1].x =mouseX;
                     players[index - 1].y = y;
                       players[index].visible=false;
  
                    
                         textSize(25);
                         fill("white");
                         text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
                        text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                 
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                      for(var i = 0; i< fruitGroup.length;i++){
                          if(fruitGroup.get(i).isTouching(players)){
                            fruitGroup.get(i).destroy();
                            player.score =player.score+1;
                            player.update();
                          }
                       
                      }
                            
                        
                  }
               
    }

    end(){
       console.log("Game Ended");
    }
}
