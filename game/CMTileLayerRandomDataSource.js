CMTileLayerRandomDataSource = Class.create(GTileLayerDataSource, {
  initialize: function($super, size, images) {
    $super();

    this.images = [];
    this.imageSrc = images;

    this.size = size;

    this.prepareImages();
    this.generateData(size);
  },
  prepareImages: function() {
    for (var i = 0;i < this.imageSrc.length;i++) {
      var img = new Image();
      img.src = this.imageSrc[i];

      this.images.push(img);
    }
    this.imageSrc = [];
  },
  generateData: function(size) {
    if (!(size.width > 0) || !(size.height > 0))
      return;

    if (this.images.length != this.imageSrc.length)
      this.prepareImages();

    this.grid = new Array(size.height);
    for (var i = 0;i < size.height;i++) {
      this.grid[i] = new Array(size.width);
      for (var j = 0;j < size.width;j++) {
        this.grid[i][j] = this.images[Math.floor(Math.random() * 1000) % this.images.length];
      }
    }
  }, 
  cellAtPosition: function(position) {
    var grid = this.grid;
    if (position.x == undefined || position.y == undefined)
      return;
    if (position.y >= grid.length || position.x >= grid[position.y].length)
      return;

    var cell = new GImageTile(grid[position.y][position.x]);
    return cell;
  }

});