GGraphicsCore = Class.create(GCoreObject, {
  initialize: function(context) {
    var self = this;

    this.layers = [];
    this.context = context;

    this.size = {
      height: this.context.canvas.height,
      width: this.context.canvas.width
    };

    this.timer = new GTimer();
    this.timer.events.addListener('tick', function() { self.render(); });

    GGraphicsCore._instance = this;
  }, 
  getContext: function() {
    return this.context;
  },
  addLayer: function(layer) {
    this.layers.push(layer);
  },
  render: function() {
    for (var i = 0;i < this.layers.length;i++) {
      this.layers[i].draw();
    }
  }
});

GGraphicsCore._instance = null;

GGraphicsCore.instance = function() {
  return GGraphicsCore._instance;
}