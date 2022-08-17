const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("email")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const pass = document.getElementById("password")
const passConf = document.getElementById("password-confirm")
let emailError = document.getElementById("error-email")
let zipError = document.getElementById("error-zip")
let countryError = document.getElementById("error-country")
let passError = document.getElementById("error-password")
let passConfError = document.getElementById("error-password-confirm")


//EVENT LISTENERS

email.addEventListener("input", (event) => {
    if (email.checkValidity()) {
        emailError.textContent = ""
        emailError.className = "error"
        email.className = ""
    } else {
        showEmailError()
    }
})

zip.addEventListener("input", (event) => {
    if (zip.validity.valid) {
        zipError.textContent = ""
        zipError.className = "error"
        zip.className = ""
    } else {
        showZipError()
    }
})

country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        countryError.textContent = ""
        countryError.className = "error"
        country.className = ""
    } else {
        showCountryError()
    }
})

pass.addEventListener("input", (event) => {
    showPassError()
})

passConf.addEventListener("input", (event) => {
    showPassConfirmError()
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid || email.value === "") {
        showEmailError()
        event.preventDefault()
    } if (!country.validity.valid || country.value === "") {
        showCountryError()
        event.preventDefault()
    } if (!zip.validity.valid || zip.value === "") {
        showZipError()
        event.preventDefault()
    } if (pass.value === "") {
        showPassError()
        event.preventDefault()
    } if (pass.value !== passConf.value) {
        showPassConfirmError()
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
    } else if (email.value === "") {
        emailError.textContent = "Enter an e-mail address."
    }
    emailError.className = "error active"
    email.className = "wrong"
}

function showCountryError() {
    if (country.value === "") {
        countryError.textContent = "You need to enter a country."
    }
    countryError.className = "error active"
    country.className = "wrong"
}

function showZipError() {
    if (zip.validity.patternMismatch) {
        zipError.textContent = "Entered value needs to be a number."
    } else if (zip.validity.tooLong || zip.validity.tooShort) {
        zipError.textContent = `Zip code should be 5 numbers; you entered ${zip.value.length}`
    } else if (zip.value === "") {
        zipError.textContent = "Enter a zip code."
    }
    zipError.className = "error active"
    zip.className = "wrong"
}

function showPassError() {
    if (pass.validity.tooShort) {
        passError.textContent = `Password should be at least ${pass.minLength} characters;
            you entered ${pass.value.length}`
        passError.className = "error active"  
        pass.className = "wrong"
        passConf.className = "wrong"
    } else if (pass.value === "") {
        passError.textContent = "Introduce a password" 
        passError.className = "error active"   
        pass.className = "wrong"
        passConf.className = "wrong"
        passError.className = "error active"
    } else {
        passError.textContent = ""
        passError.className = "error"
        pass.className = ""
        passConf.className = ""
    }
}

function showPassConfirmError() {
    if (pass.value !== passConf.value) {
        passConfError.textContent = "Passwords don't match" 
        passConfError.className = "error active"   
        passConf.className = "wrong"
    }  else {
        passConfError.textContent = ""
        passConfError.className = "error"
        passConf.className = ""
    }
}