GScrollLayerDataSource = Class.create({
  initialize: function() {
    this.data = [];
  },
  cellsAtPosition: function(position) {
    var ret = [];
  
    var screenSize = GGraphicsCore.instance().size;
    for (var i = 0;i < this.data.length;i++) {
      var item = this.data[i];
      if (item.position.x > position.x && item.position.x < position.x + screenSize.width &&
          item.position.y > position.y && item.position.y < position.y + screenSize.height) {
        var entity = new GImage(item.image);
        entity.setPosition(item.position);
        ret.push(entity);
      }
    }
    
    return ret;
  }
});
