Util = {
  radians : function(deg) {
    return deg * (Math.PI / 180);
  },

  degrees : function(rad) {
  return rad * (180 / Math.PI);
  },
  
  cartesianFromRadians: function(theta){
    return {x:Math.cos(theta),y:Math.sin(theta)};
  },

  unitVectorFromVector: function(vector){
    return Math.sqrt((vector.x*vector.x)+(vector.y*vector.y));
  },

  distance: function(p1, p2) {
    var xs, ys;
    xs = ys = 0;
    xs = p2.x - p1.x;
    xs = xs * xs;
    ys = p2.y - p1.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  },
};