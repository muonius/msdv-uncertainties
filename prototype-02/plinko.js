function Plinko(x, y, r) {
  const options = {
    isStatic: true,
    restitution: 1,
    friction: 0,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.body.label = "plinko";
  this.r = r;
  World.add(world, this.body);
}

Plinko.prototype.show = function () {
  fill(0, 255, 0);
  stroke(255);
  let pos = this.body.position;
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
};
