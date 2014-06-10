var DiscoBall = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.lights = [];
  this.populateLights(50);
  this.colors = ["Aquamarine", "Coral", "DarkOrchid", "LimeGreen", "MediumSlateBlue"];
  this._timeBetweenSteps = timeBetweenSteps;
};

DiscoBall.prototype.populateLights = function(numLights) {
  for (var i = 0; i < numLights; i++) {
    this.lights.push(new DiscoLight(top, left, this.colors));
  }
};

DiscoBall.prototype.activateLights = function() {

};

DiscoBall.prototype.step = function() {

};


