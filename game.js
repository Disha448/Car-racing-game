class Game{
    constructor(){

    }

    play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        Player.getPlayerinfo()
            if(allPlayers!=undefined){
                var display_position = 130
                var x = 175 , y= 0, index =0
                background("#c68767")
                image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
                for(var plr in allPlayers){
                    index = index+1 
                    x = x+200
                    y = displayHeight - allPlayers[plr].distance
                    cars[index -1].x = x
                    cars[index -1].y = y
                
                    if(index == player.index){
                       cars[index -1].shapeColor = "red"
                       camera.position.x = displayWidth/2
                       camera.position.y = cars[index-1].y
                    }
                    else{
                        fill("black")
                    }
                    display_position = display_position+20
                    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
                }
            }  
            if(keyIsDown(UP_ARROW) && player.index!=null){
                player.distance = player.distance + 50
                player.update()
            } 
            
            if(player.distance>3860){
                gameState=2
            }
            drawSprites()
}
    
    

    getState(){
        var gameStateref = database.ref('gameState')
      gameStateref.on("value",function(data){
          gameState = data.val()
      })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState == 0){
            player = new Player()
            var playercountref1 = await database.ref('playercount').once("value")
            if(playercountref1.exists()){
                playercount = playercountref1.val()
                player.getCount()
            }
           

            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car1.addImage(car1img)
        car2 = createSprite(300,200)
        car2.addImage(car2img)
        car3 = createSprite(500,200)
        car3.addImage(car3img)
        car4 = createSprite(700,200)
        car4.addImage(car4img)
        cars = [car1,car2,car3,car4]
    }
    
    end(){
        console.log("game ended")
    }
}