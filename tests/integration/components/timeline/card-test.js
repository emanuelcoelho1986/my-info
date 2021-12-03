import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | timeline/card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const mockedCard = {
      name: 'Flex',
    };

    this.set('card', mockedCard);

    await render(hbs`<Timeline::Card @card={{this.card}} />`);

    assert.dom(this.element).containsText('Flex - Present');
  });
});
