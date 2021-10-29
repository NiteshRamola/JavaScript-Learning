// Adding elements to an array

// const n = [3,4]

// n.push(5,6) // end
// console.log(n)

// n.unshift(1,2) // start
// console.log(n)

// n.splice(2 , 0, 'a', 'b') // middle
// console.log(n)

// Finding Elements (primitives)

// const n = [1,2,3,1,4];

// console.log(n.indexOf(3));
// console.log(n.lastIndexOf(1));
// console.log(n.includes(1));

// Finding Elements (reference)

// const courses = [
//     {id:1,name: 'a'},
//     {id:2, name:'b'}
// ];

// const course = courses.find(function(course){
//     return course.name === 'b'
// });

// const course = courses.findIndex(function(course){
//     return course.name === 'c'
// });

// console.log(course)

// Removing element from an array

// const n = [1,2,3]

// let last= n.push() // end
// console.log(last)

// let first= n.shift() // start
// console.log(first)

// n.splice(2,1) // middle
// console.log(n)

// Emptying an Array

// let n = [1,2,3,4]

// n.splice(0, n.length)
// n.length = 0;

// console.log(n)

// Combining and Slicing Arrays

// let n1 = [1,2,3,4]
// let n2 = [1,2,3,4]

// console.log(n1.concat(n2))

// console.log(n1.slice(0,3))

// Spread operator

// let n1 = [1,2,3,4]
// let n2 = [1,2,3,4]

// let n3 = [...n1, ...n2]

// console.log(n3)

// Iterating over an array

// let num = [1,2,3,4]

// for (let n of num){
//     console.log(n)
// }

// num.forEach(function(n,i){
//     console.log(n,i)
// })


// Joining Arrays

// const numbers=[1,2,3,4]
// const joined=numbers.join(',')
// console.log(joined);

// const message='This is my first message'
// const parts=message.split(' ');
// console.log(parts);
// const combined=parts.join('-');
// console.log(combined);

// Sorting Arrays

// const array=[2,1,3];
// array.sort();
// console.log(array);

// array.reverse();
// console.log(array);

// const course = [
//     {id:1, name:"Nitesh"},
//     {id:2, name:"Aman"}
// ]

// course.sort(function(a,b){
//     if(a.name<b.name) return -1;
//     if(a.name>b.name) return 1;
//     return 0;
// })

// console.log(course)

// Testing elements of an array

// const number=[1,2,3,4];
// const num=[1,2,3,-1,4];

// const allPositive=number.every(value=> value>=0);
// console.log(allPositive);

//for -ve value
// const allPositive1=num.every(value=> value>=0);
// console.log(allPositive1);

//some() it will show true if only one value is positive in an array
// const atLeastOne=num.some(value=> value>=0);
// console.log(atLeastOne);

// Filtering an array

// const n=[10,15,18,20,25];
// const flt=n.filter(n=> n>=18);
// console.log(flt);

// Mapping an array

// const n=[1,-1,2,3];

// const filtered = n.filter(n => n>0);
// const items = filtered.map(n => ({value: n}))

// console.log(items);


// Reducing Array

// const number = [1,-1,3,4]

// const sum = number.reduce((a, c) => (a + c))
// console.log(sum)


// Create an array starting from min value to max value passed in function

// function createArray(min, max){
//     const output = [];
//     for (let i= min; i<= max; i++){
//         output.push(i)
//     }
//     return output;
// }

// console.log(createArray(-1,5))


// Create a function which check if an given element is in array or not

// const num = [1,2,3,4]

// function include(arr, check){
//     for (i = 0; i < arr.length; i++){
//         if(arr[i] === check){
//             return true
//         }
//     }
//     return false;
// }

// console.log(include(num, 5))


// Exclude the passed values from an array

// const num = [1,2,3,4]

// function except(arr, exc){
//     const out = []
//     for (let element of arr){
//         if(!exc.includes(element)){
//             out.push(element)
//         }
//     }
//     return out
// }

// const out = except(num, [1,3])

// console.log(out)

// Move the elements of an array into new position

// const num = [1,2,3,4]

// function move(arr, i, offset){
//     const position = i + offset
//     if(position >= arr.length || position < 0){
//         return Error('Invalid offset');
//     }

//     const out = [...arr];
//     const rm = out.splice(i, 1)[0];
//     out.splice(position, 0, rm);
//     return out
// }

// console.log(move(num,2,4))


// Find the number of occurences of the same element in an array

// const num = [1,2,3,4,1,2]

// function count(arr, sr){
//     let occurences = 0;
//     for(i=0; i<arr.length; i++){
//         if(arr[i] === sr){
//             occurences++;
//         }
//     }
//     return occurences
// }

// console.log(count(num, 5))

// Find the maximum number present in an array

// const num = [-8,-2,-6,-3,-4]

// function lar(arr){
//     if (arr.length === 0) return undefined;
//     // let lar = arr[0];
//     // for(let element of arr){
//     //     if(element > lar){
//     //         lar = element;
//     //     }
//     // }
//     // return lar;

//     return arr.reduce((a,b) => (a>b) ? a : b);
// }

// console.log(lar(num))

// Filtering the items from an array of objects and then sort them 

const movie = [
    {title: 'a', year:2019, rating:4},
    {title: 'b', year:2015, rating:2},
    {title: 'c', year:2019, rating:3},
    {title: 'd', year:2019, rating:4.5},
]

const res = movie
    .filter(m => m.year === 2019 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(res)