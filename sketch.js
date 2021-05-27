var first = true;

function setup() {
  createCanvas(400, 600);

  player = new Player();
}

function draw() {
  background(220);

  if (!first) {
    player.update();
  }
  player.draw();
}

function keyPressed() {
  if ((keyCode == 32) && player.alive) {
    if (first) {first = false;}
    player.jump();
  }
}
