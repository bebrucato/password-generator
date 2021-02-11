// Assignment Code
var generateBtn = document.querySelector("#generate");

//event listener will activate once button is clicked
generateBtn.addEventListener("click", start);
function generatePassword() {
  
  confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");   
  confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");   

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }
  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }
  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
      }
//Next step is to randomly generate characters = to the length
var randomPassword = "";
//A loop for confirmLength to continuously generate random characters/passwords
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword);
}
    return randomPassword
} 
 

//Possible letters/numbers
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var passwordCharacters = [];
 

 console.log(passwordCharacters)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

//Will activate once button is pressed/has the first prompt for user
function start() {
 confirmLength = prompt("How many characters?");
 var passwordText = document.querySelector("#password");
 passwordText.value = "";
//  if character length is > 7, should be at least 8 characters, < 127
//Setting the value parameters for the password
 if(confirmLength > 7 && confirmLength < 129) {
  alert("Great choice!");
  writePassword()
 } else {
   alert("Character length must be 8 or more. Please try again.")
 }
}



