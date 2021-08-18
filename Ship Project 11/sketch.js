var ship; 
var shipImg1;
var sea;
var seaimage; 

function preload(){
seaimage = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
createCanvas(400,400);
 sea = createSprite (200,200,200,200);
 sea.addImage(seaimage);
 sea.scale = 0.3;
 ship = createSprite (130,200,30,30);
 ship.addAnimation("moving",shipImg1);
 ship.scale = 0.3; 
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  if (sea.x < 0) {
    sea.x = sea.width/8;
  }
  drawSprites();
}