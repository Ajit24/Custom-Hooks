var phoneNumber = "95~630242";
var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if (phoneNumber.match(phoneNumberRegex)) {
    console.log("valid phone number");
} else {
    console.log("invalid phone number");
}


var num = "345365~657655";
var numberRegex = /^[+-]?\d+(\.\d+)?$/;
if (numberRegex.test(num)) {
    console.log("valid number");
} else {
    console.log("invalid number");
}



// var num = 5;
// if(num > 0 && num < 100)
//     console.log("valid number");
// else
//     console.log("invalid number");