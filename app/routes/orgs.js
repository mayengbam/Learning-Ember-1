import Ember from 'ember';

export default Ember.Route.extend({
  activate(){
    //console.log('Enter "orgs" route ...')
  },
  model(){
    return [
      {id: "Emberjs"},
      {id: "Vuejs"},
      {id: "Reactjs"}
    ]
  },
  deactivate(){
    //console.log('Exit "orgs" route ...')
  }
});
