var a = 10;
console.log("Value Of a = "+a);
b=++a;
console.log("The value Of ++a = "+b);
console.log("Now value Of a = "+a);
c = a++;
console.log("Value Of a++ = "+c);
console.log("Now value Of a = "+a);
d=--a;
console.log("Value Of --a = "+d);
console.log("Now value Of a = "+a);
e = a--;
console.log("Value Of --a = "+e);
console.log("Now value Of a = "+a);

////Geomatric Exression

var vFa = 2
var vFb = 1
console.log("Now value Of a = "+vFa);
console.log("Now value Of b = "+vFb);
vFa = --vFa
console.log("Now value Of --a = "+vFa);
vFb =--vFb
console.log("Now value Of --b = "+vFb);
console.log("Now value Of (--a)-(--b) = "+(vFa - vFb));
console.log("Now value Of (--a)-(--b) + (++b) = "+(vFa - vFb + (++vFb)));

console.log("Now value Of (--a)-(--b) + (++b)+(b--) = "+((--vFa) - (--vFb) + (++vFb)+(vFb--)));


/////Marks Sheet


var obEng= 54;
var obMath= 54;
var obUrdu= 48;

var tEng = 100;
var tMath = 100;
var tUrdu = 100;

console.log("Percentage Of English "+((obEng/tEng)*100)+"%")
console.log("Percentage Of Math "+((obMath/tMath)*100)+"%")
console.log("Percentage Of Urdu "+((obUrdu/tUrdu)*100)+"%")
console.log("Toal  Of Percentage "+(obEng+obMath+obUrdu)/(tEng+tMath+tUrdu)*100+"%")






