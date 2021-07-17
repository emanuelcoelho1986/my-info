import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { keyResponder, onKey } from 'ember-keyboard';

@keyResponder
export default class MenuMobileMenuController extends Component {
  @tracked isOpen = false;

  didRenderElement = () => {
    window.addEventListener('keydown', (event) =>
      this.shouldPerformMenuCheck(event)
    );
  };

  willDestroy() {
    super.willDestroy();

    window.removeEventListener('keydown', (event) =>
      this.shouldPerformMenuCheck(event)
    );
  }

  @action
  didPressMenuButton() {
    this.setMenu(!this.isOpen);
  }

  // I hate this approach
  @onKey('escape')
  shouldPerformMenuCheck = (event) => {
    switch (event?.key.toLowerCase()) {
      case 'escape':
        this.setMenu(false);
        break;
      case 'm':
        this.setMenu(!this.isOpen);
        break;
      default:
        console.info('Trying to do something unexpected');
    }

    if (event && event?.key.toLowerCase().indexOf('escape') > -1) {
      this.isOpen = false;
    }
  };

  setMenu(isOpen) {
    this.isOpen = isOpen;
  }
}
