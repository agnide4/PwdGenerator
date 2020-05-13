

//Data needed for functions
var arraySpc = ['@', '$', '%', '&', '!', '#'];
let arrayLtr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayLtrLow = arrayLtr.toLocaleString().toLowerCase().split(',');
var arrayNbr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var generateBtn = document.querySelector("#generate");


//functions to get random item from each array

function spcRandom() {
  var randomItem = arraySpc[Math.floor(Math.random() * arraySpc.length)];
  return randomItem;

}
function ltrRandom() {
  var randomItem = arrayLtr[Math.floor(Math.random() * arrayLtr.length)];
  return randomItem;

}
function lowRandom() {
  var randomItem = arrayLtrLow[Math.floor(Math.random() * arrayLtr.length)];
  return randomItem;
}

function nbrRandom() {
  var randomItem = arrayNbr[Math.floor(Math.random() * arrayNbr.length)];
  return randomItem;
}

//Function to generate the password.
function generatePassword() {

  //declare input value for password length
  var pwdLength = document.querySelector("#pwdlength").value;
  //set message for out of bound user input
  if (pwdLength>128 || pwdLength<8){
    alert("Please read the instructions");
    return;
  }
  console.log("generate");
  console.log(pwdLength);
  var pwdStr = "";
  let i = 0;
  while (i < pwdLength) {
    if (document.getElementById("Nbr").checked) {
      var nRandom = nbrRandom();
      console.log("here");
      console.log(nRandom);
      pwdStr += nRandom;
      console.log(pwdStr);
      i++;

    }
    if (document.getElementById("Lwr").checked) {
      var lRandom = lowRandom();
      pwdStr += lRandom;
      i++;
    }

    if (document.getElementById("Cpl").checked) {
      var cRandom = ltrRandom();
      pwdStr += cRandom;
      i++;
    }
    if (document.getElementById("Spcl").checked) {
      var sRandom = spcRandom();
      pwdStr += sRandom;
      i++;
    } 
    


  } 
  return pwdStr;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Write password to the #password input
function writePassword() {
  console.log("clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

}

