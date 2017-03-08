import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let orgId = Ember.get(this.modelFor('org'), 'id');
    let repoId = Ember.get(this.modelFor('org.repo'), 'id');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues`)
    .then(issues => {
      return issues.map(issue =>
      {
        issue.oldId = issue.id;
        issue.id = issue.title;
        return issue;
      })
    });
  }
});
