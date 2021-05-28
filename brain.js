// Neural Network
// Inputs: y position, y speed, distance to next pipe,
//         distance between top bird edge and top gap edge,
//         distance between bottom bird edge and bottom gap edge
// Outputs: jump

function Brain(weights) {
  if (weights == undefined) {
    this.weights = [random(), random(), random(), random(), random()];
  } else {
    this.weights = weights;
  }

  this.query = function(inputs) {
    var output = 0;
    for (var i = 0; i < 5; i++) {output += inputs[i] * this.weights[i];}
    if (output > 0) {return true;} else {return false;}
  };

  this.mutate = function(rate) {

  };
}
