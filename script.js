var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// form section week 7 
let rdoValue = document.querySelector('input[name="rdoFlavor":checked').value;

document.querySelector('input[name="chkstyle"]:checked').value;

let locations = document.getElementById('locations').value;
// To store information
localStorage.setItem(key,value)
sessionStorage.setItem(key,value)
//Access information and store in variable 
let age = localStorage.getItem('age');
// Number of items stored 
let items = localStorage.length;
localStorage.getItem(key,value)
sessionStorage.getItem(key,value)
// can use dot to represent 
localStorage.age = 12;
localStorage.color ="blue";
// Using Json storage
let myNameEl = document.getElementById("myName");
let username = localStorage.getItem("username");
if (username != null && username != "") {
  myNameEl.innerHTML = username;
}

document.addEventListener("submit", function (event) {
  //prevent default action of the form from actually submitting
  event.preventDefault();

  //retrieve form values
  let myName = document.getElementById("txtName").value;
  console.log(myName);

  
  //set the name
  localStorage.setItem('username',myName);

  document.getElementById("myName").innerHTML = myName;
  //document.getElementById('myName').textContent = myName;

  //clear the form upon each sumission
  document.getElementById("myFrm").reset();
});
