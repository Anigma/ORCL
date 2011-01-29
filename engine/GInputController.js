GInputController = Class.create(GCoreObject, {
  initialize: function($super) {
    $super();
    var self = this;

    this.events.register('keyup');
    this.events.register('keydown');

    $(document).observe('keydown', function(e) {
      var event = new GEvent(e, 'keydown');
      self.events.fire('keydown', e);      
    });
    $(document).observe('keyup', function(e) {
      var event = new GEvent(e, 'keyup');
      self.events.fire('keyup', e);
    });
  }
});