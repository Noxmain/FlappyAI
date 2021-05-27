var first = true;
var pipes = [];
var frames = 1;

function setup() {
  createCanvas(480, 640);
  title = new Title();
  player = new Player();
}

function draw() {
  background(220);

  if (!first) {
    player.update();
    frames++;
  } else {
    title.draw();
  }
  player.draw();

  if (frames % 200 == 0) {pipes.push(new Pipe());}

  for (var i in pipes) {
    if (player.alive) {pipes[i].update();}
    pipes[i].draw();
  }
}

function keyPressed() {
  if ((keyCode == 32) && player.alive) {
    if (first) {first = false;}
    player.jump();
  }
}
