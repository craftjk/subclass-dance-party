var MoveyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

MoveyDancer.prototype = Object.create(Dancer.prototype);
MoveyDancer.prototype.constructor = MoveyDancer;

MoveyDancer.prototype.oldStep = MoveyDancer.prototype.step;

MoveyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
