var assets = [];
var first = true;
var pipes = [];
var grounds = [];
var frames = 1;

var HITBOXES = false;

function pythagoras(a, b) {
  return Math.sqrt(a * a + b * b);
}

function preload() {
  assets[0] = loadImage("assets/player.png");
  assets[1] = loadImage("assets/pipe_top.png");
  assets[2] = loadImage("assets/pipe_bottom.png");
  assets[3] = loadImage("assets/ground.png");
}

function setup() {
  createCanvas(480, 640);
  player = new Player();
  title = new Title();
  grounds.push(new Ground(0));
  grounds.push(new Ground(width));
}

function draw() {
  if (!first) {frames++;}
  if (frames % 100 == 0) {pipes.push(new Pipe());}

  background(132, 195, 204);

  for (var i in pipes) {
    if (player.alive) {pipes[i].update();}
    pipes[i].draw();
  }
  for (i in pipes) {pipes[i].check();}

  for (i in grounds) {
    if (player.alive) {grounds[i].update();}
    grounds[i].draw();
  }

  if (!first) {
    player.update();
  } else {
    title.draw();
  }
  player.draw();
}

function keyPressed() {
  if ((keyCode == 32) && player.alive) {
    if (first) {first = false;}
    player.jump();
  }
}
