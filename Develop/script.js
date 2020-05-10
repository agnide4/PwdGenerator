

//Data needed for functions
var arraySpc = [];
var arrayLtr = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var arrayLtrLow = [];
var arrayNbr = [0,1,2,3,4,5,6,7,8,9];



//Functions for creating lower case array
for (i= 0 ; i < arrayLtr.length; i++) {
  arrayLtr[i].Tolowercase();
  arrayLtrLow.push;
  i++;
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
