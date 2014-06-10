var DiscoLight = function(colors) {
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.$node = $('<span class="light"></span>');
};

DiscoLight.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // change color of dancer
  this.toggleColor();
  this.moveRight();
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

DiscoLight.prototype.toggleColor = function() {
  var colors = ["brown", "green", "yellow", "purple", "pink", "gray","white","black"];
  this.$node.css({"border":"10px solid " + colors[Math.floor(Math.random() * colors.length)]});
};

DiscoLight.prototype.moveRight = function() {
  var newLeft = this.left + this.moveSize;
  this.setPosition(this.top, newLeft);
  this.wrap();
};

DiscoLight.prototype.wrap = function() {
  console.log("width: " + $(window).width());
  if (this.left > $(window).width()) {
    this.setPosition(this.top, 0);
  }
};
