import Route from '@ember/routing/route';

export default class EducationRoute extends Route {
  async model() {
    const response = await fetch('/data/education.json');
    const experiences = await response.json();

    return experiences;
  }
}
