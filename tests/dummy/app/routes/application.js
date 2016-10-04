import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {"value": 1, "color": "red"},
      {"value": 4.5, "color": "blue"},
      {"value": 2, "color": "yellow"},
      {"value": 3, "color": "green"}
    ];
  }
});
