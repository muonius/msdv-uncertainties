function Float(x, y, r, a, c) {
  const options = {
    friction: 0.5,
    restitution: 0.6,
    isStatic: true,
    angle: a,
  };
  this.body = Bodies.circle(x, y, r, options);
  // this.body.angle = PI / 4;

  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y, 0);
    rectMode(CENTER);
    rotate(angle);
    strokeWeight(4);
    noStroke();
    fill(c);
    sphere(this.r);
    // rect(0, 0, this.w, this.h);
    pop();

    // console.log(this);
  };
}
