// Neural Network
// Inputs: y position, y speed, distance to next pipe,
//         distance between top bird edge and top gap edge,
//         distance between bottom bird edge and bottom gap edge
// Outputs: jump

function Brain(weights) {
  if (weights == undefined) {
    this.weights = [random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1)];
  } else {
    this.weights = weights;
  }

  this.query = function(inputs) {
    var output = 0;
    for (var i = 0; i < 5; i++) {output += inputs[i] * this.weights[i];}
    if (output > 0) {return true;} else {return false;}
  };

  this.mutate = function(rate) {
    for (var i in this.weights) {
      this.weights[i] = random(this.weights[i] - rate, this.weights[i] + rate);
    }
  };

  this.draw = function() {
    for (var i in this.weights) {
      if (this.weights[i] > 0) {stroke(255, 0, 0);} else {stroke(0, 0, 255);}
      strokeWeight(map(abs(this.weights[i]), 0, 1, 0, 3));
      line(width - 100, (height - 150) + Number(i) * 30, width - 30, height - 90);
    }
    stroke(0);
    strokeWeight(2);
    fill(255);
    for (i = 0; i < 5; i++) {ellipse(width - 100, (height - 150) + Number(i) * 30, 20);}
    ellipse(width - 30, height - 90, 20);
  };
}
