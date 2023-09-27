// Assignment code here

  // TO DO: create function that presents a series of prompts for password criteria

function generatePassword() {

  // TO DO: create a selection of which criteria to include in the password (atleast one must be selected)
    // TO DO: create prompt for password lengrh (at least 8 characters, no more than 128 characters)

var userChoice = "";
var createdPassword = "";

var passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
 
if (passwordLength < 8) {
  alert ("Choose a length of at least 8 characters and no more than 128 characters.")
  return;
}

if (passwordLength > 128) {
  alert ("Choose a length of at least 8 characters and no more than 128 characters.")
  return;
}

    // TO DO: create confirm which confirms whether or not to include lower case characters 

var lowCase = confirm("Would you like your password to include lower case letters?");
if (lowCase) {
  userChoice = userChoice.concat(lowerCase);
}

    // TO DO: create confirm which confirms whether or not to include upper case characters 

var upCase = confirm("Would you like your password to include upper case letters?");
if (upCase) {
  userChoice = userChoice.concat(upperCase);
}

    // TO DO: create confirm which confirms whether or not to include numbers

var num = confirm("Would you like your password to include numbers?");
if (num) {
  userChoice = userChoice.concat(numbers);
}

    // TO DO: create confirm which confirms whether or not to include special characters 
var specialChar = confirm("Would you like your password to include special characters?");
if (specialChar) {
  userChoice = userChoice.concat(specialCharacters);
}

  // TO DO: create a for loop with random index and random characters

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * userChoice.length);
  var random = userChoice[randomIndex];
  createdPassword = createdPassword.concat(random);
}

  // TO DO: if statement for user to select at least one choice

if (userChoice.length ===0) {
  alert("Must confirm at least one character type. Please try again.")
  return;
}

  // TO DO: have generated password written to the page

return createdPassword;

}

 var lowerCase = "abcdefghijklmnopqrstuvwxyz"
 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var numbers = "0123456789"
 var specialCharacters = "!@#$%^&*"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
