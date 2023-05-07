import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { CardArgs } from './timeline/card.args';

export default class CardsComponent extends Component {
  @tracked declare cards: CardArgs[];
}
