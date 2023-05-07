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
  @service() router: RouterService | undefined;

  get currentRoute() {
    const currentRouteName = this.router?.get('currentRouteName') || DEFAULT_ROUTE_NAME;
    return mapOfROutesAndNames.has(currentRouteName) ? mapOfROutesAndNames.get(currentRouteName) : mapOfROutesAndNames.get(DEFAULT_ROUTE_NAME);
  }
}
