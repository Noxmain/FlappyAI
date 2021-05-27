function Player() {
  this.size = 20;
  this.x = 100;
  this.y = 300;
  this.s = 0;
  this.gravity = 0.8;
  this.alive = true;

  this.update = function() {
    this.y += this.s;
    this.s += this.gravity;

    if (this.y > height - this.size / 2) {
      this.alive = false;
      this.y = height - this.size / 2;
    }
  };

  this.jump = function() {
    this.s = -12;
  };

  this.draw = function() {
    noStroke();
    fill(5);
    ellipse(this.x, this.y, this.size);
  };
}
