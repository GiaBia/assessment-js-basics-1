let pass = `pr@cticemakesPerf3ct`


const hasNumber = /\d/.test(pass)
//const hasLetter = /[a-zA-Z]/.test(pass)
const hasLowercaseLetter = /[a-z]/.test(pass) // Condensing the code into a self explanatory variable to check for lowercase letters
const hasUppercaseLetter = /[A-Z]/.test(pass)
const hasMinChars = pass.length >= 10
const hasMaxChars = pass.length < 20 //Checking for a max passowrd length

    
if(hasNumber && hasLowercaseLetter && hasUppercaseLetter && hasMinChars && hasMaxChars){
    console.log(`Congratulations`)
} else{
    console.log(`Sorry, password is incorrect`)
}

    

