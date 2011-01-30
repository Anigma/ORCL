GImage = Class.create(GEntity, {
  initialize: function($super, image) {
    $super();
    
    this.size = {width: 10, height: 10};
    this.image = image;
  },
  setPosition: function(position) {
    this.position.x = position.x;
    this.position.y = position.y;
  },
  draw: function(context) {
    if (!this.updated)
      return;
  
    //var ctx = GGraphicsCore.instance().getContext();
    context.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
    this.updated = false;
  }
});
