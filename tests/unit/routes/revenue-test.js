import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | revenue', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:revenue');
    assert.ok(route);
  });
});
