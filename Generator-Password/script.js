

const passwordBox = document.getElementById("general-input")

const upperCase = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
const lowerCase = "qazwsxedcrfvtgbyhnujmikolp";
const number = "0123456789";
const symbols = "!@#$%^&*()_+{}><";
const allChars = upperCase + lowerCase + number + symbols;

let length = 24;


function createPassword () {
    let password = ""
    
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;

}

function copy () {
    passwordBox.select()
    document.execCommand("copy")
}

