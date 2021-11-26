import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CardsComponent extends Component {
  @tracked cards;
}
