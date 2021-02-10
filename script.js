// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  console.log("New Password");
}

 var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
console.log(values);

// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for(var i=0; i <= password; i++)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
