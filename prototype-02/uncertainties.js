//Part 1: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=80&t=1370s
//Part 2: https://www.youtube.com/watch?v=6s4MJcUyaUE&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=81
//Part 3: https://www.youtube.com/watch?v=jN-sW-SxNzk&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=82&t=52s

let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let cols = 10;
let rows = 11;
let ding;

function preload() {
  ding = loadSound("./assets/ding.mp3");
}

function setup() {
  createCanvas(600, 800);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 1;

  function collision(event) {
    let pairs = event.pairs;

    for (let i = 0; i < pairs.length; i++) {
      let labelA = pairs[i].bodyA.label;
      let labelB = pairs[i].bodyB.label;
      if (labelA==='particle'&& labelB==='plinko'){
       ding.play()
      }
      if (labelA==='plinko'&& labelB==='particle'){
        ding.play()
       }
    
  }
  Events.on(engine, "collisionStart", collision);
  newParticle();

  //draw Plinko points
  let spacing = width / cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols + 1; j++) {
      let x = spacing / 2 + i * spacing;
      if (j % 2 == 0) {
        //offset x by row
        x += spacing / 2;
      }
      let y = spacing + j * spacing;

      let p = new Plinko(x, y, 16);
      plinkos.push(p);
    }
  }

  //create outer bound
  let b = new Boundary(width / 2, height + 50, width, 100);
  bounds.push(b);

  //create divider
  for (let i = 0; i < cols + 1; i++) {
    let x = i * spacing;
    let h = 100;
    let w = 10;
    let y = height - h / 2;
    let bBottom = new Boundary(x, y, w, h);
    bounds.push(bBottom);
  }
}

function draw() {
  if (frameCount % 60 == 0) {
    newParticle();
  }
  background(50);
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
