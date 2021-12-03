import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icons', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const mockedIconList = [
      {
        name: 'XML',
        svg: null,
        icon: null,
      },
    ];

    this.set('icons', mockedIconList);

    await render(hbs`<Icons @icons={{this.icons}} />`);

    assert.dom(this.element).hasText(mockedIconList[0].name);
  });
});
