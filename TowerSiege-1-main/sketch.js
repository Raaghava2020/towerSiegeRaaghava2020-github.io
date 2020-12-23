const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,boxObject,polygon;
var slingShot,score;

function preload() {
    image(CENTER);
    Image(polygon.png,polygon,polygon.position.x,polygon.position.y,40,40);
    
}

function setup(){
    var canvas = createCanvas(100,200);
    engine = Engine.create();
    world = engine.world;

boxObject1=new box(390,155,30,40);
boxObject2=new box(360,195,30,40);
boxObject3=new box(390,195,30,40);
boxObject4=new box(420,195,30,40);
boxObject5=new box(330,235,30,40);
boxObject6=new box(360,235,30,40);
boxObject8=new box(390,235,30,40);
boxObject9=new box(420,235,30,40);
boxObject10=new box(420,235,30,40);

polygon= bodies.circle(50,20,20);
world.add(world,polygon);

slingShot=new slinShot(this.polygon,{x:100,y:200});
}

function draw(){
 background(backgroundImg);
Engine.update(engine);
noStroke();
textSize(35)
fill("white")
text("SCORE:"+score,750,40);
boxObject1.display();
boxObject2.display();
boxObject3.display();
boxObject4.display();
boxObject5.display();
boxObject6.display();
boxObject7.display();
boxObject8.display();
boxObject9.display();
boxObject10.display();
boxObject1.score();
boxObject2.score();
boxObject3.score();
boxObject4.score();
boxObject5.score();
boxObject6.score();
boxObject7.score();
boxObject8.score();
boxObject9.score();
boxObject10.score();
polygon.display();
line(polygon.body.position.x,polygon.body.position.y,constraintlog.body.position.x,constraintlog.body.position.y)
}





mouseReleased();
mouseDragged();
KeyPressed();

drawSprites();

function mouseDragged(){
     if (gameState!=="launched"){
         Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
     }
}
function mouseReleased(){
    polygon.fly();
    gameState = "launched";
}

function KeyPressed(){
    if(keycode===32){
        slingshot.attach(this.polygon);
    }
    }
