var a = 10;

document.write(`<h1>Value of a = ${a}</h1>`);
document.write(`<h1>----------------------</h1>`);
//console.log("Value Of a = "+a);
b=++a;
document.write(`<h1>Value of (++a) = ${b}</h1>`);
document.write(`<h1>Now value of a = ${a}</h1>`);
//console.log("The value Of ++a = "+b);
//console.log("Now value Of a = "+a);
c = a++;
document.write(`<h1>Value of (a++) = ${c}</h1>`);
document.write(`<h1>Now value of a = ${a}</h1>`);
//console.log("Value Of a++ = "+c);
//console.log("Now value Of a = "+a);
d=--a;
document.write(`<h1>Value of (--a) = ${d}</h1>`);
document.write(`<h1>Now value Of a = ${a}</h1>`);
//console.log("Value Of --a = "+d);
//console.log("Now value Of a = "+a);
e = a--;
document.write(`<h1>Value of (a--) = ${e}</h1>`);
document.write(`<h1>Now value Of a = ${a}</h1>`);
//console.log("Value Of a-- = "+e);
//console.log("Now value Of a = "+a);

////Geomatric Exression
document.write(`<h1>----------------------</h1>`);
var vFa = 2
var vFb = 1
document.write(`<h1>Value of a = ${vFa}</h1>`);
document.write(`<h1>Value of b = ${vFb}</h1>`);

document.write(`<h1>(--a) - (--b) + (++b) + (b--) =  .....?</h1>`);
document.write(`<h1>(--a) - (--b) + (++b) + (b--)  = ${--vFa} - ${--vFb} + ${++vFb} + ${vFb--}</h1>`);
//document.write(`<h1>(--a) = ${--vFa} </h1>`);
//document.write(`<h1>(--a) - (--b) = ${--vFa} - ${--vFb} </h1>`);
//document.write(`<h1>(--a) - (--b) + (++b)  = ${--vFa} - ${--vFb} + ${++vFb}</h1>`);
//document.write(`<h1>(--a) - (--b) + (++b) + (b--)  = ${--vFa} - ${--vFb} + ${++vFb} + ${vFb--}</h1>`);

//console.log("Now value Of a = "+vFa);
//console.log("Now value Of b = "+vFb);
//vFa = --vFa
//console.log("Now value Of --a = "+vFa);
//vFb =--vFb
//console.log("Now value Of --b = "+vFb);
//console.log("Now value Of (--a)-(--b) = "+(vFa - vFb));
//console.log("Now value Of (--a)-(--b) + (++b) = "+(vFa - vFb + (++vFb)));

//console.log("Now value Of (--a)-(--b) + (++b)+(b--) = "+((--vFa) - (--vFb) + (++vFb)+(vFb--)));


// user name print
var userName= prompt("Enter User Name");
document.write(`<h1>User Name Is = ${userName}</h1>`);

// create a table
var notable= prompt("Enter a Number to create Table");
document.write(`<h1>${notable} X 1 = ${notable*1}</h1>`);
document.write(`<h1>${notable} X 2 = ${notable*2}</h1>`);
document.write(`<h1>${notable} X 3 = ${notable*3}</h1>`);
document.write(`<h1>${notable} X 4 = ${notable*4}</h1>`);
document.write(`<h1>${notable} X 5 = ${notable*5}</h1>`);
document.write(`<h1>${notable} X 6 = ${notable*6}</h1>`);
document.write(`<h1>${notable} X 7 = ${notable*7}</h1>`);
document.write(`<h1>${notable} X 8 = ${notable*8}</h1>`);
document.write(`<h1>${notable} X 9 = ${notable*9}</h1>`);
document.write(`<h1>${notable} X 10 = ${notable*10}</h1>`);




/////Marks Sheet

var obEng= +prompt("Enter English Marks");
var obMath= +prompt("Enter Math Marks");
var obUrdu= +prompt("Enter Urdu Marks");

var tEng = 100;
var tMath = 100;
var tUrdu = 100;

document.write(`<h3>Subject---------- Total Marks ---------- Obtained ---------- Precentage</h3>`);
document.write(`<h3>English -------------${tEng}---------------------${obEng}------------------${obEng/tEng*100}%</h3>`);
document.write(`<h3>Math ----------------${tMath}--------------------${obMath}------------------${obMath/tMath*100}%</h3>`);
document.write(`<h3>Urdu ----------------${tUrdu}--------------------${obUrdu}------------------${obUrdu/tUrdu*100}%</h3>`);

document.write(`<h3>Total ----------------${tUrdu+tMath+tUrdu}--------------------${obEng+obMath+obUrdu}------------------${(obEng+obMath+obUrdu) / (tUrdu+tMath+tUrdu) * 100}%</h3>`);




// console.log("Percentage Of English "+((obEng/tEng)*100)+"%")
// console.log("Percentage Of Math "+((obMath/tMath)*100)+"%")
// console.log("Percentage Of Urdu "+((obUrdu/tUrdu)*100)+"%")
// console.log("Toal  Of Percentage "+(obEng+obMath+obUrdu)/(tEng+tMath+tUrdu)*100+"%")






