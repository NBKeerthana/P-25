class Paper {
  constructor(x, y,radius) {
    var options = {
      isStatic:false,
      restitution:1,
      friction:0.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.image=loadImage("Paper.png");
    this.radius=radius;
    
    World.add(world, this.body);
  }
  display(){  
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.radius);
    pop();
  }
}
