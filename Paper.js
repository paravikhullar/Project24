class Paper {
    constructor(x, y,width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
          
      }
      
      this.body = Matter.Bodies.circle(x, y, 30, options);
      this.width = 30;
      this.height = 30;
      //this.radius = radius;*/
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      
      ellipse(0,0,this.width,this.height);
      pop();
    }
  };