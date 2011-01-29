GLayer = Class.create({
  initialize: function() {
    this.entities = [];
    this.layers = [];
    this.updated = false;
  },
  invalidate: function() {
    this.updated = true;
  },
  draw: function() {
    if (!this.updated)
      return;

    for (var i in this.entities) {
      var entity = this.entities[i];
      entity.draw(context);
    }
  },
  pushEntity: function(entity) {
    this.entities.push(entity);
    this.updated = true;
  }
});