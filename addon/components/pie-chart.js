import Ember from 'ember';

export default Ember.Component.extend({
  data: null, // This is an array of {"value", "color"}
  width: 100, // Default width of canvas
  height: 100, // Default height of canvas
  tagName: 'canvas', // This component by default takes `canvas data`
  globalAlpha: 0.5, // This is to make the outer lighter / darker.
  radiusRatio: 0.8, // raitio of `<outer circle>:<inner circle>`
  attributeBindings: ['width', 'height'],

  drawPieChart: function() {
    var ctx = this.element.getContext("2d"),
      data = this.get("data"),
      width = this.get("width"),
      height = this.get("height"),
      globalAlpha = this.get("globalAlpha"),
      radiusRatio = this.get("radiusRatio"),
      fullAngle = Math.PI * 2, // i.e 360 Deg
      lastAngle = - Math.PI / 2, // This is 12'o clock. `0` Deg 3'0 clock
      currentAngle = 0, // This angle respective of the current value
      totalValue = 0, // Cumulative total of `value` in data
      center_x = width / 2, // Horizontal center of canvas
      center_y = height / 2, // Vertical center of canvas
      radius = 0, // Radius (Duh!)
      i = 0,
      l = 0,
      item = null;

    if (data === null) {
      return
    }

    //Clear the canvas
    ctx.clearRect(0, 0, width, height);
    /*
     * Let the smallest center be the radius to comtain the entire pie chart
     * within the canvas
     */
    if (center_x < center_y) {
      radius = center_x;
    }
    else {
      radius = center_y;
    }

    // Calculate totalValue
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      totalValue += item.value;
    }

    for (i = 0, l = data.length; i < l; i++) {
      /*
       * Draw each pie
       */
      item = data[i];
      currentAngle = fullAngle * (item.value / totalValue);

      // Outer lighter Circle
      ctx.beginPath();
      ctx.fillStyle = item.color;
      ctx.globalAlpha = globalAlpha;
      ctx.arc(center_x, center_y, radius, lastAngle, lastAngle + currentAngle);
      ctx.lineTo(center_x, center_y);
      ctx.fill();

      // Inner darker circle
      ctx.beginPath();
      ctx.fillStyle = item.color;
      ctx.globalAlpha = 1;
      ctx.arc(center_x, center_y, radius * radiusRatio, lastAngle, lastAngle + currentAngle);
      ctx.lineTo(center_x, center_y);
      ctx.fill();

      lastAngle += currentAngle;
    }
  },

  dataObserver: Ember.observer('data', function(){
    this.drawPieChart()
  }),

  onDidInsertElement: Ember.on('didInsertElement', function(){
    this.drawPieChart()
  })

});
