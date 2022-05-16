function addPlayers() {
  //draw Player plinkos
  playerPosition = new Plinko(
    -20,
    -height / 2 + 120,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Position"
  );
  plinkos.push(playerPosition);

  playerCard = new Plinko(
    70,
    -height / 2 + 120,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Card Received"
  );
  plinkos.push(playerCard);

  playerHeight = new Plinko(
    -70,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Height"
  );
  plinkos.push(playerHeight);

  playerWeight = new Plinko(
    20,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Weight"
  );
  plinkos.push(playerWeight);

  playerScore = new Plinko(
    120,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Score"
  );
  plinkos.push(playerScore);

  playerAge = new Plinko(
    -70,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Age"
  );
  plinkos.push(playerAge);

  playerSelf = new Plinko(
    20,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player Self"
  );
  plinkos.push(playerSelf);

  playerVictory = new Plinko(
    120,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.players,
    true,
    "Player's Victory"
  );
  plinkos.push(playerVictory);
}

function addLeagues() {
  //draw league plinkos
  leagueCountry = new Plinko(
    -40,
    -height / 2 + 420,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.leagues,
    true,
    "League's Country"
  );
  leagues.push(leagueCountry);
  leagueSelf = new Plinko(
    90,
    -height / 2 + 420,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.leagues,
    true,
    "League Self"
  );
  leagues.push(leagueSelf);
}

function addReferees() {
  //draw referees plinkos
  refCard = new Plinko(
    -70,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.referees,
    true,
    "Referee's Card Given"
  );
  referees.push(refCard);
  refSelf = new Plinko(
    20,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.referees,
    true,
    "Referee Self"
  );
  referees.push(refSelf);
  refCountry = new Plinko(
    120,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    colorPlinko.referees,
    true,
    "Referee's Country'"
  );
  referees.push(refCountry);
}

function removePlayers() {
  for (let i = 0; i < plinkos.length; i++) {
    World.remove(world, plinkos[i].body);
    plinkos.splice(i, 1);
    i--;
  }
}

function removeLeagues() {
  for (let i = 0; i < leagues.length; i++) {
    World.remove(world, leagues[i].body);
    leagues.splice(i, 1);
    i--;
  }
}

function removeReferees() {
  for (let i = 0; i < referees.length; i++) {
    World.remove(world, referees[i].body);
    referees.splice(i, 1);
    i--;
  }
}

function removeDraw() {
  for (let i = 0; i < numdraws.length; i++) {
    World.remove(world, numdraws[i].body);
    numdraws.splice(i, 1);
    i--;
  }
}

function addFloat() {
  //draw league plinkos
  float = new Float(-200, -height / 2 + 500, 150, 0, "black");
  floats.push(float);
}

function removeFloat() {
  for (let i = 0; i < floats.length; i++) {
    World.remove(world, floats[i].body);
    floats.splice(i, 1);
    i--;
  }
}

// function addDraw() {
//   //draw league
//   numdraw = new Plinko(
//     40,
//     -height / 2 + 570,
//     80,
//     80,
//     pAngleStart,
//     "black",
//     true,
//     "Number of Draws"
//   );
//   numdraws.push(numdraw);
// }

function addDraw() {
  //draw league
  numdraw = new addNumDraws(
    40,
    -height / 2 + 570,
    80,
    80,
    pAngleStart,
    "black",
    true,
    "Number of Draws"
  );
  numdraws.push(numdraw);
}

function addNumDraws(x, y, w, h, a, c, display, label) {
  const options = {
    friction: 0.5,
    restitution: 0.6,
    isStatic: true,
    angle: a,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  // this.body.angle = PI / 4;

  this.w = w;
  this.h = h;
  this.body.label = label;
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
    drawBackdrop.background(c);
    drawBackdrop.textFont("Goldman");
    drawBackdrop.text(`NUM OF`, 50, 45);
    drawBackdrop.text(`DRAWS`, 50, 70);
    drawBackdrop.fill(255);
    drawBackdrop.textSize(20);
    drawBackdrop.textAlign(CENTER);
    texture(drawBackdrop);
    box(this.w, this.h, 50);
    // rect(0, 0, this.w, this.h);
    pop();
  };
}
