//  Question # 7

// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M .Phil", "PhD"];

// document.write(`<div> <h1>QUALIFICATIONS </h1>
// <ol >
// <li>${degrees[0]}</li>
// <li>${degrees[1]}</li>
// <li>${degrees[2]}</li>
// <li>${degrees[3]}</li>
// <li>${degrees[4]}</li>
// <li>${degrees[5]}</li>
// <li>${degrees[6]}</li>
// <li>${degrees[7]}</li>

// </ol></div>`);

//  Question # 8 (Percentage%)

// var student_Name =["Ammar","Bilal","Usman"];
// var score =[320,230,480];


// document.write(`<h1> Score of  ${student_Name[0]} is equal to ${score[0]} . Percntage : ${score[0]/500*100} % </h1>`)
// document.write(`<h1> Score of  ${student_Name[1]} is equal to ${score[1]} . Percntage : ${score[1]/500*100} % </h1>`)
// document.write(`<h1> Score of  ${student_Name[2]} is equal to ${score[2]} . Percntage : ${score[2]/500*100} % </h1>`)
 
//  Question # 9

//(A) Array unshift method (Add start of array)

// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.unshift("Hammad");
// console.log(studesnts);
// console.log(returnvalue);

//(B) Array push method (Add end of array)


// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.push("Umer","Hammad") 
// console.log(studesnts)
// console.log(returnvale)

//(C) Array unshift method (Add two more start of array)
// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.unshift("Hammad","Aslam");
// console.log(studesnts);
// console.log(returnvalue);

//(D) Array shift method (Delete start of array)

// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.shift();
// console.log(studesnts);
// console.log(returnvalue);

// (E)Array pop method (Delete Last of array)

// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.pop();
// console.log(studesnts);
// console.log(returnvale);


//(F)Array spice method (Add new mid  of array)

// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.splice(1,0,"irshad" );
// console.log(studesnts);
// console.log(returnvale);


//  Question # 11


// var cities =["karachi","Lahore","Islamabad" , "Quetta" , "Pashawar"]
// var returnValue = cities.slice(2,4)
// document.write(`<h2> ${cities}</h2>`)
// document.write(`<h2> ${returnValue}</h2>`)


//  Question # 12

// var arr = ['This' , 'is' ,  'my', 'cat'];
// document.write(`<h2> ${arr}</h2>`)
// document.write(`<h2> ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}</h2>`)

//  Question # 13(First come First out)

// var device =["Keyboard","Mouse","Printer","Monitor"]
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)


//  Question # 14(Last come Last out)

// var device =["Keyboard","Mouse","Printer","Monitor"]
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)


var brand=["Samsung","Nokia","LG","Motorola"]

document.write(`<div class="dropdown">
<button class="dropbtn">Dropdown</button>
<div class="dropdown-content">
  <a href="#">${brand[0]}</a>
  <a href="#">${brand[1]}</a>
  <a href="#">${brand[2]}</a>
  <a href="#">${brand[3]}</a>
</div>
</div>`)


