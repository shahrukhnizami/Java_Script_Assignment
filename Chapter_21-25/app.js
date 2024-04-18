//Question # 1

var firstName = prompt("Enter a first name")
var LastName =prompt("Enter a Last name")

var first = firstName[0].toUpperCase() + firstName.slice(1)
var last = LastName[0].toUpperCase() + LastName.slice(1)

var fulname = first  +" "+ last
document.write(`<h1>${fulname}</h1>`);

//Question # 2

// var mobileModel = prompt("Enter a favourite mobile Model")
// document.write(`<h1>Favourite Mobile Model ${mobileModel}</h1>`);
// document.write(`<h1>Lenght of string ${mobileModel.length}</h1>`);

//Question # 3

// var word= "Pakistani"
// document.write(`<h1>String = ${word}</h1>`);
// document.write(`<h1>Index of 'n' = ${word.indexOf("n")}</h1>`);

//Question # 4

// var word= "Hello World"
// document.write(`<h1>String = ${word}</h1>`);
// document.write(`<h1>Index of 'n' = ${word.lastIndexOf("l")}</h1>`);

//Question # 5

// var word= "Pakistani"
// document.write(`<h1>String = ${word}</h1>`);
// document.write(`<h1>Character Of Index 3 = ${word[3]}</h1>`);

//Question # 7

// var city= "Hyderabad"
// rep = "Islam"
// document.write(`<h1>City : ${city}</h1>`);
// var last=city.slice(5)
// document.write(`<h1>After replacement: ${rep + last}</h1>`);

//Question # 8

// var message = "“Ali and Sami are best friends. They play cricket and football together.”"
// var newMessage = message.replaceAll("and", "&");
// document.write(`<h1> ${message}</h1>`);
// document.write(`<h1> ${newMessage}</h1>`);

//Question # 9

// var num = 472;
// var str ="472";
// document.write(`<h1>Value ${num}</h1>`);
// document.write(`<h1>Type ${typeof(num)}</h1>`);
// document.write(`<h1>Value ${str}</h1>`);
// document.write(`<h1>Type ${typeof(str)}</h1>`);

//Question # 10

// var word = "peanuts";
// document.write(`<h1>User Input : ${word}</h1>`);
// var Uper= word.toUpperCase();
// document.write(`<h1>Upper Case : ${Uper}</h1>`);

//Question # 11

// var word = "javascript";
// document.write(`<h1>User Input : ${word}</h1>`);
// var firstLetterUper = word[0].toUpperCase() + word.slice(1);
// document.write(`<h1>First Letter Uper : ${firstLetterUper}</h1>`);

//Question # 12

// var num = 35.36 ;
// document.write(`<h1> ${num}</h1>`);
// document.write(`<h1>Type ${typeof(num)}</h1>`);
// var str = num.toString().replace(".", ""); 
// document.write(`<h1> ${str}</h1>`); 
// document.write(`<h1>Type ${typeof(str)}</h1>`);

//Question # 14


// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var userItem = prompt('Enter your Bakery item');
// for (var i = 0; i < bakery.length; i++) {
//     if (userItem.toLowerCase() == bakery[i].toLowerCase()) {
//         document.write("It's item available " + bakery[i] + " at index of  " + bakery.indexOf(bakery[i]))
//     }
//     else {
//         document.write("Its " + userItem + " item is not Available in Bakery ")
//     }
//     break
// }

//Question # 16

// var university = 'University of Karachi'
// var splited =  university.split("")
// for(i=0; i < splited.length;i++)
// {
//     console.log(splited[i])
// }

//Question # 17


// var userInput=prompt("Enter a name....")
// var last= userInput.charAt(userInput.length - 1)

// console.log("User Iuput "+userInput)
// console.log("Last Character Of Input =>"+last)

//Question # 18

// var str = "The quick brown fox jumps over the lazy dog."
// console.log("string => " + str)
// str = str.toLowerCase()
// var count = 0
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 3) == 'the') {
//         count++
//     }
// }
// console.log("Number of “The” are  => " + count)