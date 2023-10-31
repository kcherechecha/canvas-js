function hitDetection(laser, asteroid) {
  const d = dist(laser.pos.x, laser.pos.y, asteroid.pos.x, asteroid.pos.y);
  return d < asteroid.r;
}
