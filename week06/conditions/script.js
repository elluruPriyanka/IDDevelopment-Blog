
let isSunny = false;
let isCloudy = true;
let isEveGoing =true;
let isTuesday = false;
let isJaniceGoing = false;


var button = document.getElementById("compute");


button.addEventListener("click" , function(){

  if((isSunny || isCloudy >= true)&& (isEveGoing >= false) && (isTuesday >= false) && (isJaniceGoing >= false ) ){
   
      document.getElementById("Going").style.backgroundColor = "green";
      
  } else {
  
      document.getElementById("notGoing").style.backgroundColor = "green";
  }
});