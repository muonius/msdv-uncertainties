//how to make things bounce?
//friction and restitution
//gravity is part of the world

function Boundary(x, y, w, h) {
  const options = {
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.body.label = "rect";
  this.w = w;
  this.h = h;

  World.add(world, this.body);
}

Boundary.prototype.show = function () {
  fill(0);
  stroke(255);
  let pos = this.body.position;
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
  rect(0, 0, this.w, this.h);
  pop();
};
