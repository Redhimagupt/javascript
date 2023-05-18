name.addEventListener("blur", nameValid);
function nameValid() {
    if(!(name.value))

    {
        name.style.border = "2px solid red";
        errors[0].innerHTML="*Name field can't be empty";
        errors[0].style.display = "block";
       validName = false;
    }
    else if (!(/^([a-z A-Z]){4,20}$/).test(name.value)) {
        name.style.border = "2px solid red";
        errors[0].innerHTML="*Please Enter a valid name";
        errors[0].style.display = "block";
        validName = false;
    }
    else {
        name.style.border = "2px solid green";
        errors[0].style.display = "none";
        validName = true;
    }
}
// Phone Number Validation
let phone = document.querySelector("#phone");