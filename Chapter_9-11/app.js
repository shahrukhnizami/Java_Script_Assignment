/////City




var city = prompt("Enter your city")

if 
(city=="karachi")
 {
    document.write(`<h1>${city} is city of light</h1>`);  
}
else
{
document.write(`<h1>${city} is city of pakistan`)
}


 //Gender 


var gender = prompt("Enter a gender")

if 
(gender=="male")
 {
    document.write(`<h1>Good Morning Sir</h1>`);  
}
else if(gender=="female")
{
    document.write(`<h1>Good Morning Ma’am.</h1>`);  
}



//Tarffic  signal


var signal_color = prompt("Enter a color")

if 
(signal_color=="red")
 {
    document.write(`<h1>Must Stop</h1>`);  
}
else if(signal_color=="yellow")
{
    document.write(`<h1>Ready to move</h1>`);  
}
else if(signal_color=="green")
{
    document.write(`<h1>Move now</h1>`);  
}

//Car fuel alert


var liter = +prompt("Enter a remaing fuel in car..?")

if (liter <= 0.25) {

    document.write(`<h1>“Please refill the fuel in your car”</h1>`);  
}
else{
    document.write(`<h1>“You can derive a car”</h1>`);  
}


/// VAlue Of A


var a = prompt("Enter a vlue of a");
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}




// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }



// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }



// var car=10
// var cat =5

// if(car < cat){
// alert("car is smaller than cat");
// }


////Mark Sheet

 var obtainMarks= prompt("Enter Your  Obtain Marks")
 var totalMarks= prompt("Enter Your  Total Marks")
 var Percent = obtainMarks/totalMarks*100


 if (Percent >= 80)
 { 
    document.write(`<h1>“Total Marks ${totalMarks}”</h1>`); 
    document.write(`<h1>“Marks Obtained ${obtainMarks}”</h1>`); 
    document.write(`<h1>“Percentage is ${Percent}%”</h1>`);
    document.write(`<h1>“You Grade is A-one”</h1>`); 
    document.write(`<h1>“Remarks : Excelent”</h1>`); 
 }
 else if (Percent >= 70)
 { 
    document.write(`<h1>“Total Marks ${totalMarks}”</h1>`); 
    document.write(`<h1>“Marks Obtained ${obtainMarks}”</h1>`); 
    document.write(`<h1>“Percentage is ${Percent}%”</h1>`);
    document.write(`<h1>“You Grade is A”</h1>`); 
    document.write(`<h1>“Remarks : Good”</h1>`); 

 }
 else if (Percent >= 60)
 { 
    document.write(`<h1>“Total Marks ${totalMarks}”</h1>`); 
    document.write(`<h1>“Marks Obtained ${obtainMarks}”</h1>`); 
    document.write(`<h1>“Percentage is ${Percent}%”</h1>`);
    document.write(`<h1>“You Grade is B”</h1>`); 
    document.write(`<h1>“You need to improve”</h1>`); 

 }
 else{
    document.write(`<h1>“Total Marks ${totalMarks}”</h1>`); 
    document.write(`<h1>“Marks Obtained ${obtainMarks}”</h1>`); 
    document.write(`<h1>“Percentage is ${Percent}%”</h1>`);
    document.write(`<h1>“Fail”</h1>`); 
    document.write(`<h1>“Sorry”</h1>`); 
 }


//// Even oddd number



var number = +prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    document.write(`<h1> ${number} <br>The number in even.</h1>`); 
}

// if the number is odd
else {

     document.write(`<h1> ${number} <br>The number is odd.</h1>`); 
}


//   Temperature


var temp = prompt("Enter Temperature........ ")
if (temp > 40) {
   document.write(`<h1> ${temp} <br>It is too hot outside.</h1>`);
}
else if (temp > 30) {
   document.write(`<h1> ${temp} <br>The Weather today is Normal.</h1>`);
}
else if (temp > 20) {
   document.write(`<h1> ${temp} <br>Today’s Weather is cool.</h1>`);
}
else if (temp > 10) {
   document.write(`<h1> ${temp} <br>OMG! Today’s weather is so Cool.</h1>`);
}


// Calculator

var operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
var number1 = +prompt('Enter first number: ');
var number2 = +prompt('Enter second number: ');

var result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
document.write(`<h1> ${number1} ${operator} ${number2} = ${result}</h1>`);




