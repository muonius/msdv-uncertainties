function Legend(x, y, r, color, label) {
  this.hue = color;
  const options = {
    isStatic: true,
  };
  x += random(-1, 1);
  this.body = Bodies.circle(x, y, 1, options);
  this.r = r;
  this.body.label = label;
  World.add(world, this.body);
}

Legend.prototype.show = function () {
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

Legend.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -width / 2 || x > width + 50;
};
