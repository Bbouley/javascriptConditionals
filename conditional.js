var num = prompt('what is your number with dashes?');

if (num.charAt(3) && num.charAt(7) === '-'){
  alert('This is a valid Phone Number');
} else {
    alert('This is not a valid Phone Number');
};

var birthdate = prompt('What is your DOB, in the format 00/00/00?');

if (birthdate.charAt(2) && birthdate.charAt(5) === '/' && birthdate.length === 8){
  alert('Valid Birth Date');
} else {
    alert('Invalid Birth Date');
  }

var postalcode = prompt('What is your postal code?');

if (postalcode.charAt(5) === '-' || postalcode.length === 5){
  alert('Valid Postal Code');
} else {
  alert('Invalid Postal Code');
}
