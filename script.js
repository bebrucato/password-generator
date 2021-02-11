// Assignment Code
document.querySelector("#generate").addEventListener ("click", writePassword);

var generateBtn = document.querySelector("#generate");



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

function generatePassword() {
  var confirmLength;
}

while (confirmLength <= 7 || confirmLength >= 129) {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } 

  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");   
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");

  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");   
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");   
} 

var passwordCharacters = []

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
 
    
      
   
 
    
 
      console.log(passwordCharacters)





//Prompts


// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button

