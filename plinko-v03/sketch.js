//*********Rename Matter.js names
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

//*********User Interface Variables
let plinkoTooltip;
let selectVal;
let plinkoLabel;
let plinkolabels = [];
let plinkopositions = [];
let uniquepositions;
let uniquelabels;

//*********Draw Backdrops
let drawBackground;
let playerBackdrop;
let leagueBackdrop;
let refereeBackdrop;

//*********Axis
let oddRatio;
let oddratios = [0, 0.5, 1, 1.5, 2, 2.5, 3];
// let xArray = [-10, 0, 20, -20, 40];
// let colors = ["orange", "blue", "green", "purple", "grey"];
//*********Draw world in World
let world;
let ground;
let boundaries = [];
let dividers = [];
let cols = 12;
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];

//*********Draw team particles
let teams = [];

//*********Draw Plinkos */
//Player plinkos
let playerPosition;
let playerCard;
let playerHeight;
let playerWeight;
let playerScore;
let playerAge;
let playerName;
let playerVictory;
let plinkos = [];
//League plinkos
let leagueCountry;
let leagueName;
let leagues = [];
//Referee plinko
let refCountry;
let refName;
let refCard;
let referees = [];
//Num of draws plinko
let numdraw;
let numdraws = [];
//No covariate plinko invisible
let float;
let floats = [];

//*********Draw variables
//Declare element measurement
let pRadius = 40;
let pAngleStart = 0.8;
//Declare measurement variables
let dWidth = 800;
//Declare color variables
const colorParticle = {
  linear: "#6495ED",
  logistic: "#EE8C2C",
  poisson: "#ccccff",
  misc: "#ea487e",
};
const colorPlinko = {
  players: "#800020",
  leagues: "#b0c4de",
  referees: "#FAC564",
};

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);
  randomSeed(50);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Runner.run(engine);

  radio = createRadio();
  radio.option("PLR", "Players, Leagues, and Referees");
  radio.option("PL", "Players and Leagues");
  radio.option("PR", "Players and Referees");
  radio.option("P", "Only Players");
  radio.option("L", "Only Leagues");
  // radio.option("R", "Only Referees");
  radio.option("D", "Only Draws");
  radio.option("N", "None");
  radio.option("F", "Final State");
  // radio.style("width", "400px");
  radio.style("transform: translate(900px,-600px)");
  //customize style using CSS

  radio.style("display: grid");
  radio.style("font-family:Arial");
  radio.style("font-size:26px");

  //create text
  plinkoTooltip = createGraphics(500, 500);
  oddRatio = createGraphics(500, 500);
  playerBackdrop = createGraphics(400, 300);
  leagueBackdrop = createGraphics(240, 120);
  refereeBackdrop = createGraphics(320, 120);
  drawBackgroup = createGraphics(100, 100);

  //initialize plinkos
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
    let bBottom = new Boundary(x, y, w, h, 0, "black");
    dividers.push(bBottom);
    12;
  }

  //create outer bound
  let bound = new Boundary(0, height / 2 - 50, width, 50, 0, "black");
  boundaries.push(bound);

  //create collision label event
  createLabel();
  frameRate(60);
}

function draw() {
  orbitControl();
  // ambientLight(0, 0, 255);

  // pointLight(255, 255, 0, -200, 0, 200);
  // pointLight(0, 0, 255, 200, 200, 0);
  // directionalLight();
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
  oddRatio.background("black");
  for (let i = 0; i < oddratios.length; i++) {
    let x = map(i, 0, oddratios.length - 1, -20, height / 2 + 60);
    oddRatio.text(oddratios[i], x, 270);
  }
  oddRatio.fill(255);
  oddRatio.textSize(25);
  oddRatio.textAlign(CENTER);

  //display odd ratio plane
  push();
  noStroke();

  translate(0, height / 2 - 50);
  rotateX(PI / 2);
  // ambientMaterial(255, 0, 0);
  texture(oddRatio);
  plane(800, 800);
  pop();

  //*****************display bounds
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  //do not display dividers
  // for (let i = 0; i < dividers.length; i++) {
  //   dividers[i].show();
  // }

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
  if (!selectVal) {
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
  //**************Change Scene Based on Radio Selection */
  selectVal = radio.value();
  setScene(selectVal);

  //**************Tooltip */
  //Draw interactive tooltip
  for (let i = 0; i < plinkolabels.length; i++) {
    push();
    translate(-350, -100 + 50 * i, -150);
    // plinkoTooltip.noStroke();
    // ambientMaterial(255, 0, 255);
    plinkoTooltip.background(255);
    plinkoTooltip.text(`${plinkolabels[i]}`, 100, 50);
    plinkoTooltip.textSize(30);
    plinkoTooltip.textAlign(LEFT);
    texture(plinkoTooltip);
    noStroke();
    plane(300, 300);
    pop();
  }
}
