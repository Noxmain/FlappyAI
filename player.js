function Player() {
  this.x = 100;
  this.y = 280;
  this.s = 0;
  this.size = 20;
  this.gravity = 0.5;
  this.alive = true;

  this.update = function() {
    this.y += this.s;
    this.s += this.gravity;

    if (this.y > height - this.size / 2) {
      this.alive = false;
      this.y = height - this.size / 2;
    }

    if (this.y < 0) {
      this.alive = false;
    }
  };

  this.jump = function() {
    this.s = -10;
  };

  this.draw = function() {
    noStroke();
    fill(5);
    ellipse(this.x, this.y, this.size);
  };
}
