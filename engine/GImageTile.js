GImageTile = Class.create(GTile, {
  initialize: function($super, image) {
    $super(); 
    this.image = image;
  },
  setImage: function(image) {
    this.image = image;
  },
  equals: function(that) {
    return (this.image == that.image);
  },
  draw: function(position) {
    if (!this.updated)
      return;

    var gCore = GGraphicsCore.instance();
    var ctx = gCore.getContext();

    ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
  }
});