var MoveyDancer = function(top, left, timeBetweenSteps) {
  this.moveSize = 50;
  Dancer.apply(this, arguments);
  this.$node.addClass('mover');
};

MoveyDancer.prototype = Object.create(Dancer.prototype);
MoveyDancer.prototype.constructor = MoveyDancer;

MoveyDancer.prototype.oldStep = MoveyDancer.prototype.step;

MoveyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // randomly move dancer
  this.move();
};

MoveyDancer.prototype.move = function() {
  var newTop = ((Math.random() - 0.5) * this.moveSize) + this.top;
  var newLeft = ((Math.random() - 0.5) * this.moveSize) + this.left;
  this.setPosition(newTop, newLeft);
};
