function Pipe() {
  this.width = 100;
  this.gap_height = 120;
  this.x = width + this.width;
  this.y = random(100 + this.gap_height / 2, height - (100 + this.gap_height / 2));
  this.s = 2;

  this.update = function() {
    this.x -= this.s;

    if (this.x < 0 - this.width) {
      pipes.splice(pipes.indexOf(this), 1);
    }
  };

  this.draw = function() {
    noStroke();
    fill(5);
    rect(this.x, this.y, this.width, this.gap_height);
  };
}
