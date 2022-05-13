function Particle(x, y, r, f, d, color) {
  this.hue = color;
  const options = {
    restitution: 0.3,
    friction: f,
    density: d,
  };
  x += random(-1, 1);
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  this.body.label = "particle";
  World.add(world, this.body);
}

Particle.prototype.show = function () {
  fill(this.hue, 255, 255);
  stroke(255);
  let pos = this.body.position;
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
};

Particle.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -50 || x > width + 50;
};
