function Title() {
  this.draw = function(content, x) {
    stroke(48, 14, 33);
    strokeWeight(20);
    fill(245, 250, 235);
    textSize(70);
    textFont(assets[4]);
    text(content, x, 120);
  };
}
