import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MenuMenuLinksComponent extends Component {
  @tracked userDidSelectAMenu = () => {};

  @action
  didSelectMenu() {
    this.userDidSelectAMenu(true);
  }
}
