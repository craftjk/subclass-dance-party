var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('rainbow');
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.oldStep = RainbowDancer.prototype.step;

RainbowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // change color of dancer
  this.toggleColor();
};

RainbowDancer.prototype.toggleColor = function() {
  var context = this;
  var colors = ["brown", "green", "yellow", "purple", "pink", "gray","white","black"];
  this.$node.css({"border":"10px solid " + colors[Math.floor(Math.random() * colors.length)]});
};
