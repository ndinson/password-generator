// Assignment code here

  // TO DO: create button that presents a series of prompts for password criteria

var lowCase = "abcdefghijklmnopqrstuvwxyz"
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var specialChar = "!@#$%^&*"






  // TO DO: create a selcetion of which criteria to include in the password
  // TO DO: create prompt for password lengrh (atl least 8 characters, no more than 128 characters)
  // TO DO: create prompt which confirms whther or not to include lowercase, uppercase, numeric, and/ or special characters (at least one must be selected)
  // TO DO: create an alert of the generated password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
