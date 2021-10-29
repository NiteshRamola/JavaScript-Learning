// Function Declaration

// function walk(){
//     console.log('walk')
// }

// walk();

// Function expression

// const run = function(){
//     console.log('run')
// }

// run();

// Arguments

// function sum(){
//     let total = 0;
//     for (let value of arguments){
//         total += value
//     }
//     return total;
// }

// console.log(sum(5,6))

// Rest Operator

// function sum(...args){
//  return args.reduce((a,b) => a+b)
// }

// console.log(sum(5,6))


// Default Parameters

// function interest(principal, rate, years = 5){
//     return principal*rate/100*years;
// }

// console.log(interest(10000,3.5))

// Getters & Setters

// const person = {
//     firstName: 'Nitesh',
//     lastName: 'Ramola',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// person.fullName = 'John smith'
// console.log(person)

// Error handling

// const person = {
//     firstName: 'Nitesh',
//     lastName: 'Ramola',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value){
//         if(typeof value !== 'string'){
//             throw new Error('Value is not a string')
//         }
//         const parts = value.split(' ');
//         if (parts.length !== 2) {
//             throw new Error('Enter first and lastname')
//         }
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// try{
// person.fullName = 'nitesh'
// } catch(e){
//     console.log(e)
// }

// console.log(person)


// Print the sum of all the number passed in an argument

// function sum(...items){
//     return items.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4));

// Create a circle object which has two property radius and area while area is read only property

// let circle={
//     radius:1,
//     get area(){
//         return Math.PI*this.radius*this.radius;
//     }
// }
// console.log(circle.area);

// Find the number of occurences of the same element in an array also handle error which occur if we didn't pass the array

function countOccurrences(array,se){
    if(!Array.isArray(array))
    throw new Error('Invalid array');
    return array.reduce((a,c)=>{
        const occurrence=(c===se)?1:0
        return a+occurrence;
    },0);
}

try{
    const number=[1,2,3,4,1];
    const count=countOccurrences(number,1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}
