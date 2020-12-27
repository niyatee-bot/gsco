var car, wall;
var speed, weight;
var carimage;
function preload()
{
carimage= loadImage("transcar.png");
}
function setup() {
  createCanvas(1600,400);
 car= createSprite(200, 200, 50 , 50);
 car.addImage(carimage);
 wall= createSprite(1200, 200, 60 ,100);

 
}

function draw() {
  background("black");  
  car.velocityX = 5;

  speed=Math.round(random(25, 31));
  weight=Math.round(random(400, 1500));

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    
    var deformation=Math.round( 0.5 * weight * speed * speed/22509);
    if(deformation>180)
    
  {
    car.velocityX=0;
    car.shapeColor= "yellow";
    wall.shapeColor= "yellow";
  }
  if(deformation<180 && deformation>100)
  {  
    car.velocityX=0;
    car.shapeColor= "green";  
    wall.shapeColor= "yellow";
  }
  if(deformation<100)
  { 
   car.velocityX=0;  
    car.shapeColor="red";
    wall.shapeColor="yellow";
  } 
  }
  drawSprites();
}