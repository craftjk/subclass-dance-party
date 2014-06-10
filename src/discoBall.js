var DiscoBall = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="discoball"></div>');
  this.$node.append('<img height=100px id="discoball" src="src/art/ezgif-save.gif" />');

  this.setPosition(top, left);
  this.lights = [];
  this.populateLights(30);
  this._timeBetweenSteps = timeBetweenSteps;
  this.timer = null;
  this.step();
};

DiscoBall.COLORS = ["white", "Coral", "DarkOrchid", "LimeGreen", "MediumSlateBlue"];

DiscoBall.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <div>
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

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

DiscoBall.prototype.dropDown = function() {
  if ($('#discoball').hasClass('dropped')) {
    $('#discoball').addClass('raised');
    $('#discoball').removeClass('dropped');
  } else {
    $('#discoball').addClass('dropped');
    $('#discoball').removeClass('raised');
  }
};
