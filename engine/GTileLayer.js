GTileLayer = Class.create(GLayer, {
  initialize: function($super, dataSource) {
    $super();

    this.entities = [];
    this.dataSource = dataSource;
    this.position = {x: 0, y: 0};

    this.rebuildEntities();
  },
  draw: function() {
    if (!this.updated)
      return;

    console.log('GTileLayer: Drawing');
    for (var i = 0;i < this.entities.length;i++) {
      for (var j = 0;j < this.entities[0].length;j++) {
        var entity = this.entities[i][j];
        entity.draw();
      }
    }

    this.updated = false;
  },
  setDataSource: function(dataSource) {
    this.dataSource = dataSource;
    this.rebuildEntities();
  },
  loadData: function() {
    this.rebuildEntities();
  },
  scroll: function(delta) {
    this.position.x += delta.x;
    this.position.y += delta.y;

    this.rebuildEntities();
  },
  rebuildEntities: function() {
    var size = this.dataSource.getSize();
    
    var windowSize = GGraphicsCore.instance().size;
    var tileSize = this.dataSource.tileSize();
    var drawArea = {width: Math.ceil(windowSize.width/tileSize.width),
                    height: Math.ceil(windowSize.height/tileSize.height)};
    drawArea.width = (drawArea.width > size.width) ? size.width : drawArea.width;
    drawArea.height = (drawArea.height > size.height) ? size.height : drawArea.height;

    var location = {x: 0, y: 0};

    this.entities = new Array(drawArea.height);
    for (var y = 0;y < drawArea.height;y++) {
      this.entities[y] = new Array(drawArea.width);
      for (var x = 0;x < drawArea.width;x++) {
        var cell = this.dataSource.cellAtPosition({x: x + this.position.x, y: y + this.position.y});
        if (this.entities[y][x] != undefined && this.entities[y][x].equals(cell))
          continue;

        cell.updated = true;
        cell.setPosition(location);
        
        this.entities[y][x] = cell;
        location.x += tileSize.width;
      }
      location.x = 0;
      location.y += tileSize.height;
    }
    this.updated = true;
  }
});
