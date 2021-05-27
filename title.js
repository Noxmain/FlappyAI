function Title() {
  this.draw = function(content, x) {
    stroke(80, 57, 71); // 245, 250, 235
    strokeWeight(20);
    fill(245, 250, 235); // 80, 57, 71
    textSize(70);
    textFont(assets[4]);
    text(content, x, 120);
  };
}
