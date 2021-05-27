function Player() {
  this.size = 40;
  this.x = 100;
  this.y = 300;
  this.s = 0;
  this.gravity = 0.8;
  this.alive = true;

  this.update = function() {
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
      noFill();
      ellipse(this.x, this.y, this.size);
    }
  };
}
