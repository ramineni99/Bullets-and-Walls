var thickness,wall;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    
     var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10){
      wall.shapeColor = color(0,255,0);
    }
    if(damage<10){
      wall.shapeColor = color(255,0,0);
    }     
     bullet.collide(wall);
  }
  bullet.collide(wall);
  drawSprites();
}

function hasCollided(bullet,wall){
var bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true; 
}
return false;
}