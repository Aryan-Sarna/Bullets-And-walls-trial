var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(800,400);
 
  wall = createSprite(600,200,60,100)
  wall.shapeColor=color("blue")
  bullet = createSprite(200,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor=color("white")

  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)




 
}



function draw() {
  background("black");
   drawSprites();
   if(wall.x-bullet.x<(car.width+wall.width)/2)
  {
  bullet.velocityX=0;
  var deformation=0.5 *weight*speed*speed/22509;
  
  
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color("green");
    wall.shapeColor=color("white");
  }
  if(deformation<100){
  bullet.shapeColor=color("red");
  wall.shapeColor=color("white");
  }
  }
}