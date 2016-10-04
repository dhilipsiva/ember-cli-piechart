import Ember from 'ember';
import layout from '../templates/components/pie-chart';

export default Ember.Component.extend({
  layout,
  data: null,
  width: 100,
  height: 100,
  tagName: 'canvas',
  setupPieChart: Ember.on('didInsertElement', function() {
    alert("Loading")
  })
});
