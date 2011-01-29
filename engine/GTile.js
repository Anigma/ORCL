GTile = Class.create(GEntity, {
  initialize: function($super) {
    $super();

    this.position = {x: 0, y: 0};
    this.size = {width: 19, height: 19};
  },
  setPosition: function(position) {
    this.position.x = position.x;
    this.position.y = position.y;
  },
  draw: function(position) {
    var gCore = GGraphicsCore.instance();
    var ctx = gCore.getContext();

    ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
});