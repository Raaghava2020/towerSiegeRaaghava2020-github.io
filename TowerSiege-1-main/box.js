class Box   {
    constructor(x, y, width, height){
      var options={
        restitution:0.4,
        friction:0.0
      }
      this.Visibility=255;
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);

    } 
    
   
   score(){
    if (this.Visiblity < 0 && this.Visiblity > -150){
      score++;
    }
  }
    display()
    {
      if(this.body.speed<3)
      {
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER); 
rect(0,0,this.width,this.height);
      }
      else{
World.remove(world,this.body);
push();
this.Visibilty=this.Visibilty-5;
pop();
      }
    }
  

  }
