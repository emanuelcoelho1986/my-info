import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MenuMobileMenuController extends Component {
  @tracked isOpen = false;

  @action
  didChangeRoute() {
    this.setMenu(false);
  }

  @action
  didPressMenuButton() {
    this.setMenu(!this.isOpen);
  }

  setMenu(isOpen) {
    this.isOpen = isOpen;
  }
}
