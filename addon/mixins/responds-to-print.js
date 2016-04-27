import Ember from 'ember';

var mediaQueryList;
function noop() { }

// Triggers 'print' event and calls 'print' handler when the page is being printed.
// Browser support: http://caniuse.com/#feat=matchmedia
export default Ember.Mixin.create(Ember.Evented, {

  print: noop,

  didInsertElement: function () {
    this._super();
    mediaQueryList = mediaQueryList || window.matchMedia('print');
    this.printHandler = (mql) => this._printHandler(mql);
    mediaQueryList.addListener(this.printHandler);
  },

  willDestroyElement: function () {
    this._super();
    mediaQueryList.removeListener(this.printHandler);
  },

  _printHandler: function (mql) {
    if (this.get('isDestroyed')) return;
    if (!mql.matches) return;
    Ember.run(() => {
      this.trigger('print');
      this.print();
    });
  }
});
