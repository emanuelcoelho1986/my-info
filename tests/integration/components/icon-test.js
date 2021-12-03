import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const mockedIcon = {
      name: 'XML',
      svg: null,
      icon: null,
    };

    this.set('icon', mockedIcon);

    await render(hbs`<Icon @icon={{this.icon}} />`);

    assert.dom(this.element).hasText(mockedIcon.name);
  });
});
