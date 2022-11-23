// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbols = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "'",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
  "`",
  "{",
  "|",
  "}",
  ".",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword(params) {
  // user input coming in as string
  var userPasswordLength = prompt(
    "Please choose a password between 8 and 128 characters"
  );
  // we're converting the user input to integer using parseInt
  var pwLength = parseInt(userPasswordLength, 10);

  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Please choose a pw");
    return;
  }

  var isLowercase = confirm(
    "Would you like your pw to contain lowercase characters?"
  );
  var isUppercase = confirm(
    "Would you like your pw to contain uppercase characters?"
  );
  var isSpecialChar = confirm(
    "Would you like your pw to contain special characters?"
  );
  var isNumber = confirm("Would you like your pw to contain numbers?");

  if (!isLowercase && !isUppercase && !isSpecialChar && !isNumber) {
    alert("You shall not pass without any characters!!!");
    return;
  }

  var finalCharsArray = [];

  if (isLowercase) {
    finalCharsArray.push(...lowercase);
  }

  if (isUppercase) {
    finalCharsArray.push(...uppercase);
  }

  if (isSpecialChar) {
    finalCharsArray.push(...symbols);
  }

  if (isNumber) {
    finalCharsArray.push(...numbers);
  }

  console.log(finalCharsArray);

  // do the logic here
}

// Write password to the #password input
function writePassword() {
  console.log("hit");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
