function Population(size) {
  this.generation = 1;
  this.size = size;
  this.players = [];
  for (var _ = 0; _ < this.size; _++) {this.players.push(new Player());}

  this.update = function() {
    for (var i = 0; i < this.size; i++) {
      this.players[i].act();
      this.players[i].update();
    }
    if (this.all_dead()) {this.next_generation();}
  };

  this.increase_score = function() {
    for (var i = 0; i < this.size; i++) {
      if (this.players[i].alive) {this.players[i].score += 1;}
    }
  };

  this.best_score = function() {
    return max(this.players.map(function(x) {return x.score;}));
  };

  this.all_dead = function() {
    for (var i in this.players) {
      if (this.players[i].alive) {return false;}
    }
    return true;
  };

  this.fitness_sum = function() {
    var output = 0;
    for (var i = 0; i < this.size; i++) {
      output += this.players[i].fitness();
    }
    return output;
  };

  this.select_parent = function() {
    var rand = random(this.fitness_sum());
    var running_sum = 0;
    for (var i = 0; i < this.size; i++) {
      running_sum += this.players[i].fitness();
      if (running_sum > rand) {return this.players[i];}
    }
  };

  this.next_generation = function() {
    var new_players = [];
    for (var i = 0; i < this.size; i++) {
      new_players.push(new Player(this.select_parent().brain));
      new_players[i].brain.mutate(0.05);
    }
    this.players = new_players;
    pipes = [];
    frames = 1;
    this.generation++;
  };

  this.draw = function() {
    for (var i = 0; i < this.size; i++) {
      this.players[i].draw();
    }
  };
}
