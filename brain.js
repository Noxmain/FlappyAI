function Brain() {
  this.weights = [random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1)];

  this.query = function(y_pos, y_speed, distance_to_next_pipe, distance_to_gap_top, distance_to_gap_bottom) {
    var inputs = [y_pos, y_speed, distance_to_next_pipe, distance_to_gap_top, distance_to_gap_bottom];
    var output = 0;
    for (var i in inputs) {
      output += inputs[i] * this.weights[i];
    }
    if (output > 0) {return true;} else {return false;}
  };

  this.mutate = function(rate) {
    for (var i = 0; i < 5; i++) {
      this.weights[i] = random(this.weights[i] - rate, this.weights[i] + rate);
    }
  };
}
