var first = true;
var pipes = [];

function setup() {
  createCanvas(480, 640);

  player = new Player();
}

function draw() {
  background(220);

  if (!first) {
    player.update();
  }
  player.draw();

  if (frameCount % 300 == 0) {
    pipes.push(new Pipe());
  }

  for (var i in pipes) {
    pipes[i].update();
    pipes[i].draw();
  }
}

function keyPressed() {
  if ((keyCode == 32) && player.alive) {
    if (first) {first = false;}
    player.jump();
  }
}
