function drag(id){
  var obj = document.getElementById(id);
  var disx = 0;
  var disy = 0;
  obj.onmousedown = function(ev){
    ev = ev||event;
    disx = ev.clientX - obj.offsetLeft;
    disy = ev.clientY - obj.offsetTop;
  };
};
