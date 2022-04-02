//Part 1: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=80&t=1370s
//Part 2: https://www.youtube.com/watch?v=6s4MJcUyaUE&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=81
//Part 3: https://www.youtube.com/watch?v=jN-sW-SxNzk&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=82&t=52s

const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine,
  world,
  particles = [];

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  let p = new Particle(300, 50, 20);
  particles.push(p);
}

function draw() {
  background(50);
  particles[0].show();
}
