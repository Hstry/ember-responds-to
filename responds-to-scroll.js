// Calls this.scroll on scroll events
// --------------------------------------
// Remember to call this._super() if you override didInsertElement or willDestroyElement.
//
App.RespondsToScroll = Ember.Mixin.create({

  didInsertElement: function () {
    this._super.apply(this, arguments);
    Ember.assert('RespondsToScroll must be mixed in to a View/Component', this instanceof Ember.View || this instanceof Ember.Component);
    $(window).on('scroll', this.debouncedScroll.bind(this));
  },

  willDestroyElement: function () {
    this._super.apply(this, arguments);
    $(window).off('scroll', this.debouncedScroll.bind(this));
  },

  debouncedScroll: function (e) {
    window.requestAnimationFrame(this.scroll.bind(this, e));
  },

  scroll: function (e) {
    console.warn('[RespondsToScroll] Please define a scroll function in the view using this mixin.');
  }
});
