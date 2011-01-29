GEventManager = Class.create({
  initialize: function() {
    this.listeners = {};
    this.events = [];
  },
  register: function(event) {
    this.events.push(event);
    this.listeners[event] = [];
  },
  addListener: function(event, listener) {
    if (this.listeners[event] != undefined) {
      this.listeners[event].push(listener);
    }
  },
  fire: function(event, args) {
    if (this.listeners[event] != undefined) {
      for (var c = 0;c < this.listeners[event].length;c++) {
        var e = new GEvent(args, event);
        (this.listeners[event][c])(e);
      }
    }
  }
});