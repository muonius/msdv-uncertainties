//Rename Matter.js names
let Engine = Matter.Engine;
let World = Matter.World;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

//Define this world specific variables
let engine;
//world is the world inside of an engine
let world;
let boxes = [];
let ground;
let boundaries = [];
let dividers = [];
let plinkos = [];
let circles = [];
let polygons = [];
let cols = 10;
let draws = [];
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];
let clubs = [];
let referees = [];
//analysts
let logistics = [];
let linears = [];
let poissons = [];
let miscs = [];

//Declare element variables
let playerPosition;
let playerCard;
let playerHeight;
let playerWeight;
let playerScore;
let playerAge;
let playerName;
let playerVictory;

let clubCountry;
let clubName;

let refCountry;
let refName;
let refCard;

let float;
let floats = [];

//Declare element measurement
let pRadius = 40;
let pAngleStart = 0.8;

//Declare measurement variables
let startX;
let dWidth = 800;

let posStart = { x: -20, y: 40 };

let xArray = [-10, 0, 20, -20, 40];
let colors = ["orange", "blue", "green", "purple", "grey"];

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);
  // colorMode(HSB);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  //draw Player plinkos
  playerPosition = new Plinko(
    -20,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerPosition);

  playerCard = new Plinko(
    70,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerCard);

  playerHeight = new Plinko(
    -70,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerHeight);

  playerWeight = new Plinko(
    20,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerWeight);

  playerScore = new Plinko(
    120,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerScore);

  playerAge = new Plinko(
    -70,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerAge);

  playerName = new Plinko(
    20,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerName);

  playerVictory = new Plinko(
    120,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown"
  );
  plinkos.push(playerVictory);

  // console.log(plinkos);

  //polygons
  // polygons.push(new Poly(0, 50, 7, 40, "brown"));

  //draw club plinkos
  clubCountry = new Plinko(
    posStart.x,
    posStart.y,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff"
  );
  clubs.push(clubCountry);
  clubName = new Plinko(
    70,
    -height / 2 + 440,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff"
  );
  clubs.push(clubName);

  //draw referees plinkos
  refCountry = new Plinko(
    -70,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66"
  );
  referees.push(refCountry);
  refName = new Plinko(
    20,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66"
  );
  referees.push(refName);
  refCard = new Plinko(
    120,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66"
  );
  referees.push(refCard);

  //covariate - number of draws
  // draws.push(new Boundary(width / 2 - 10, 80, 30, 40, -0.1, "black"));

  //create divider
  for (let i = -cols / 2; i < cols + 1; i++) {
    const spacing = width / cols;
    let x = i * spacing;
    let h = 80;
    let w = 4;
    let y = height / 2 - h;
    let bBottom = new Boundary(x, y, w, h, 0, "Black");
    dividers.push(bBottom);
  }

  //create outer bound
  let bound = new Boundary(0, height / 2, width, 100, 0, "black");
  boundaries.push(bound);

  float = new Float(
    -70,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "yellow"
  );
  floats.push(float);

  Runner.run(engine);
  frameRate(60);
}

function draw() {
  orbitControl();
  lights();
  background(255);

  push();
  ambientMaterial(255);
  fill(50);
  noStroke();
  translate(0, height / 2 - 50);
  rotateX(HALF_PI);
  plane(500, 500);
  pop();

  push();
  // ambientMaterial(255);
  fill("#8a3324");
  noStroke();
  translate(0, -150, -100);
  rotateZ(0.1);
  plane(400, 300);
  pop();

  push();
  // ambientMaterial(255);
  fill("#e0e0ff");
  noStroke();
  translate(0, 50, -50);
  // rotateX(HALF_PI);
  plane(250, 100);
  pop();

  push();
  // ambientMaterial(255);
  fill("#fbda98");
  noStroke();
  translate(20, 150, -75);
  rotateZ(-0.1);
  plane(320, 150);
  pop();

  if (frameCount % 240 == 20 && linears.length < 2) {
    //x, y, r, f, d, color
    newLinear(-10, -height / 2 + 50, 10, 0.5, 1, "orange");
    // console.log(linears);
  }

  for (let i = 0; i < linears.length; i++) {
    linears[i].show();
    if (linears[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, linears[i].body);
      linears.splice(i, 1);
      i--;
    }
  }

  //draw all elements

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }

  for (let i = 0; i < dividers.length; i++) {
    dividers[i].show();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
    // console.log(plinkos[i].body);
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (let i = 0; i < draws.length; i++) {
    draws[i].show();
  }

  for (let i = 0; i < polygons.length; i++) {
    polygons[i].show();
  }

  for (let i = 0; i < clubs.length; i++) {
    clubs[i].show();
  }

  for (let i = 0; i < referees.length; i++) {
    referees[i].show();
  }

  for (let i = 0; i < floats.length; i++) {
    floats[i].show();
  }

  // push();
  // translate(-50, 100, -50);
  // noStroke();
  // fill("#ffcc66");
  // box(45, 45, 20);
  // pop();

  // push();
  // translate(80, 100, -50);
  // noStroke();
  // fill("#ffcc66");
  // box(45, 45, 20);
  // pop();
}

function newLinear(startX, startY, r, f, d, color) {
  //x, y, r, f, d, color
  let ln = new Particle(startX, startY, r, f, d, color);
  linears.push(ln);
}
