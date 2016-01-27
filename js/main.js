var pseudoHover = function() {
  var elm = document.getElementsByTagName('a');
  for(var i = 0, l = elm.length; i < l; i++) {
    elm[i].addEventListener('touchstart', function() {
      this.className = 'hover';
    }, false);
    elm[i].addEventListener('touchend', function() {
      this.className = '';
    }, false);
  }
};