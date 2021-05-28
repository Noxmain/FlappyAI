var assets = [];
var first = true;
var generation = 1;
var players = [];
var pipes = [];
var grounds = [];
var frames = 1;
var speed = 1;

var HITBOXES = false;
var POPULATION_SIZE = 500;
var DRAW_BRAIN = false;

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
  for (var _ = 0; _ < POPULATION_SIZE; _++) {players.push(new Player());}
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
      pipes[i].update();
      pipes[i].draw();
    }
    for (i in pipes) {pipes[i].check();}

    for (i in grounds) {
      grounds[i].update();
      grounds[i].draw();
    }

    if (first) {
      title.draw("FLAPPY AI", 35);
    } else {
      title.draw(max(players.map(function(x) {return x.score;})).toString().replace("0", "O"), width / 2 - max(players.map(function(x) {return x.score;})).toString().length * 34);
    }
    if (DRAW_BRAIN) {for (i in players) {if (players[i].score == max(players.map(function(x) {return x.score;}))) {players[i].brain.draw(); break;}}}

    var alives = 0;
    for (i in players) {
      if (players[i].alive) {
        alives++;
        players[i].act();
      }
      if (!first) {players[i].update();}
      players[i].draw();
    }

    if (alives == 0) {
      var brains = [];
      for (i in players) {
        var j = 0;
        while (j < players[i].score * players[i].score) {brains.push(players[i].brain); j++;}
      }
      for (i in players) {
        players[i].reset();
        if (brains.length == 0) {
          players[i].brain = new Brain();
        } else {
          players[i].brain = brains[Math.floor(random(0, brains.length))];
          players[i].brain.mutate(0.05);
        }
      }
      pipes = [];
      frames = 1;
      generation++;
      console.log("Generation " + generation);
    }
  }
}

function keyPressed() {
  if ((key == " ") && first) {first = false;}
  if ((key == "+") && (speed < 512)) {speed *= 2; console.log("Speed " + speed);}
  if ((key == "-") && (speed > 1)) {speed /= 2; console.log("Speed " + speed);}
}
