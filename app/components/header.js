import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const mapOfROutesAndNames = {
  home: '127.0.0.1',
  education: 'Education',
  experience: 'Experience',
  other: 'Other',
};

export default class HeaderComponent extends Component {
  @service() router;

  get currentRoute() {
    const routeName = mapOfROutesAndNames[this.router.get('currentRouteName')];

    return routeName ? routeName : mapOfROutesAndNames.home;
  }
}
