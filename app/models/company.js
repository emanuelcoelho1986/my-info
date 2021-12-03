import Model, { attr } from '@ember-data/model';

export default class CompanyModel extends Model {
  @attr icon;
  @attr name;
  @attr descriptions;
  @attr links;
}
