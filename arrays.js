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

let num = [1,2,3,4]

// for (let n of num){
//     console.log(n)
// }

num.forEach(function(n,i){
    console.log(n,i)
})
