function validate() {
  var fn = document.getElementById("fName").value;
  var ln = document.getElementById("lName").value;
  var e = document.getElementById("email").value;
  var p = document.getElementById("pass").value;
  var con = document.getElementById("confirm").value;
  var m = document.getElementById("phone").value;
  var ereg = /^([\.-\w]+)@([\.-\w]+).([a-z]{2,10})$/;
  var mreg = /^[6-9]\d{9}$/;
  if (fn.trim() == "" || ln.trim() == "") {
    alert("enter valid First Name or Last Name");
    return false;
  } else if (p.trim() == "") {
    alert("enter valid Password");
    return false;
  } else if (p !== con) {
    alert("Password not matching");
    return false;
  } else if (!ereg.test(e)) {
    alert("Enter valid email id");
    return false;
  } else if (!mreg.test(m)) {
    alert("Enter valid mobile number");
    return false;
  } else {
    alert("Registration Complete");
    return true;
  }
}
