//Part 1: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=80&t=1370s
//Part 2: https://www.youtube.com/watch?v=6s4MJcUyaUE&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=81
//Part 3: https://www.youtube.com/watch?v=jN-sW-SxNzk&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=82&t=52s

let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Runner = Matter.Runner;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let boundaries = [];
let cols = 4;
let rows = 4;
let spacing;
let ding;

function setup() {
  createCanvas(800, 800);
  // colorMode(HSB);

  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 1;
  Runner.run(engine);
  frameRate(60);

  newParticle();

  //draw Plinko points
  boundaries.push(new Boundary(150, 200, width * 0.4, 20, 0.4, "brown"));
  boundaries.push(new Boundary(250, 400, width * 0.6, 80, -0.3, "black"));
  boundaries.push(new Boundary(350, 300, width * 0.8, 2, -1.2, "black"));

  //create outer bound
  // let b = new Boundary(width / 2, height + 50, width, 100);
  // bounds.push(b);

  //create divider
  for (let i = 0; i < cols + 1; i++) {
    let x = i * spacing;
    let h = 100;
    let w = 10;
    let y = height - h / 2;
    let bBottom = new Boundary(x, y, w, h, 0, "black");
    bounds.push(bBottom);
  }
}

function draw() {
  background(50);
  if (frameCount % 60 == 0) {
    newParticle();
  }

  //passing in physics engine
  //time step
  //default 16.666 because of 60 frame rate
  Engine.update(engine, 10.66);

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
  }

  plinkos.forEach((v) => v.show());
  bounds.forEach((v) => v.show());
}

function newParticle() {
  let p = new Particle(300, 0, 10);
  particles.push(p);
}
