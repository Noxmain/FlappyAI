var assets = [];
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
  population = new Population(100);
  grounds.push(new Ground(0));
  grounds.push(new Ground(width));
}

function draw() {
  for (var _ = 0; _ < speed; _++) {
    frames++;
    if (frames % 100 == 0) {pipes.push(new Pipe());}

    background(128, 186, 197);

    for (var i in pipes) {
      pipes[i].update();
      pipes[i].draw();
    }
    for (i in pipes) {pipes[i].check();}

    for (i in grounds) {
      grounds[i].update();
      grounds[i].draw();
    }

    Text(population.best_score().toString().replace("0", "O"), width / 2 - population.best_score().toString().length * 34, 120, 52);

    population.update();
    population.draw();
  }
}

function keyPressed() {
  if (key == "+") {speed *= 2;}
  if (key == "-") {speed = max(speed / 2, 1);}
}
