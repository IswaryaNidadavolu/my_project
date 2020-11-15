window.onload = retrieveData;

function retrieveData() {
  var fname = localStorage.getItem("firstName");
  localStorage.removeItem("firstName");
  var lname=localStorage.getItem("lastName");
  localStorage.removeItem("lastName");
  var email=localStorage.getItem("email");
  localStorage.removeItem("email");
  var phone=localStorage.getItem("phone");
  localStorage.removeItem("phone");
  var address=localStorage.getItem("address");
  localStorage.removeItem("address");
  var date=localStorage.getItem("date");
  localStorage.removeItem("date");
  var guests=localStorage.getItem("guests");
  localStorage.removeItem("guests");
  var dine=localStorage.getItem("dinetype");
  localStorage.removeItem("dinetype");
  var menu=localStorage.getItem("menutype");
  localStorage.removeItem("menutype");
  var time=localStorage.getItem("time");
  localStorage.removeItem("time");
  

  document.getElementById('firstnamevalue').innerHTML = fname;
  document.getElementById('lastnamevalue').innerHTML = lname;
  document.getElementById('emailvalue').innerHTML = email;
  document.getElementById('phonevalue').innerHTML = phone;
  document.getElementById('addressvalue').innerHTML = address;
  document.getElementById('datevalue').innerHTML = date;
  document.getElementById('guestsvalue').innerHTML = guests;
  document.getElementById('restauranttypevalue').innerHTML = dine;
  document.getElementById('menuvalue').innerHTML = menu;
  document.getElementById('time').innerHTML = time;
  
}


