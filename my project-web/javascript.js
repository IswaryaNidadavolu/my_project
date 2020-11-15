function Form(event) {
    event.preventDefault();
    var validatefn = FirstName();
    var lastNamevalidation = validateLastName();
    var validateemail =  Email();
    var validateroomType = RoomType();
    var validatephone=PhoneNumber();
    var validateaddress = Address();
    var datevalidation=validatedate();
    var dayvalidation=Days();
    var servicevalidation=Service();
    
    
    var validateguests=guests();
    
   
    if (validatefn && lastNamevalidation && validateemail && validateroomType && validatephone && validateaddress && datevalidation && validateguests &&dayvalidation &&servicevalidation ) 
    {
        saveDataToLocalStorage();
        document.forms["myform"].submit();
    }
}
function saveDataToLocalStorage()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var guests = document.getElementById("guests").value;
    var room = document.querySelector('input[name="room"]:checked').value;
    var days= document.getElementById("tel").value;
    var service = document.querySelector('input[name="serve"]:checked').value;
    var dep = document.getElementById("date1").value;
    var art = document.getElementById("time").value;
    var drt = document.getElementById("time1").value;

    localStorage.setItem("firstName", fname);
    localStorage.setItem("lastName", lname);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("address",address);
    localStorage.setItem("date",date);
    localStorage.setItem("guests",guests);
    localStorage.setItem("roomtype", room);
    localStorage.setItem("daystype", days);
    localStorage.setItem("servicetype", service);
    localStorage.setItem("dep", dep);
    localStorage.setItem("art", art);
    localStorage.setItem("drt", drt);
}
function FirstName() {
    var fname1 = document.getElementById("fname");
    var fname2 = fname1.value;
    var label = fname1.labels[0];
    var fNameError = document.getElementById("fnerror1");
    if (fname2 == "") {
        label.setAttribute("style", "color:red");
        fname1.setAttribute("style", "border-color:red")
        fNameError.innerText = "First Name is mandatory";
        return false;
    }
    
    if (fname2.length > 10) {
        label.setAttribute("style", "color:red");
        fname1.setAttribute("style", "border-color:red")
        fNameError.innerText = "First Name cannot exceed more than 10 characters";
        return false;
    }
    label.removeAttribute("style");
    fname1.removeAttribute("style");
    fNameError.innerText = "";
    return true;
}

function validateLastName() {
    var lnameElm = document.getElementById("lname");
    var lname = lnameElm.value;
    var labelElm = lnameElm.labels[0];
    var lastNameErrorElm = document.getElementById("lnameerror");
    if (lname == "") {
        labelElm.setAttribute("style", "color:red");
        lnameElm.setAttribute("style", "border-color:red")
        lastNameErrorElm.innerText = "Last Name should be given";
        return false;
    }
    
    if (lname.length > 10) {
        labelElm.setAttribute("style", "color:red");
        lnameElm.setAttribute("style", "border-color:red")
        lastNameErrorElm.innerText = "Last Name cannot be more than 10 characters";
        return false;
    }
    labelElm.removeAttribute("style");
    lnameElm.removeAttribute("style");
    lastNameErrorElm.innerText = "";
    return true;
}

function Email() {
    var email1 = document.getElementById("email");
    var email2 = email1.value;
    var label = email1.labels[0];
    var emailError = document.getElementById("emailerror1");

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email2 == "") {
        label.setAttribute("style", "color:red");
        email1.setAttribute("style", "border-color:red")
        emailError.innerText = "email ID is mandatory";
        return false;
    }

    if (!email2.match(emailRegex)) {
        label.setAttribute("style", "color:red");
        email1.setAttribute("style", "border-color:red")
        emailError.innerText = "Please enter correct ID";
        return false;
    }
    label.removeAttribute("style");
    email1.removeAttribute("style")
    emailError.innerText = "";
    return true;
}

function RoomType()
{
    var roomTypeElm = document.querySelector('input[name="room"]:checked');
    var roomErrorElm = document.getElementById("roomerror");
    if(roomTypeElm == null)
    {
        
        roomErrorElm.innerText = "Please select a room type.";
        return false;
    }

    
    roomErrorElm.innerText = ""; 
    return true;
}
function PhoneNumber() {
    var phone1 = document.getElementById("phone");
    var phone2 = phone1.value;
    var label = phone1.labels[0];
    var phoneError = document.getElementById("phoneerror1");

    var phoneRegex =/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (phone2 == "") {
        label.setAttribute("style", "color:red");
        phone1.setAttribute("style", "border-color:red")
        phoneError.innerText = "phone number is mandatory";
        return false;
    }

    if (!phone2.match(phoneRegex)) {
        label.setAttribute("style", "color:red");
        phone1.setAttribute("style", "border-color:red")
        phoneError.innerText = "Please enter correct number.";
        return false;
    }
    label.removeAttribute("style");
    phone1.removeAttribute("style")
    phoneError.innerText = "";
    return true;
}
function Address() {
    var ad1 = document.getElementById("address");
    var ad2 = ad1.value;
    var label = ad1.labels[0];
    var addressError = document.getElementById("aderror1");
    if (ad2 == "") {
        label.setAttribute("style", "color:red");
        ad1.setAttribute("style", "border-color:red")
        addressError.innerText = "Address is mandatory";
        return false;
    }
    
    if (ad2.length > 10) {
        label.setAttribute("style", "color:red");
        ad1.setAttribute("style", "border-color:red")
        addressError.innerText = "Address cannot exceed more than 10 characters";
        return false;
    }
    label.removeAttribute("style");
    ad1.removeAttribute("style");
    addressError.innerText = "";
    return true;
}

function validatedate() {
    var dateElm = document.getElementById("date");
    var date = dateElm.value; 
    var labelElm = dateElm.labels[0];
    var dateErrorElm = document.getElementById("dateerror");
  
    if (new Date(date) <= new Date() ) {
        labelElm.setAttribute("style", "color:red");
        dateElm.setAttribute("style", "border-color:red")
        dateErrorElm.innerText = "Booking date should be from tomorrow.";
        return false;
    }
   
    labelElm.removeAttribute("style");
    dateElm.removeAttribute("style")
    dateErrorElm.innerText = "";
    return true;
}








function guests() {
    var guestsElm = document.getElementById("guests");
    var guests = guestsElm.value; 
    var labelElm = guestsElm.labels[0];
    var guestsErrorElm = document.getElementById("guestserror");

    if (guests == "") {
        labelElm.setAttribute("style", "color:red");
        guestsElm.setAttribute("style", "border-color:red")
        guestsErrorElm.innerText = "This field is mandatory";
        return false;
    }
  
   
    labelElm.removeAttribute("style");
    guestsElm.removeAttribute("style")
    guestsErrorElm.innerText = "";
    return true;
}
function Days() {
    var daysElm = document.getElementById("tel");
    var days = daysElm.value; 
    var labelElm = daysElm.labels[0];
    var daysErrorElm = document.getElementById("dayserror");

    if (days == "") {
        labelElm.setAttribute("style", "color:red");
        daysElm.setAttribute("style", "border-color:red")
        daysErrorElm.innerText = "This field is mandatory";
        return false;
    }
  
   
    labelElm.removeAttribute("style");
    daysElm.removeAttribute("style")
    daysErrorElm.innerText = "";
    return true;
}
function Service()
{
    var serviceTypeElm = document.querySelector('input[name="serve"]:checked');
    var serviceErrorElm = document.getElementById("serviceerror");
    if(serviceTypeElm == null)
    {
        
        serviceErrorElm.innerText = "Please select a service.";
        return false;
    }

    
    serviceErrorElm.innerText = ""; 
    return true;
}




function addListeners()
{
    document.getElementById("fname").addEventListener("keyup", FirstName);
    document.getElementById("lname").addEventListener("keyup", validateLastName);
    document.getElementById("email").addEventListener("keyup", Email);
    document.getElementById("phone").addEventListener("keyup", PhoneNumber);
    document.getElementById("address").addEventListener("keyup", Address);
    document.getElementById("date").addEventListener("keyup", validatedate);
    
    document.getElementById("guests").addEventListener("keyup", guests);
    document.getElementById("tel").addEventListener("keyup", Days);
   
}

window.onload = addListeners;

