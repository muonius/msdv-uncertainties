//User Interface Button
let radioSelection;
//

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
let ground;
let boundaries = [];
let dividers = [];
let plinkos = [];
let polygons = [];
let cols = 10;
let draws = [];
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];
let clubs = [];
let referees = [];
//analysts
let teams = [];
let counter = 0;

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

let called = false;

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);

  radio = createRadio();
  radio.option("1", "Linear");
  radio.option("2", "Logistic");
  radio.option("3", "Poisson");
  radio.option("4", "Miscellaneous");
  radio.style("width", "30px");
  radio.selected("2");
  textAlign(CENTER);

  let val = radio.value();
  radioSelection = createGraphics(500, 500);
  if (val) {
    radioSelection.background("white");
    radioSelection.text(`item cost is ${val}`, width / 2, height / 2);
    radioSelection.textSize(100);
    radioSelection.textAlign(CENTER);

    console.log(val);
  }

  // console.log(val);

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
    "brown",
    true
  );
  plinkos.push(playerPosition);

  playerCard = new Plinko(
    70,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerCard);

  playerHeight = new Plinko(
    -70,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerHeight);

  playerWeight = new Plinko(
    20,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerWeight);

  playerScore = new Plinko(
    120,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerScore);

  playerAge = new Plinko(
    -70,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerAge);

  playerName = new Plinko(
    20,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerName);

  playerVictory = new Plinko(
    120,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
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
    "#ccccff",
    true
  );
  clubs.push(clubCountry);
  clubName = new Plinko(
    70,
    -height / 2 + 440,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true
  );
  clubs.push(clubName);

  //draw referees plinkos
  refCountry = new Plinko(
    -70,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
  );
  referees.push(refCountry);
  refName = new Plinko(
    20,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
  );
  referees.push(refName);
  refCard = new Plinko(
    120,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
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

  Runner.run(engine);
  frameRate(60);
}

function mousePressed() {
  World.remove(world, clubs[0].body);
  clubs.splice(0, 1);
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

  team1(-10, -height / 2 + 50, 10, 0.5, 1, "orange");

  for (let i = 0; i < teams.length; i++) {
    teams[i].show();
    if (teams[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, teams[i].body);
      teams.splice(i, 1);
      i--;
    }
  }

  //draw all elements
  // World.add(world, float.body);

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
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

  push();
  translate(20, 150, -150);

  texture(radioSelection);

  plane(500, 500);
  pop();
}

function team1(startX, startY, r, f, d, color) {
  if (called === false) {
    let team = new Particle(startX, startY, r, f, d, color);
    teams.push(team);
  }
  called = true;
}
