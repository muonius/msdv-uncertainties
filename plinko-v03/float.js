function Float(x, y, w, h, a, c, display) {
  const options = {
    friction: 0.5,
    restitution: 0.6,
    isSleeping: true,
    angle: a,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  // this.body.angle = PI / 4;

  this.w = w;
  this.h = h;
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
    if (display === true) fill(c);
    if (display === false) noFill();
    box(this.w, this.h);
    // rect(0, 0, this.w, this.h);
    pop();

    // console.log(this);
  };
}
