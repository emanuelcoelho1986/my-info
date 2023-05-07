import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';

export const DEFAULT_ROUTE_NAME = 'home';

export const mapOfROutesAndNames = new Map<string, string>([
  ['home', '127.0.0.1'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['other', 'Other'],
]);

export default class HeaderComponent extends Component {
  @service declare router: RouterService;

  get currentRoute() {
    return mapOfROutesAndNames.has(this.router.get('currentRouteName') ) ? mapOfROutesAndNames.get(this.router.get('currentRouteName') ) : mapOfROutesAndNames.get(DEFAULT_ROUTE_NAME);
  }
}
