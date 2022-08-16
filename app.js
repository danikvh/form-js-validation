const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("email")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const pass = document.getElementById("password")
const passConf = document.getElementById("password-confirm")
let emailError = document.getElementById("error-email")
let zipError = document.getElementById("error-zip")


//EVENT LISTENERS

email.addEventListener("input", (event) => {
    if (email.checkValidity()) {
        emailError.textContent = ""
        emailError.className = "error"
    } else {
        showEmailError()
    }
})

zip.addEventListener("input", (event) => {
    if (zip.validity.valid) {
        zipError.textContent = ""
        zipError.className = "error"
    } else {
        showZipError()
    }
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid || !zip.validity.valid) {
        showEmailError()
        showZipError()
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

function showZipError() {
    console.log(zip.validity)
    if (zip.validity.badInput) {
        zipError.textContent = "Entered value needs to be a number."
    } else if (zip.validity.rangeOverflow || zip.validity.rangeUnderflow) {
        zipError.textContent = `Zip code should be 5 numbers; you entered ${zip.value.length}`
    }
    zipError.className = "error active"
}