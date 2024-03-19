//     Question # 2


var matric = [[0,1,2,3],
              [1,0,1,2],
              [2,1,0,1]]

for (var row of matric){
     var rowString= row.join(' ');
    document.write(`<h2>${rowString}</h2>`)

}



//    Question # 3

//  for(var i=1; i<=10; i++ )
//  {document.write(`<h2>${i}</h2>`)}

//    Question # 4

// var num1 = prompt("Enter a number for create a table")
// var limit = prompt("Enter lenght multiplication table")
// for (var i=1; i<=limit ; i++)
// {document.write(`<h2>${num1} * ${i} = ${num1*i} </h2>`)}


//    Question # 5


// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']

// for (i=0; i < fruits.length; i++)
// {
//     document.write(`<h2>${fruits[i]}</h2>`)
  
// }
// for (i=0; i < fruits.length; i++)
// {
// document.write(`<h2>Element at index ${i} is ${fruits[i]}</h2>`)
// }

//    Question # 6(a)

// (a)  1 to 15

// var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for (i=0; i<series.length;i++)
// {{document.write(`<h2>${series[i]}</h2>`)}}
// //document.write(`<h2>${series}</h2>`)


// (b)  reverse seeries

// var series  = [1,2,3,4,5,6,7,8,9,10];
// {{document.write(`<h2>${series.reverse()}</h2>`)}}

// (c)Even seeries

// var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var even = [];
// for(let i = 0; i < series.length; i++) {
//        if (series[i] % 2 == 0)
//        even.push(series[i]);
// }
// document.write(`Even numbers Series: ${even}`);

// (c)odd seeries

// var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var odd = [];
// for(let i = 0; i < series.length; i++) {
//        if (series[i] % 2 !== 0)
//        odd.push(series[i]);       
// }
// document.write(`Even numbers Series: ${odd}`)

//(e)2K seeries

// var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var even = [];
// for(let i = 0; i < series.length; i++) {
//        if (series[i] % 2 == 0)
//        even.push(series[i]+"k");
// }
// document.write(`Even k Series: ${even}`);

// Question # 7

// var Bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt("Enter city name");
// var valueOfA=false;
// for (var i = 0; i < Bakery.length; i++) {
//     // console.log(cities[i])
//     if (userInput === Bakery[i]) {
//         document.write(`<h2>${userInput} is availble in bakery on index of ${i}</h2>`)
//         valueOfA = true
//         break;
//     }
// }
// if (valueOfA === false) {
//     document.write(`<h2> ${userInput}is not availble in bakery </h2>`)
// }

// Question # 8(Find the largest number)


   
// var arr = [3, 6, 2, 56, 32, 5, 89, 32,95];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// document.write(`<h2>Array Item  ${arr}</h2>`);
// document.write(`<h2> The largest number is  ${largest}</h2>`);

// Question # 9(Find the small number)


// var arr = [3, 6, 2, 56, 32, 5, 89, 32,95];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < largest ) {
//     largest = arr[i];
//   }
// }
// document.write(`<h2>Array Item  ${arr}</h2>`);
// document.write(`<h2> The Small number is  ${largest}</h2>`);

// Question # 10

// for (var i=1; i<=20; i++){
//     document.write(`<h2> ${i*5}</h2>`);
// }


