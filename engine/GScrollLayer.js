GScrollLayer = Class.create(GLayer, {
  initialize: function($super, dataSource) {
    $super();
    
    this.entities = [];
    this.position = {x: 0, y: 0};
    this.dataSource = dataSource;
    this.rebuildEntities();
    
    this.bufferImage = null;
    
    this.updated = true;
  },
  draw: function() {
    if (!this.updated) {
      GGraphicsCore.instance().drawImage(this.bufferImage);
      return;
    }
  
    console.log('GScrollLayer: Drawing');
    
    var core = GGraphicsCore.instance();
    
    core.clearBuffer();
    for (var i = 0;i < this.entities.length;i++) {
      var entity = this.entities[i];
      entity.draw(GGraphicsCore.instance().getBuffer());
    }
    this.bufferImage = core.getBufferImage();
    core.drawImage(this.bufferImage);
    
    this.updated = false;
  },
  scroll: function(delta) {
    this.position.x += delta.x;
    this.position.y += delta.y;

    this.rebuildEntities();
  },
  rebuildEntities: function() {
    this.entities = dataSource.cellsAtPosition(this.position);
    
    for (var i = 0;i < this.entities.length;i++) {
      var entity = this.entities[i];
      entity.position.x -= this.position.x;
      entity.position.y -= this.position.y;
      this.entities[i] = entity;
    }
    
    this.updated = true;
  }
});
