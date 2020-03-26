/* GMT tijd laten zien als tekst */
var today = new Date();
document.getElementById("GMTtijd").innerHTML = today.toString();

/* Huidige tijd opvragen en dat laten zien */
  function klok() {
  var uren = document.getElementById('uren');
  var minuten = document.getElementById('minuten');
  var seconden = document.getElementById('seconden');

  var u = 21 //new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  /* zodat tijd altijd uit 2 cijfers bestaat.*/
  u =  (u < 10) ? "0" + u : u;
  m =  (m < 10) ? "0" + m : m;
  s =  (s < 10) ? "0" + s : s;

  uren.innerHTML = u;
  minuten.innerHTML = m;
  seconden.innerHTML = s;
    
  /* achtergrond kleur veranderen en elementen veranderen op basis van de huidige tijd */
    if (u >= 8 && u <= 18) {
      /* Achtergrondkleur veranderen */
    	document.body.classList.add("overdag");

      /* laat de zon zien en laat hem stil staan */
      zonelement = document.querySelector('.zon'); 
      zonelement.style.visibility = 'visible'; 
      zonelement.style.animation = 'none';

      /* laat maan niet zien */
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
    
    else if(u > 18 && u <= 19){
      /* Achtergrondkleur veranderen */
    	document.body.classList.add("geeloranje");

      /* laat de zon zien */
      zonelementelement = document.querySelector('.zon'); 
      zonelementelement.style.visibility = 'visible'; 

      /* laat de maan niet zien */
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

    else if(u > 19 && u <= 20){
      /* Achtergrondkleur veranderen */
      document.body.classList.add("overgang");

      /* sterren zijn niet zichtbaar*/
      sterelement = document.querySelector('.container-stars'); 
      sterelement.style.visibility = 'hidden'; 

      /* Bericht goede avond */
      document.getElementById("bericht").innerHTML = "Goede avond!";
    } 

    else{
      /* Achtergrondkleur veranderen */
		  document.body.classList.add("nacht");

      /* laat de zon niet zien */
      zonelement = document.querySelector('.zon'); 
      zonelement.style.visibility = 'hidden'; 

      /* laat de maan zien en toon geen animatie, zodat de maan meteen zichtbaar is. */
      maanelement = document.querySelector('.maan'); 
      maanelement.style.visibility = 'visible'; 
      maanelement.style.animation = 'none';
      document.getElementById("maan").style.opacity = "0.6";

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
