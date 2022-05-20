//Check passwords
let password = document.getElementById("user_password")
let confirmPassword = document.getElementById("verify_password")

function validatePassword () {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
    } else {
        confirmPassword.setCustomValidity('')
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;