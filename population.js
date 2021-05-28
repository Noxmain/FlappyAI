function Population(size) {
  this.generation = 1;
  this.size = size;
  this.players = [];

  for (var _ = 0; _ < this.size; _++) {this.players.push(new Player());}

  this.update = function() {
    for (var i in this.players) {
      this.players[i].update();
    }
    if (this.all_dead()) {this.next_generation();}
  };

  this.increase_score = function() {

  };

  this.best_score = function() {

  };

  this.all_dead = function() {

  };

  this.next_generation = function() {

  };

  this.draw = function() {
    for (var i in this.players) {
      this.players[i].draw();
    }
  };
}
