var EltonJohn = function(top, left) {
  this.$node = $('<div class="discoball"></div>');
  this.$node.append('<img height=200px class="elton" src="http://www.insertboobshere.com/wp-content/uploads/2012/12/music-monday-elton-john-tiny-dancer-L-7xLUyZ.jpeg" />');
  $('body').append(this.$node);
  this.setPosition(top, left);
  this.lights = [];
  this.populateLights(30);
  this._timeBetweenSteps = timeBetweenSteps;
  this.timer = null;
  this.step();
};

EltonJohn.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <div>
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

