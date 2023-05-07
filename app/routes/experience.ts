import Route from '@ember/routing/route';

export default class ExperienceRoute extends Route {
  async model() {
    const response = await fetch('/data/experience.json');
    const experiences = await response.json();

    return experiences;
  }
}
