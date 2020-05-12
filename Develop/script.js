

//Data needed for functions
var arraySpc = ['@', '$', '%', '&', '!', '#'];
let arrayLtr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arrayLtrLow = arrayLtr.toLocaleString().toLowerCase().split(',');
var arrayNbr = [0,1,2,3,4,5,6,7,8,9];
var pwdLength = document.querySelector("pwdlength");

function arrayRandom(Array){
    var randomItem = Array[Math.floor(Math.random()*Array.length)];
    
  }

function generatePassword(){
  var pwdStr;
let i = 0;
while (i<pwdLength){
  if (document.getElementById("Nbr").checked = true){
    var nRandom = arrayRandom(arrayNbr);
    pwdStr += nRandom;

  }
  if (document.getElementById("Lwr").checked = true){
    var lRandom = arrayRandom(arrayLtrLow);
    pwdStr += lRandom;
  }

  if (document.getElementById("Cpl").checked = true){
    var cRandom = arrayRandom(arrayLtr);
    pwdStr += cRandom;
  }
  if (document.getElementById("Spcl").checked = true){
    var sRandom = arrayRandom(arraySpc);
    pwdStr += sRandom;
  }
}
return pwdStr;

}











// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
