var car;
var wall;
var speed, weight;
var def,fulldef;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
  car.shapeColor="purple";
  wall.shapeColor="black"
  car.depth=wall.depth+1;
}

function draw() {
  background(255,255,255);
  
  if(car.x-wall.x<=car.width/2+wall.width/2 
    && wall.x-car.x<=car.width/2+wall.width/2){
      car.velocityX=0;
      def=0.5*weight*speed*speed/22500;
      if(def<=100){
        car.shapeColor="green";
        fulldef="Good"
      }
      else if(def>100&&def<180){
        car.shapeColor="yellow";
        fulldef="Average"
      }
      else if(def>180){
        car.shapeColor="red";
        fulldef="Lethal"
      }
      fill("black");
      textSize(20)
      text("Weight: "+Math.round(weight)+"\nSpeed: "+Math.round(speed)+"\nDeformation: "+fulldef,800,200)
    }  
  drawSprites();
}