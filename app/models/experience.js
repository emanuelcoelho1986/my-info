import Model, { attr } from '@ember-data/model';

export default class ExperienceModel extends Model {
  @attr range;
  @attr company;
  @attr('string') title;
  @attr('string') description;
  @attr technologies;
  @attr programmingLanguages;
}
