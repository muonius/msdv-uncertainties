//Part 1: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=80&t=1370s
//Part 2: https://www.youtube.com/watch?v=6s4MJcUyaUE&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=81
//Part 3: https://www.youtube.com/watch?v=jN-sW-SxNzk&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=82&t=52s

let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let plinkos = [];
let cols = 11;
let rows = 10;

function setup() {
  createCanvas(600, 800);
  engine = Engine.create();
  world = engine.world;
  newParticle();

  //draw Plinko points
  let spacing = width / cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = spacing / 2 + i * spacing;
      if (j % 2 == 0) {
        //offset x by row
        x += spacing / 2;
      }
      let y = spacing + j * spacing;

      let p = new Plinko(x, y, 4);
      plinkos.push(p);
    }
  }
}

function draw() {
  if (frameCount % 60 == 0) {
    newParticle();
  }
  background(50);
  //passing in physics engine
  Engine.update(engine);
  particles.forEach((v) => v.show());
  plinkos.forEach((v) => v.show());
}

function newParticle() {
  let p = new Particle(300, 0, 10);
  particles.push(p);
}
