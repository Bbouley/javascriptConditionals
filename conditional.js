var num = prompt('what is your number with dashes');

if (num.charAt(3) && num.charAt(7) === '-'){
  alert('This is a valid Phone Number');
} else {
    alert('This is not a valid Phone Number');
};

var birthdate = prompt('what is your DOB, in the format 00/00/00');

if (birthdate.charAt(2) && birthdate.charAt(5) === '/'){
  alert('Valid Birth Date');
} else {
    alert('Not a Valid Birth Date');
  }
