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
  this.$node.fadeToggle();
  // toggle(
  //   function(){this.$node.css({"border":"10px solid red"});}.bind(this),
  //   function(){this.$node.css({"border":"10px solid blue"});}.bind(this),
  //   function(){this.$node.css({"border":"10px solid green"});}.bind(this)
  // );
};
