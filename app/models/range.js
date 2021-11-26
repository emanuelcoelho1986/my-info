import Model, { attr } from '@ember-data/model';

export default class RangeModel extends Model {
  // from might be a reserved word so I took the liberty of
  // addeind ´date´ as a needle
  @attr('date') dateFrom;
  @attr('date') dateTo;
}
