//how to make things bounce?

//friction and restitution

function Particle(x, y, r) {
  const options = {
    restitution: 0.5,
    friction: 0,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Particle.prototype.show = function () {
  fill(255);
  stroke(255);
  let pos = this.body.position;
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
};
