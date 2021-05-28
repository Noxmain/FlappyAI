var assets = [];
var first = true;
var pipes = [];
var grounds = [];
var frames = 1;
var speed = 1;

var HITBOXES = false;

function pythagoras(a, b) {
  return Math.sqrt(a * a + b * b);
}

function preload() {
  assets[0] = loadImage("assets/player.png");
  assets[1] = loadImage("assets/pipe_top.png");
  assets[2] = loadImage("assets/pipe_bottom.png");
  assets[3] = loadImage("assets/ground.png");
  assets[4] = loadFont("assets/font.ttf");
}

function setup() {
  createCanvas(480, 640);
  player = new Player();
  title = new Title();
  grounds.push(new Ground(0));
  grounds.push(new Ground(width));
}

function draw() {
  for (var _ = 0; _ < speed; _++) {
    if (!first) {frames++;}
    if (frames % 100 == 0) {pipes.push(new Pipe());}

    background(128, 186, 197);

    for (var i in pipes) {
      if (player.alive) {pipes[i].update();}
      pipes[i].draw();
    }
    for (i in pipes) {pipes[i].check();}

    for (i in grounds) {
      if (player.alive) {grounds[i].update();}
      grounds[i].draw();
    }

    if (first) {
      title.draw("FLAPPY AI", 35);
    } else {
      title.draw(speed.toString().replace("0", "O"), width / 2 - speed.toString().length * 34);
    }

    if (player.alive) {player.act();}
    if (!first) {player.update();}
    player.draw();
  }
}

function keyPressed() {
  if ((key == " ") && first) {first = false;}
  if ((key == "+") && (speed < 1000)) {speed *= 10;}
  if ((key == "-") && (speed > 1)) {speed /= 10;}
}
