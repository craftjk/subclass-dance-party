describe("moveyDancer", function() {

  var moveyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    moveyDancer = new MoveyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(moveyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(moveyDancer.$node, 'toggle');
    moveyDancer.step();
    expect(moveyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(moveyDancer, "step");
      expect(moveyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(moveyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(moveyDancer.step.callCount).to.be.equal(2);
    });
  });
});
