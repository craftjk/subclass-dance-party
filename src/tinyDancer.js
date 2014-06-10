var TinyDancer = function(top, left, timeBetweenSteps) {
  this.moveSize = 50;
  Dancer.apply(this, arguments);
  this.$node.addClass('mover');
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;

TinyDancer.prototype.oldStep = TinyDancer.prototype.step;

TinyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // randomly move dancer
  this.move();
};

TinyDancer.prototype.move = function() {
  var newTop = ((Math.random() - 0.5) * this.moveSize) + this.top;
  var newLeft = ((Math.random() - 0.5) * this.moveSize) + this.left;
  this.setPosition(newTop, newLeft);
};
