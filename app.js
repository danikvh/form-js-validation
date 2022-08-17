const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("email")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const pass = document.getElementById("password")
const passConf = document.getElementById("password-confirm")
let emailError = document.getElementById("error-email")
let zipError = document.getElementById("error-zip")
let passError = document.getElementById("error-password")
let passConfError = document.getElementById("error-password-confirm")


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

pass.addEventListener("input", (event) => {
        showPassError()
})

passConf.addEventListener("input", (event) => {
    showPassConfirmError()
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showEmailError()
        event.preventDefault()
    } if (!zip.validity.valid) {
        showZipError()
        event.preventDefault()
    } if (pass.value !== passConf.value || pass.value === "") {
        showPassConfirmError()
        event.preventDefault()
    } if (pass.value === "") {
        showPassError()
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
    if (zip.validity.badInput) {
        zipError.textContent = "Entered value needs to be a number."
    } else if (zip.validity.rangeOverflow || zip.validity.rangeUnderflow) {
        zipError.textContent = `Zip code should be 5 numbers; you entered ${zip.value.length}`
    }
    zipError.className = "error active"
}

function showPassError() {
    if (pass.validity.tooShort) {
        passError.textContent = `Password should be at least ${pass.minLength} characters;
            you entered ${pass.value.length}`
        passError.className = "error active"
    } else if (pass.value === "") {
        passError.textContent = "Introduce a password" 
        passError.className = "error active"   
        pass.setCustomValidity("Introduce a password")
        passError.className = "error active"
    } else {
        passError.textContent = ""
        passError.className = "error"
        pass.setCustomValidity("")
    }
}

function showPassConfirmError() {
    if (pass.value !== passConf.value) {
        passConfError.textContent = "Passwords don't match" 
        passConfError.className = "error active"   
        passConf.setCustomValidity("Passwords don't match")
    }  else {
        passConfError.textContent = ""
        passConfError.className = "error"
        passConf.setCustomValidity("")
    }
}