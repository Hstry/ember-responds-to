import Ember from 'ember';

var RESIZE_EVENTS = 'resize orientationchange';

export default Ember.Mixin.create(
  Ember.Evented,
{

  defaultResizeEvents: RESIZE_EVENTS,

  didInsertElement: function () {
    this._super.apply(this, arguments);
    Ember.assert('RespondsToResize must be mixed in to a View/Component', this instanceof Ember.View || this instanceof Ember.Component);
    this.resizeHandler = this.debouncedResize.bind(this);
    $(window).on(this.get('defaultResizeEvents'), this.resizeHandler);
  },

  willDestroyElement: function () {
    this._super.apply(this, arguments);
    $(window).off(this.get('defaultResizeEvents'), this.resizeHandler);
  },

  debouncedResize: function () {
    var self = this;
    window.requestAnimationFrame(function () {
      var w = window.innerWidth;

      if ( !self.get('isDestroyed') ) {
        self.set('windowWidth', w);
        self.trigger('resize', w);
        self.set('resizedAt', new Date().getTime());
      }

    });
  },

  windowWidth: function () {
    return window.innerWidth;
  }.property()

});
