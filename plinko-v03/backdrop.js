function drawPlayerBackdrop() {
  //player background
  push();
  // ambientMaterial(255);
  noStroke();
  translate(20, -220, -100);
  //   rotateZ(0.1);
  playerBackdrop.background("#620119");
  playerBackdrop.text("Player", 20, 50);
  playerBackdrop.fill("White");
  playerBackdrop.textSize(30);
  playerBackdrop.textAlign(LEFT);
  texture(playerBackdrop);
  plane(400, 300);
  pop();
}

function drawLeagueBackdrop() {
  push();
  // ambientMaterial(255);
  noStroke();
  translate(20, 10, -50);
  // rotateX(HALF_PI);
  leagueBackdrop.background("#C8D5E5");
  leagueBackdrop.text("League", 20, 30);
  leagueBackdrop.fill("Black");
  leagueBackdrop.textSize(20);
  leagueBackdrop.textAlign(LEFT);
  texture(leagueBackdrop);
  plane(240, 120);
  pop();
}

function drawRefereeBackdrop() {
  //referee background
  push();
  // ambientMaterial(255);
  fill("#FFE5B5");
  noStroke();
  translate(20, 150, -75);
  //   rotateZ(-0.1);
  refereeBackdrop.background("#FFE5B5");
  refereeBackdrop.text("Referee", 20, 30);
  refereeBackdrop.fill("Black");
  refereeBackdrop.textSize(20);
  refereeBackdrop.textAlign(LEFT);
  texture(refereeBackdrop);
  plane(320, 120);
  pop();
}

function removePlayerBackdrop() {
  //player background
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, -220, -100);
  //   rotateZ(0.1);
  plane(400, 300);
  pop();
}

function removeLeagueBackdrop() {
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, 10, -50);
  // rotateX(HALF_PI);
  plane(240, 120);
  pop();
}

function removeRefereeBackdrop() {
  //referee background
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, 150, -75);
  //   rotateZ(-0.1);
  plane(320, 120);
  pop();
}
