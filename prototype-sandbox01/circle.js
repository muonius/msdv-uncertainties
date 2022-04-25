function Circles(x, y, r, optionReplace) {
  let options = {};
  if (optionReplace) {
    options = optionReplace;
  } else {
    options = {
      friction: 0.5,
      restitution: 1,
    };
  }
  this.body = Bodies.circle(x, y, r, options);
  this.hue = color(random(0, 30), 100, 100);
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rotate(angle);
    strokeWeight(1);
    stroke(150);
    fill(this.hue);
    ellipse(0, 0, this.r);
    pop();
  };
}
