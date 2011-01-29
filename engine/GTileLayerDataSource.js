GTileLayerDataSource = Class.create({
  initialize: function() {
    this.grid = [];
  },
  getSize: function() {
    var grid = this.grid;
    var size = {
      height: grid.length, 
      width: grid[0].length
    };
    return size;
  },
  tileSize: function() {
    return {width: 19, height: 19};
  },

  cellAtPosition: function(position) {
    var grid = this.grid;
    if (position.x == undefined || position.y == undefined)
      return;
    if (position.y >= grid.length || position.x >= grid[position.y].length)
      return;

    var cell = new GColorTile(grid[position.y][position.x]);
    return cell;
  }
});