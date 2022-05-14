function setScene(val) {
  if (val === "1") {
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }

    for (let i = 0; i < clubs.length; i++) {
      clubs[i].show();
    }

    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }

    if (frameCount % 180 === 0 && teams.length < 3) {
      threeCovariates();
    }
  }

  if (val === "2") {
    removeReferees();
    removeClubs();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    if (frameCount % 60 == 0 && teams.length < 7) {
      onlyPlayers();
    }
  }

  if (val === "3") {
    removePlayers();
    addClubs();
    for (let i = 0; i < clubs.length; i++) {
      clubs[i].show();
    }
    if (teams.length < 8) {
      onlyClubs();
    }
  }

  if (val === "4") {
    removeClubs();
    addReferees();
    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
    if (teams.length < 12) {
      onlyReferees();
    }
  }
}
