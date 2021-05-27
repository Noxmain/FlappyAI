function Pipe() {
  this.width = 104;
  this.gap_height = 190;
  this.x = width + this.width;
  this.y = random(100, height - (100 + this.gap_height));
  this.s = 3;
  this.scored = false;

  this.update = function() {
    this.x -= this.s;
    if ((!this.scored) && (this.x + this.width / 2 < 100)) {
      this.scored = true;
      score++;
    }
  };

  this.check = function() {
    if (this.x < 0 - this.width) {
      pipes.splice(pipes.indexOf(this), 1);
    }
  };

  this.draw = function() {
    image(assets[1], this.x, this.y - assets[1].height);
    image(assets[2], this.x, this.y + this.gap_height);
    if (HITBOXES) {
      stroke(0, 0, 255);
      noFill();
      rect(this.x, 0, this.width, this.y);
      rect(this.x, this.y + this.gap_height, this.width, height);
    }
  };
}
