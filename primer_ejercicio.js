function filter(xs, f) {
    var ys = [];
    var j = 0;
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i])) {
        ys[j] = xs[i];
        j++;
      }
    }
  
    return ys;
  }
  
  
  
  
  
  function isOdd(x) {
    return x % 2 !== 0;
  }
  function superpass(x) {
    return x.length > 5;
  }
  