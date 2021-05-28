function Ground(x) {
  this.x = x;
  this.y = 0;
  this.s = 3;

  this.update = function() {
    this.x -= this.s;

    if (this.x <= 0 - width) {
      this.x = width;
    }
  };

  this.draw = function() {
    image(assets[3], this.x, this.y);
    if (HITBOXES) {
      stroke(0, 255, 0);
      strokeWeight(1);
      noFill();
      rect(0, height - 48, width, height);
    }
  };
}
