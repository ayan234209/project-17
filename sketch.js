var monkey, monkey_Image;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;


var score;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600, 600);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);

  monkey.scale = 0.1;
  
   Ground = createSprite(410, 360, 900, 10);
Ground.shapeColor=("peach");
 Ground.visible =true;
  
monkey.debug=true;
  
  score=0;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("peachpuff");
 
stroke("white");
    textSize(20);
  fill("white");
  text("score:"+score,260,34);
  //console.log("hi")

  
 monkey.velocityY =monkey.velocityY + 0.8
monkey.collide(Ground);
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    score=0;
  }
  
  
  
 obstacles();
  fruits(); 
  //console.log(FoodGroup)
  console.log(score)
if(FoodGroup.isTouching(monkey)){
  FoodGroup.destroyEach();
   score=score+1;
}
 

    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
 
  drawSprites();

}

function fruits() {
  if (frameCount % 80 === 0) {
    banana = createSprite(388, 266, 20, 20);
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    banana.y = Math.round(random(210,270));
    banana.velocityX = -4;
    banana.lifetime = 100;
   FoodGroup.add(banana);
  }
}
function obstacles(){
   if (frameCount % 300 === 0) {
  var obstacle=createSprite(650,340,20,20);
    obstacle.addImage(obstaceImage);
      obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);
     obstacle.debug=true;
   }
}


