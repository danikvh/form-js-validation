const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("email")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const pass = document.getElementById("password")
const passConf = document.getElementById("password-confirm")
let emailError = document.getElementById("error-email")


//EVENT LISTENERS

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error"
    } else {
        showEmailError()
    }
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showEmailError()
        event.preventDefault()
    }
})


//FUNCTIONS

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an e-mail address."
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an e-mail address."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters;
            you entered ${email.value.length}`
    }
    emailError.className = "error active"
}