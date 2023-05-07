import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MenuMobileMenuController extends Component {
  @tracked isOpen = false;

  get openClass() {
    return this.isOpen ? 'change' : 'hidden';
  }

  @action
  didChangeRoute() {
    this.setMenu(false);
  }

  @action
  didPressMenuButton() {
    this.setMenu(!this.isOpen);
  }

  setMenu(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}
