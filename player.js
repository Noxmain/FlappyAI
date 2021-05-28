function Player() {
  this.size = 40;
  this.gravity = 0.8;
  this.brain = new Brain();

  this.reset = function() {
    this.x = 100;
    this.y = 300;
    this.s = 0;
    this.alive = true;
    this.score = 0;
  };
  this.reset();

  this.act = function() {
    var p, pp, ps, pd, pt, pb;
    for (p in pipes) {if (!p.scored) {break;}}
    p = pipes[p];
    pp = map(this.y, 0, height, -1, 1);
    ps = map(this.s, -20, 20, -1, 1);
    if (p == undefined) {pd = 1;} else {pd = map(p.x - (this.x + this.size), -width, width, -1, 1);}
    if (p == undefined) {pt = 1;} else {pt = map(this.y - p.y, -height, height, -1, 1);}
    if (p == undefined) {pb = 1;} else {pb = map((p.y + p.gap_height) - (this.y + this.size), -height, height, -1, 1);}
    if (this.brain.query([pp, ps, pd, pt, pb])) {this.jump();}
  };

  this.update = function() {
    if (!this.alive) {this.x -= 3;}
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
