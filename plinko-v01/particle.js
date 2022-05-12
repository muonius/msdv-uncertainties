function Particle(x, y, r, f, d, color) {
  this.hue = color;
  const options = {
    restitution: 0.6,
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
  // stroke(this.hue);

  let pos = this.body.position;
  // ambientMaterial(255);
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  noStroke();
  fill(this.hue);
  sphere(this.r);
  // ellipse(0, 0, this.r * 2);
  pop();
};

Particle.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -width / 2 || x > width + 50;
};
