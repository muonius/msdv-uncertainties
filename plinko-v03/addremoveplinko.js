function addPlayers() {
  //draw Player plinkos
  playerPosition = new Plinko(
    -20,
    -height / 2 + 120,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
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
    "brown",
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
    "brown",
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
    "brown",
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
    "brown",
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
    "brown",
    true,
    "Player's Age"
  );
  plinkos.push(playerAge);

  playerName = new Plinko(
    20,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true,
    "Player Self"
  );
  plinkos.push(playerName);

  playerVictory = new Plinko(
    120,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
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
    "#ccccff",
    true,
    "League Country"
  );
  leagues.push(leagueCountry);
  leagueName = new Plinko(
    90,
    -height / 2 + 420,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true,
    "League Self"
  );
  leagues.push(leagueName);
}

function addReferees() {
  //draw referees plinkos
  refCountry = new Plinko(
    -70,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true,
    "Referee's Country"
  );
  referees.push(refCountry);
  refName = new Plinko(
    20,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true,
    "Referee Self"
  );
  referees.push(refName);
  refCard = new Plinko(
    120,
    -height / 2 + 550,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true,
    "Referee Card Given"
  );
  referees.push(refCard);
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

function addDraw() {
  //draw league
  numDraw = new Plinko(
    50,
    -height / 2 + 550,
    100,
    100,
    pAngleStart,
    "black",
    true,
    "Number of Draws"
  );
  numDraws.push(numDraw);
}

function removeDraw() {
  for (let i = 0; i < numDraws.length; i++) {
    World.remove(world, numDraws[i].body);
    numDraws.splice(i, 1);
    i--;
  }
}

function addFloat() {
  //draw league plinkos
  float = new Float(-200, -height / 2 + 400, 200, 0, "black");
  floats.push(float);
}

function removeFloat() {
  for (let i = 0; i < floats.length; i++) {
    World.remove(world, floats[i].body);
    floats.splice(i, 1);
    i--;
  }
}
