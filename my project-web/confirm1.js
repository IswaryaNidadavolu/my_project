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
  var room=localStorage.getItem("roomtype");
  localStorage.removeItem("roomtype");
  var days=localStorage.getItem("daystype");
  localStorage.removeItem("daystype");
  var service=localStorage.getItem("servicetype");
  localStorage.removeItem("servicetype");
  var dep=localStorage.getItem("dep");
  localStorage.removeItem("dep");
  var art=localStorage.getItem("art");
  localStorage.removeItem("art");
  var drt=localStorage.getItem("drt");
  localStorage.removeItem("drt");

  document.getElementById('firstnamevalue').innerHTML = fname;
  document.getElementById('lastnamevalue').innerHTML = lname;
  document.getElementById('emailvalue').innerHTML = email;
  document.getElementById('phonevalue').innerHTML = phone;
  document.getElementById('addressvalue').innerHTML = address;
  document.getElementById('datevalue').innerHTML = date;
  document.getElementById('guestsvalue').innerHTML = guests;
  document.getElementById('roomtypevalue').innerHTML = room;
  document.getElementById('daysvalue').innerHTML = days;
  document.getElementById('servicevalue').innerHTML = service;
  document.getElementById('depvalue').innerHTML = dep;
  document.getElementById('artvalue').innerHTML = art;
  document.getElementById('drtvalue').innerHTML = drt;
}


