
var today = new Date();
document.getElementById("specifiek").innerHTML = today.toString();

  function klok (){
  var uren =document.getElementById('uren');
  var minuten = document.getElementById ('minuten');
  var seconden = document.getElementById('seconden');

  var u =  8; // new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  /* zodat tijd altijd uit 2 cijfers bestaat.*/
  u =  (u < 10)? "0" + u : u;
  m =  (m < 10)? "0" + m : m;
  s =  (s < 10)? "0" + s : s;

  uren.innerHTML = u;
  minuten.innerHTML = m;
  seconden.innerHTML = s;
    
  /* achtergrond kleur verandering en elementen veranderen */

    if(u >= 8 && u < 19){
    	document.body.classList.add("overdag");

      /* laat de zon zien en laat hem stil staan, en laat de maan niet zien*/
      element = document.querySelector('.zon'); 
      element.style.visibility = 'visible'; 
      element.style.animation = 'none';

      ele = document.querySelector('.maan'); 
      ele.style.visibility = 'hidden'; 

      /* Ruimteschip eerder langs laten gaan */
      document.getElementById("ruimteschip").style.animationDelay = "3s";

    }
    
    else if(u >= 19 && u <= 20){
    	document.body.classList.add("geeloranje");

      /* laat de zon zien, en niet de maan*/
      element = document.querySelector('.zon'); 
      element.style.visibility = 'visible'; 

      ele = document.querySelector('.maan'); 
      ele.style.visibility = 'hidden'; 

      /* zon laten vertragen */
      document.getElementById("zon").style.animationDuration = "500s";

    }  

    else if(u > 20 && u <= 21){
      document.body.classList.add("overgang");

    } 

    else{
		  document.body.classList.add("nacht");
      /* laat de maan zien, en niet de zon*/
      element = document.querySelector('.zon'); 
      element.style.visibility = 'hidden'; 
      document.getElementById("maan").style.opacity = "0.9";

      ele = document.querySelector('.maan'); 
      ele.style.visibility = 'visible'; 
      ele.style.animation = 'none';

    }


}

var interval = setInterval(klok, 1000);
