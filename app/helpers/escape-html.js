import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function escapeHtml(positional /*, named*/) {
  return htmlSafe(positional);
});
