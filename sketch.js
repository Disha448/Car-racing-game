var hypnoticBall, database;
var position;
var gameState = 0;
var playercount;
var form,player,game;
var allPlayers;
var cars , car1 , car2 , car3, car4;
var car1img,car2img,car3img,car4img,trackimg;


function preload(){
  trackimg = loadImage("track.jpg")
  car1img = loadImage("car1.png")
  car2img = loadImage("car2.png")
  car3img = loadImage("car3.png")
  car4img = loadImage("car4.png")

}

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight - 30)
 // console.log(database);
 
  game = new Game()
  game.getState()
  game.start()

  
}

function draw(){
 if(playercount==4){
   game.update(1)
 }
 if(gameState==1){
  clear()
  game.play()
 }
 if(gameState==2){
    game.end()
 }
  
   
}





