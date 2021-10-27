// If-Else

// let hour = 15

// if(hour >= 6 && hour < 12){
//     console.log('Good morning');
// } else if (hour >= 12 && hour < 18){
//     console.log('good afternoon')
// }
// else {
//     console.log('good evening')
// }

// Switch Statement

// let role = 'owner';

// switch(role){
//     case 'guest':
//         console.log('guest');
//         break;
//     case 'owner':
//         console.log('owner');
//         break;
//     default:
//         console.log('unknown');
// }

// For Loop

// for(let i = 0; i <= 5; i++){
//     console.log("No-", i);
// }

// while loop

// let i = 0;

// while (i<=5){
//     console.log("No-", i);
//     i++;
// }

// Do While loop

// let i = 0;

// do{
//     console.log("No-", i);
//     i++;
// } while(i<=5);

// Infinite Loop

// while(true){
//     console.log('hello');
// }

// For in loop

// const person = {
//     name: 'Nitesh',
//     age: 20
// }

// for(let key in person){
//     console.log(key, person[key])
// }

// For of loop

// const colors = ['red', 'blue', 'green']

// for (let color of colors){
//     console.log(color)
// }

// Break & Continue

// let i = 0;
// while(i <= 10){
//     // if(i===5) break;
//     if(i % 2 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Exercise 

// Max of two number

// function max(a,b){
//    return (a>b) ? a: b;
// }

// let number = max(8,5)
// console.log(number)

// Image landscape or vertical

// function landscape(w, h){
//     return (w>h);
// }

// console.log(landscape(58,56))

// FizzBuzz

// function fizzbuzz(x){
//     if((x % 3===0) && (x%5 ===0)){
//         return 'FizzBuzz';
//     }
//     if(x % 3===0){
//         return 'Fizz';
//     }
//     if(x % 5===0){
//         return 'Buzz';
//     }
//     return x;
// }

// console.log(fizzbuzz(22))

// Speed Limit

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint){
//         console.log('Ok');
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if(points >= 12){
//             console.log("Suspended");
//         } else{
//             console.log(points);
//         }
//     }
// }

// checkSpeed(129)

// Even Odd

// function showNumber(x){
//     for(let i = 1; i<=x; i++){
//         if(i%2===0){
//             console.log(i, 'even');
//         } else{
//             console.log(i, 'odd');
//         }
//     }
// }

// showNumber(10)

// Return no of truthy elements in an array

// function countTruthy(arr){
//     let count = 0;
//     for (let value of array){
//         if(value){
//             count++;
//         }
//     }
//     return count
// }

// const array = [0, null, undefined, 1,2]
// console.log(countTruthy(array))

// Print objects property value and name if string

function showProperty(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key])
        }
    }
}

const movie = {
    title: 'a',
    year: 2012,
    des: 'afa'
}

showProperty(movie)