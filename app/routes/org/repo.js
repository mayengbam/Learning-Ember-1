import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let orgId = Ember.get(this.modelFor('org'), 'id');
    return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}`)
    .then(repo => {
       repo.oldId = repo.id;
       repo.id = repo.name;
       return repo;
    });
  }
});
