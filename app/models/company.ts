import Model, { attr } from '@ember-data/model';
import { Icon } from 'my-info/components/icon.args';

export default class CompanyModel extends Model {
  @attr declare icon: Icon;
  @attr declare name: string;
  @attr declare descriptions: string;
  @attr declare links : string[];
}
