import EmberRouter from '@ember/routing/router';
import config from 'my-info/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('blog');
  this.route('about');
  this.route('socials');
  this.route('education');
  this.route('experience');
  this.route('other');
});
