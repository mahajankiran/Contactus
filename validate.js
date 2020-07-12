const name = document.getElementById("name");
const email = document.getElementById("email");
const emailcheck =document.getElementById("validityemail");
const namecheck =document.getElementById("validityname");


let validname = false;
let validemail = false;
name.addEventListener("blur", () => {
  let regex = /^([a-zA-Z ]+)$/;

  let str = name.value;

  if (regex.test(str)) {
    console.log("Valid name");
    validname = true;
    namecheck.style["display"]="none";

  } else {
    console.log("Invlaid name");
    validname = false;
    namecheck.style["display"]="block";

  }
});

email.addEventListener("blur", () => {
  let regex = /^([_\-\. 0-9 a-z A-Z]+)@([_\- \. 0-9 a-z A-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;

  if (regex.test(str)) {
    validemail = true;
    console.log("valid email");
    emailcheck.style["display"]="none";


  } else {
    validemail = false;
    console.log("Invalid email");
    console.log(emailcheck);
    emailcheck.style["display"]="block";


  }
});
