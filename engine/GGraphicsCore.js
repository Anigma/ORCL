GGraphicsCore = Class.create(GCoreObject, {
  initialize: function(context, buffer) {
    var self = this;

    this.layers = [];
    this.context = context;
    this.buffer = buffer;

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
  getBuffer: function() {
    return this.buffer;
  },
  clearBuffer: function() {
    this.buffer.clearRect(0, 0, this.size.width, this.size.height);
  },
  getBufferImage: function() {
    return this.buffer.getImageData(0, 0, this.size.width, this.size.height);
  },
  drawImage: function(image) {
    this.context.putImageData(image, 0, 0);
  },
  addLayer: function(layer) {
    this.layers.push(layer);
  },
  render: function() {
    this.context.clearRect(0, 0, this.size.width, this.size.height);
    for (var i = 0;i < this.layers.length;i++) {
      this.layers[i].draw();
    }
  }
});

GGraphicsCore._instance = null;

GGraphicsCore.instance = function() {
  return GGraphicsCore._instance;
}
