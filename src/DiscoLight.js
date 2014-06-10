var DiscoLight = function(top, left, color) {
  this.color = color;
  this.$node = $('<span class="light"></span>');
  this.setPosition(top, left);
  this.moveSize = 5;
  this.$node.css({
    "border": "10px solid " + color,
    "opacity": "0.5"
  });
  this.$node.hide();
};

DiscoLight.prototype.step = function() {
  // change color of dancer
  this.toggleColor();
  this.moveRight();
};

DiscoLight.prototype.setPosition = function(top, left) {
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
  if (this.left > $(window).width()) {
    this.setPosition(this.top, 0);
  }
};
