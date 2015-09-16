
// Calls this.keypressEscape on ESC keypress
// --------------------------------------
//

var ESC_FUNCTION = 'keypressEscape';
var ESC_CODE = 27;

App.KeypressEscapable = Ember.Mixin.create({

  init: function() {
    this._super();

    var self = this;

    $(document).on('keydown', function(ev) {

      if( ev.which !== ESC_CODE )
        return;

      var cancel = ['SELECT', 'INPUT'].indexOf(ev.target.tagName) > -1;
      var fxn = self[ESC_FUNCTION];

      if ( !cancel && fxn )
        fxn.call(self);

    });
  }

});
