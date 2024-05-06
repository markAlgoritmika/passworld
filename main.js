const passworldLenght = document.getElementById('passworld-lenght')
const includeNumbers = document.getElementById('include-numbers')
const includeSpecial = document.getElementById('include-special')
const includeUppercase = document.getElementById('include-uppercase')
const generateBtn = document.querySelector('.generate-btn')
const passworldBtnCopy = document.querySelector('.passworld-btn_copy')
const passworldOutput = document.getElementById('passworldOutput')


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const UppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const specialChars = '!@#$%^&*()-_=+\|[]{};:/?.>'

const generatepassworld = () => {
    let passworld = ''
    let possibleChars = lowercaseChars

    if (includeNumbers.checked) {
        possibleChars += numberChars    
    }
    if (includeSpecial.checked) {
        possibleChars += specialChars   
    }
    if (includeUppercase.checked) {
        possibleChars += UppercaseChars    
    }

    for (let i = 0; i < passworldLenght.value; i++) {
        let s = possibleChars[Math.floor(Math.random() * possibleChars.length)]
        passworld += s
    }

    passworldOutput.textContent = passworld
}

passworldOutput.textContent = ''
generateBtn.addEventListener('click', () => {
    generatepassworld()
    passworldBtnCopy.textContent = 'Click to Copy Passworld' 
})  
passworldBtnCopy.addEventListener('click', () => {  
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordOutput.textContent)
        passwordBtnCopy.textContent = 'Password copied!'
    }
})

