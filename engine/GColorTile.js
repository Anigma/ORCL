GColorTile = Class.create(GTile, {
  initialize: function($super, color) {
    $super(); 
    this.color = color;
  },
  setColor: function(color) {
    this.color = color;
  },
  equals: function(that) {
    return (this.color == that.color);
  },
  draw: function(position) {
    if (!this.updated)
      return;

    var gCore = GGraphicsCore.instance();
    var ctx = gCore.getContext();

    ctx.fillStyle = this.color;

    ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
});