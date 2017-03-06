import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs');
  this.route('org', {path: '/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: '/:repoid'},function() {
      this.route('issues');
      this.route('contributors');
    });
  });
});

export default Router;
