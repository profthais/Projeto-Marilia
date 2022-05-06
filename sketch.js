var PLAY = 1;
var END = 0;
var gameState = PLAY;




var cupImg , cupcorrendoImg , fundoImg ;
var cuphead , fundo , obstacleGroup ;



function preload(){
    cupImg= loadAnimation("frame-01.png","frame-02.png","frame-03.png","frame-04.png","frame-05.png","frame-06.png","frame-07.png","frame-08.png","frame-09.png","frame-10.png","frame-11.png","frame-12.png", "frame-13.png", "frame-14.png", "frame-15.png", "frame-16.png");
    cupmorrendoImg = loadImage("cuphead-removebg-preview.png");
    fundoImg = loadImage ("fundo.jpg");
    obstacleImg = loadImage ("obstacle-removebg-preview.png");
}

function setup() {
    createCanvas(1000,742);
  
  fundo= createSprite(1000/2,742/2);
  fundo.addImage(fundoImg);
  fundo.velocityX = -1;                                        
  
  cuphead = createSprite(100,480);
  cuphead.scale = 0.3;
  cuphead.addAnimation("correndo",cupImg);
  

  obstacle = createSprite(200,10);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
 

  obstaclesGroup = new Group(); //prof: grupo = new Group()
}

function draw() {
  
  if(obstaclesGroup.isTouching(cuphead)){
    obstacleGroup.setVelocityEach();
    cuphead.addImage(cupmorrendoImg);
    gameState = END;
  }

  if(gameState === PLAY){
    if(fundo.x > 1000 ){
      fundo.x = 900 ;
      }
      if(keyDown("space")) {
        cuphead.velocityY = -2;
        }
      }

if(gameState === END){

} //prof
 







 drawSprites();

} //prof
function obstacle(){

  if (frameCount % 240 === 0) {
    var obstacle = createSprite(300,200);
    obstacle.velocityX = 3;
    obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle);
  obstacleGroup.lifetime = 100;
    }
  }



