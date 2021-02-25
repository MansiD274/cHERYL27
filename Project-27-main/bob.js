class Bob {
    constructor(x, y, d) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body =Bodies.circle(x,y,d/2,options);
      this.r=d;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("magenta");
      fill("magenta");
      //ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  