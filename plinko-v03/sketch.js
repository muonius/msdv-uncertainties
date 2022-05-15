//User Interface Radio Button
let radioSelection;
let oddRatio;
let oddratios = [-2, -1, 0, 1, 2, 3];
let val;
let plinkoLabel;
let plinkolabels = [];
let plinkopositions = [];
let uniquepositions;
let uniquelabels;

let numDraw;
let numDraws = [];
let drawBackground;
//backdrop labels
let playerBackdrop;
let leagueBackdrop;
let refereeBackdrop;

let collisionCounter = 0;

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
let leagues = [];
let referees = [];
//analysts
let teams = [];
//Declare element variables
let playerPosition;
let playerCard;
let playerHeight;
let playerWeight;
let playerScore;
let playerAge;
let playerName;
let playerVictory;

let leagueCountry;
let leagueName;

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

//Declare text variables
let detectors = [];

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);

  radio = createRadio();
  radio.option("PLR", "Players, Leagues, and Referees");
  radio.option("PL", "Players and Leagues");
  radio.option("PR", "Players and Referees");
  radio.option("P", "Only Players");
  radio.option("L", "Only Leagues");
  // radio.option("R", "Only Referees");
  radio.option("D", "Only Draws");
  radio.option("N", "None");
  radio.style("width", "500px");
  radio.style("transform: translate(900px,-600px)");
  //customize style using CSS

  radio.style("display: grid");
  radio.style("font-family:Arial");
  radio.style("font-size:26px");
  // textSize(36);
  // radio.selected("2");
  textAlign(LEFT);
  // console.log(radio);

  radioSelection = createGraphics(500, 500);
  oddRatio = createGraphics(500, 500);
  playerBackdrop = createGraphics(400, 300);
  leagueBackdrop = createGraphics(200, 120);
  refereeBackdrop = createGraphics(320, 120);
  drawBackgroup = createGraphics(100, 100);

  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  //create plinkos
  addPlayers();
  addLeagues();
  addReferees();

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

  createLabel();
  Runner.run(engine);
  frameRate(120);
}

function draw() {
  orbitControl();
  lights();
  background(255);

  //*****************static backdrop
  push();
  translate(0, 0, -150);
  fill(255);
  noStroke();
  plane(1000, 1000);
  pop();

  drawPlayerBackdrop();
  drawLeagueBackdrop();
  drawRefereeBackdrop();

  //*****************static odd ratio plane*/
  oddRatio.background("red");
  oddRatio.text("0 0.5  1 1.5 2 2.5 3", 240, 300);
  oddRatio.textSize(65);
  oddRatio.textAlign(CENTER);
  //display odd ratio plane
  push();
  noStroke();
  translate(0, height / 2 - 50);
  rotateX(HALF_PI);
  texture(oddRatio);
  plane(500, 500);
  pop();

  //*****************display bounds
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (let i = 0; i < dividers.length; i++) {
    dividers[i].show();
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  //*****************display particles
  for (let i = 0; i < teams.length; i++) {
    teams[i].show();
    if (teams[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, teams[i].body);
      teams.splice(i, 1);
      i--;
    }
  }

  //*****************initial display all plinkos
  if (!val) {
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }

    for (let i = 0; i < leagues.length; i++) {
      leagues[i].show();
    }

    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
  }
  val = radio.value();
  setScene(val);
  //draw Tooltip

  for (let i = 0; i < plinkolabels.length; i++) {
    push();
    translate(-350, -100 + 50 * i, -150);
    // radioSelection.noStroke();
    ambientMaterial(255);
    radioSelection.background(255);
    radioSelection.text(`${plinkolabels[i]}`, 100, 50);
    radioSelection.textSize(30);
    radioSelection.textAlign(LEFT);
    texture(radioSelection);
    noStroke();
    plane(300, 300);
    pop();
  }
}
