function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setRotation(0.05);
  } else if (keyCode === LEFT_ARROW) {
    ship.setRotation(-0.05);
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    ship.setRotation(0);
  }
}
