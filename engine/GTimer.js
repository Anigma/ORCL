GTimer = Class.create(GCoreObject, {
  initialize: function($super) {
    $super();

    var self = this;
    
    this.events.register('tick');
    this.lastTick = 0;
    this.enabled = false;

    this.interval = setInterval(function(){
      self.tick();
    }, 33);
  },
  start: function() {
    this.enabled = true;
  }, 
  stop: function() {
    this.enabled = false;
  },
  single: function() {
    this.tick(true);
  },
  tick: function(force) {
    if (!force && !this.enabled)
      return;

    var currentTime = (new Date()).getTime();
    if (currentTime - this.lastTick) {
      this.events.fire('tick', {});
    }
  }
});