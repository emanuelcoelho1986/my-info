import Model, { attr } from '@ember-data/model';
import { Icon } from 'my-info/components/icon.args';

export default class ExperienceModel extends Model {
  @attr declare range: Range;
  @attr declare title: string;
  @attr declare description: string;
  @attr declare technologies: Icon[];
  @attr declare programmingLanguages: Icon[];
}
