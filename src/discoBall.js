var DiscoBall = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.lights = [];
  this.populateLights(30);
  this._timeBetweenSteps = timeBetweenSteps;
  this.timer = null;
  this.step();
};

DiscoBall.COLORS = ["white", "Coral", "DarkOrchid", "LimeGreen", "MediumSlateBlue"];

DiscoBall.prototype.populateLights = function(numLights) {
  for (var i = 0; i < numLights; i++) {
    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();
    var newColorI = Math.floor(Math.random() * DiscoBall.COLORS.length);
    var newLight = new DiscoLight(top, left, DiscoBall.COLORS[newColorI]);
    this.lights.push(newLight);
    $('body').append(newLight.$node);
  }
};

DiscoBall.prototype.activateLights = function() {
  for (var i = 0; i < this.lights.length; i++) {
    this.lights[i].$node.toggle();
  }
};

DiscoBall.prototype.step = function() {
  this.timer = setInterval(function() {
    for (var i = 0; i < this.lights.length; i++) {
      this.lights[i].moveRight();
    }
  }.bind(this), this._timeBetweenSteps);
};
