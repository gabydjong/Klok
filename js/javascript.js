
var d = new Date();
document.getElementById("specifiek").innerHTML = d;

function klok (){
  var uren = document.getElementById('uren');
  var minuten = document.getElementById ('minuten');
  var seconden = document.getElementById('seconden');


  var u = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  uren.innerHTML = u;
  minuten.innerHTML = m;
  seconden.innerHTML = s;

}

var interval = setInterval(klok, 1000);

