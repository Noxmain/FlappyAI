function Player(brain) {
  this.size = 40;
  this.x = 100;
  this.y = 300;
  this.s = 0;
  this.gravity = 0.8;
  this.alive = true;
  this.score = 0;
  this.frame_score = 0;
  if (brain == undefined) {this.brain = new Brain();} else {this.brain = brain;}

  this.act = function() {
    if (this.alive) {
      var y_pos = map(this.y + this.size / 2, 0, height, 1, -1);
      var y_speed = map(this.s, -20, 20, 1, -1);
      var next_pipe;
      for (var i in pipes) {if (!pipes[i].scored) {next_pipe = pipes[i]; break;}}
      var distance_to_next_pipe, distance_to_gap_top, distance_to_gap_bottom;
      if (next_pipe != undefined) {
        distance_to_next_pipe = map(next_pipe.x - (this.x + this.size), 0, width, 0, 1);
        distance_to_gap_top = map(this.y - next_pipe.y, -height, height, 1, -1);
        distance_to_gap_bottom = map((next_pipe.y + next_pipe.gap_height) - (this.y + this.size), -height, height, 1, -1);
      } else {
        distance_to_next_pipe = 1;
        distance_to_gap_top = 0;
        distance_to_gap_bottom = 0;
      }
      if (this.brain.query(y_pos, y_speed, distance_to_next_pipe, distance_to_gap_top, distance_to_gap_bottom)) {this.jump();}
    }
  };

  this.update = function() {
    if (!this.alive) {this.x -= 3;}
    if (this.alive) {this.frame_score += 1;}
    this.y += this.s;
    this.s += this.gravity;

    for (var i in pipes) {
      pipe = pipes[i];
      if ((this.x + this.size / 2 > pipe.x) && (this.x - this.size / 2 < pipe.x + pipe.width)) {
        if ((this.y - this.size / 2 < pipe.y) || (this.y + this.size / 2 > pipe.y + pipe.gap_height)) {this.alive = false;}
      }
    }

    if (this.y > height - 48 - this.size / 2) {
      this.alive = false;
      this.y = height - 48 - this.size / 2;
    }
  };

  this.jump = function() {
    this.s = -12;
  };

  this.fitness = function() {
    return this.frame_score * this.frame_score;
  };

  this.draw = function() {
    image(assets[0], this.x - assets[0].width / 2, this.y - assets[0].height / 2);
    if (HITBOXES) {
      stroke(255, 0, 0);
      strokeWeight(1);
      noFill();
      ellipse(this.x, this.y, this.size);
    }
  };
}
