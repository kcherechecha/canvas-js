let ship;
let asteroids = [];
let asteroidSpawnRate = 100;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
}

function draw() {
  background(200);

  ship.turn();
  ship.update();
  ship.show();
  ship.edges();

  for (let i = asteroids.length - 1; i >= 0; i--) {
    asteroids[i].show();

    asteroids[i].shrink();
    if (asteroids[i].size < 10) {
      gameOver();
    }
  }

  if (frameCount % asteroidSpawnRate === 0) {
    asteroids.push(new Asteroid());
  }

  for (let i = ship.lasers.length - 1; i >= 0; i--) {
    ship.lasers[i].update();
    ship.lasers[i].show();

    let hit = false;

    for (let j = asteroids.length - 1; j >= 0; j--) {
      if (hitDetection(ship.lasers[i], asteroids[j])) {
        asteroids.splice(j, 1);
        hit = true;
        break;
      }
    }

    if (hit) {
      ship.lasers.splice(i, 1);
    } else if (ship.lasers[i].offscreen()) {
      ship.lasers.splice(i, 1);
    }
  }

  if (frameCount % 30 === 0) {
    ship.shoot();
  }
}

function gameOver() {
  noLoop();
  fill(255, 0, 0);
  textSize(32);
  textAlign(CENTER);
  text("Гра закінчена", width / 2, height / 2);
}
