function createLabel() {
  // events for when the pinball hits stuff
  Matter.Events.on(engine, "collisionStart", function (event) {
    let pairs = event.pairs;
    pairs.forEach(function (pair) {
      if (
        pair.bodyB.label === "particle" &&
        pair.bodyA.label != "boundary" &&
        pair.bodyA.label != "particle"
      ) {
        pingParticle(pair.bodyA);
      }
    });
  });
}

function pingParticle(particle) {
  console.log(particle.label);
}
