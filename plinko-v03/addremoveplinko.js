function addPlayers() {
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
}

function addLeagues() {
  //draw league plinkos
  leagueCountry = new Plinko(
    posStart.x,
    posStart.y,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true
  );
  leagues.push(leagueCountry);
  leagueName = new Plinko(
    70,
    -height / 2 + 440,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true
  );
  leagues.push(leagueName);
}

function addReferees() {
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
