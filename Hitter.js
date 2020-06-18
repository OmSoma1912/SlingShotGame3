class Hitter {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.color = color(random(1,255), random(1,255), random(1,255)); 
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0, 0, this.radius);
    pop();
  }
};
