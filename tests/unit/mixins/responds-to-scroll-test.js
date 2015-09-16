import Ember from 'ember';
import RespondsToScrollMixin from '../../../mixins/responds-to-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | responds to scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  var RespondsToScrollObject = Ember.Object.extend(RespondsToScrollMixin);
  var subject = RespondsToScrollObject.create();
  assert.ok(subject);
});
