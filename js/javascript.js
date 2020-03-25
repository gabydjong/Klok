
var today = new Date();
document.getElementById("GMTtijd").innerHTML = today.toString();

  function klok() {
  var uren = document.getElementById('uren');
  var minuten = document.getElementById('minuten');
  var seconden = document.getElementById('seconden');

  var u =22// new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  /* zodat tijd altijd uit 2 cijfers bestaat.*/
  u =  (u < 10) ? "0" + u : u;
  m =  (m < 10) ? "0" + m : m;
  s =  (s < 10) ? "0" + s : s;

  uren.innerHTML = u;
  minuten.innerHTML = m;
  seconden.innerHTML = s;
    
  /* achtergrond kleur verandering en elementen veranderen */

    if (u >= 8 && u <= 19) {
    	document.body.classList.add("overdag");

      /* laat de zon zien en laat hem stil staan, en laat de maan niet zien*/
      zonelement = document.querySelector('.zon'); 
      zonelement.style.visibility = 'visible'; 
      zonelement.style.animation = 'none';

      maanelement = document.querySelector('.maan'); 
      maanelement.style.visibility = 'hidden'; 

      /* Ruimteschip eerder langs laten gaan */
      document.getElementById("ruimteschip").style.animationDelay = "3s";

      /* sterren zijn niet zichtbaar*/
      sterelement = document.querySelector('.container-stars'); 
      sterelement.style.visibility = 'hidden'; 

      /* Bericht goede dag */
      document.getElementById("bericht").innerHTML = "Goede dag!";


    }
    
    else if(u > 19 && u <= 20){
    	document.body.classList.add("geeloranje");

      /* laat de zon zien, en niet de maan*/
      zonelementelement = document.querySelector('.zon'); 
      zonelementelement.style.visibility = 'visible'; 

      maanelement = document.querySelector('.maan'); 
      maanelement.style.visibility = 'hidden'; 

      /* zon laten vertragen */
      document.getElementById("zon").style.animationDuration = "500s";

      /* sterren zijn niet zichtbaar*/
      sterelement = document.querySelector('.container-stars'); 
      sterelement.style.visibility = 'hidden'; 

      /* Bericht goede avond */
      document.getElementById("bericht").innerHTML = "Goede avond!";

    }  

    else if(u > 20 && u <= 21){
      document.body.classList.add("overgang");

      /* sterren zijn niet zichtbaar*/
      sterelement = document.querySelector('.container-stars'); 
      sterelement.style.visibility = 'hidden'; 

      /* Bericht goede avond */
      document.getElementById("bericht").innerHTML = "Goede avond!";
    } 

    else{
		  document.body.classList.add("nacht");
      /* laat de maan zien, en niet de zon*/
      zonelement = document.querySelector('.zon'); 
      zonelement.style.visibility = 'hidden'; 
      document.getElementById("maan").style.opacity = "0.9";

      maanelement = document.querySelector('.maan'); 
      maanelement.style.visibility = 'visible'; 
      maanelement.style.animation = 'none';

      /* Te donker om wolken te zien */
      wolkelement = document.querySelector('.sky'); 
      wolkelement.style.visibility = 'hidden'; 

      /* sterren zijn nu wel zichtbaar */
      sterelement = document.querySelector('.container-stars'); 
      sterelement.style.visibility = 'visible'; 

       /* Bericht slaap lekker */
      document.getElementById("bericht").innerHTML = "Slaap lekker!";

    }
}


var interval = setInterval(klok, 1000);
