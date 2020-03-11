
var today = new Date();
document.getElementById("specifiek").innerHTML = today.toString();

function klok (){
  var uren = document.getElementById('uren');
  var minuten = document.getElementById ('minuten');
  var seconden = document.getElementById('seconden');

  var u = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  /* zodat tijd altijd uit 2 cijfers bestaat.*/
  u =  (u < 10)? "0" + u : u;
  m =  (m < 10)? "0" + m : m;
  s =  (s < 10)? "0" + s : s;

  uren.innerHTML = u;
  minuten.innerHTML = m;
  seconden.innerHTML = s;
    
  /* Verandering basis op tijd*/
  // body.overdag #overdag

    if(u > 8){
    	document.body.classList.add("overdag");
    }
    else if(u > 19){
    	document.body.classList.add("gelelucht");
    }    
    else if(u > 20){
    	document.body.classList.add("oranjelucht");
    }   
    else if(u > 21){
    	document.body.classList.add("goudenuur");
    }   
    else if(u > 22){
    	document.body.classList.add("paarselucht");
    }   
    else{
		document.body.classList.add("nacht");
    }


}

var interval = setInterval(klok, 1000);
