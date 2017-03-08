import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let orgId = Ember.get(this.modelFor('org'), 'id');
    let repoId = Ember.get(this.modelFor('org.repo'), 'id');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors`)
    .then(contributors => {
      return contributors.map(contributor =>
      {
        contributor.oldId = contributor.id;
        contributor.id = contributor.login;
        return contributor;
      })
    });
  }
});
