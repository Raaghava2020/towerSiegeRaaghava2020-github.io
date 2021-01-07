const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,polygon,polygon_img;
var slingShot,score,ground,stand1,stand2;
var gameState,block;

function preload() {
   // imageMode(CENTER);
  polygon_img=loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Box(300,275,30,40);
  console.log(block1);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);

polygon= Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot=new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
 background("green");
Engine.update(engine);
noStroke();
textSize(35)
fill("white")
text("SCORE:"+score,750,40);
strokeWeight(2);
  stroke(15);
  ground.display();
stand1.display();
stand2.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  block8.display();
  block9.display();
  block10.display();

fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
slingShot.display();
block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
}


function mouseDragged(){
   
         Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY})
}
function mouseReleased(){
    slingShot.fly();
   
}

function keyPressed(){
    if(keycode===32){
        slingShot.attach(this.polygon);
    }
    }
