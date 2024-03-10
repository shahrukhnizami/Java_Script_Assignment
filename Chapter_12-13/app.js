
//Question   #  1

var input = prompt('Enter a number or uppercase or lowercase letter')
var upperCase = input.toUpperCase;
var lowerCase = input.toLowerCase;
var numInput = Number(input);
var charCode = input.charCodeAt(0)
if (Number.isInteger(numInput) == true) { document.write(`<h1>${input} is a number </h1>`) }
// 65 to 90 for uppercase
// 97 to 122 for lowercase
else if (charCode >= 65 && charCode <= 90) { document.write(`<h1>${input} is an Upercase </h1>`) }
else if (charCode >= 97 && charCode <= 122) { document.write(`<h1>${input} is an lowerCase </h1>`) }
else { document.write(`<h1>${input} is a special character </h1>`) }

//Question   #  2

// var num1 = +prompt("Enter A First Number")
// var num2 = +prompt("Enter A Second Number")
// if (num1 === num2) { document.write(`<h1>${num1} are egual to ${num2}</h1>`); }
// else if (num1 > num2) { document.write(`<h1>${num1} The Greater than number ${num2} </h1>`); }
// else if (num1 < num2)
//     document.write(`<h1>${num1} The Less than number ${num2} </h1>`);
// else
//     document.write(`<h1>Please add an integer!</h1>`);

//Question   #  3

// // check if number is greater than 0
// var input = prompt('Enter a number')
// if (input > 0) { document.write(`<h1>The number is positive</h1>`); }
// // check if number is 0
// else if (input == 0) { document.write(`<h1>The number is zero</h1>`); }
// // if number is less than 0
// else { document.write(`<h1>The number is negative</h1>`); }


//Question   #  4

// var char = prompt('Enter a alphabet...')
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
// { document.write(`<h1> "${char}" The character is a Vowel</h1>`) }
// else 
// { document.write(`<h1>"${char}" The character is a Consonant</h1>`) }

//Question   #  5 (Username and password validation)

// var user = prompt("Please Enter a user")
// var password = prompt("Please Enter a password")

// if (user == "admin" && password == "admin")
// {document.write(`<h1> Login Sucess fully</h1>`)}
// else if (user != "admin" && password == "admin")
// {document.write(`<h1> Please Valid User Name</h1>`)}
// else if (user == "admin" && password != "admin")
// {document.write(`<h1> Please Valid Password</h1>`)}
// else{document.write(`<h1> Please Input User name and Password`)}

//Question   #  7 (24 clock)

// var user = +prompt("Please Enter A Time in 24 Hour")

// if (user >= 0 && user < 12)
// {document.write(`<h1> Good Morning</h1>`)}
// else if (user >= 12 && user < 17)
// {document.write(`<h1> Good Afternoon</h1>`)}
// else if (user >= 17 && user < 21)
// {document.write(`<h1> Good Evening</h1>`)}
// else if (user >= 21 && user < 23.9)
// {document.write(`<h1> Good Night</h1>`)}
// else {document.write(`<h1> Please valid time beteween 24 hour</h1>`)}



