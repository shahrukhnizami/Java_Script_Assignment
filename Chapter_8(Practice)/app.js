// Quesstion # 1

var arr = [1, 2, 3, 4, 5]

for (var i = 0; i < arr.length; i++) {
  if(arr[i]%2 != 0) {
    arr[i] = arr[i]*2;
  }
}

console.log(arr);


// Quesstion # 2


// var alpha = 'abcdefghijklmnopqrstuvwxyz'
// var numbers = '1234567890'
// var password = prompt('Password')

// var minLength = false
// var alphaHe = false
// var numberHe = false

// if (password.length >= 6) minLength = true
// if (!isNaN(password[0]))   password = true
// for (var i = 0; i < password.length; i++) {
//     console.log(password[i])
//     if (alpha.indexOf(password[i]) !== -1) {
//         alphaHe = true
//     }
//     if (numbers.indexOf(password[i]) !== -1) {
//         numberHe = true
//     }
// }

// if (password && minLength && alphaHe && numberHe) {
//     alert('Password is ok')
// } else {
//     alert('Password is not ok')

// }

// Quesstion # 3

// var a=[1,2,3,4,5,6,7,8,9,10];
// var b = [2,4,5,7,11,15];
// var new_array=[]
// for(var i=0;i<a.length;i++){
//     for(var j=0;j<b.length;j++){
//         if(a[i]==b[j]){            
//             new_array.push(a[i])
            
//         }
//     }
// }
// console.log(new_array)


// Quesstion # 4

// var number = parseInt(prompt("Enter a positive number: "));
// var isPrime = true;


// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {

    
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// else {
//     console.log("The number is not a prime number.");
// }


// Quesstion # 5

// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],[7, 8, 9],
//     [10, 11, 12, 13, 14, 15]
// ];
// var flatArray = [].concat.apply([], arr);
// console.log(flatArray)
