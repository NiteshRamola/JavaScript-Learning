// console.log('nitesh')

// let firstName;
// firstName = 'Nitesh'
// console.log(firstName);

// const age = 15;
// age = 20;
// console.log(age);

//Objects

// let person = {
//     name: 'Nitesh',
//     age: 20
// }

// console.log(person);

//Dot notation
// console.log(person.name);

//Bracket notation
// console.log(person['age']);

// Arrays

// let color = ['red', 'blue'];
// color[2] = 'black';
// console.log(color);

// Functions

// function names(name){
//     console.log('Hello ' + name);
// }

// names('Nitesh');

//Arithmatic operator

// let a=10;
// let b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//Increment

// console.log(++a);

//Decrement

// console.log(--b);

//Assignment operator

// var x=10;
// x=x+5;
// console.log(x);
// x+=6;
// console.log(x);
// x=x*3;
// console.log(x);
// x*=6;
// console.log(x);


//Comparision Operators

// let a=1;
// console.log(a>0);
// console.log(a>=1);
// console.log(a<1);
// console.log(a<=1);

//Equality Operators

// console.log('1'==1);
// console.log('1'===1);

//Ternary operator

// let points=110;
// let type=points>100?'gold':'Silver';
// console.log(type);

//Logical Operators

// console.log(true && true);  // AND
// console.log(true || false); // OR
// console.log(!true); // NOT
// console.log(false || 'nitesh');

//Bitwise Operators

// 000100 Read
// 000010 Write
// 000001 Execute

// const read = 4;
// const write = 2;
// const execute = 1;

// let myPermission = 0;

// myPermission = myPermission | read ;

// let message = (myPermission & write) ? 'yes': 'no';

// console.log(message);

//Operator Precedence

// let a=2+3*4;
// console.log(a);

// let b=(2+3)*4;
// console.log(b);

// Exercise

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a,b);