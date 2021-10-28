// Basic of Objects

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// }

// circle.draw()

// Factory functions

// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log('d')
//         }
//     }
// }

// console.log(createCircle(5))

// Constructor function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(2);
// console.log(circle)

// Dynamic nature of objects

// const circle = {
//     radius:1
// }

// circle.color = 'red';
// console.log(circle);

// delete circle.radius;
// console.log(circle);   

// Value & Reference

// let obj = {value: 10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj)
// console.log(obj)


// Enumerating properties of an object

// const circle = {
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }
// }

// for (let key in circle){
//     console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)){
//     console.log(key);
// }

// for (let entry of Object.entries(circle)){
//     console.log(entry);
// }

// if('radius' in circle){
//     console.log('yes')
// }


// Cloning an object

// const circle = {
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }
// }

// const another = Object.assign({color:'red'}, circle);
// const other = {...circle}

// console.log(another);
// console.log(other);

// Date

// const now=new Date();
// const date1=new Date('May 11 2018 09:00');
// const date2=new Date(2018,4,11,9);

// console.log(now.getDate(),now.getMonth(),now.getFullYear());

// Create an object and then access its property and their value from a function

// let address={
//     Street:'a',
//     city:'b',
//     zipcode:'c'
// };
// function showaddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// showaddress(address);

// factory function

// function fulladdress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode,
//     };
// }
// let address=fulladdress('a','b','c');
// console.log(address);

// constructor function

// function Createaddress(street,city,zipcode)
// {
//         this.street=street;
//         this.city=city;
//         this.zipcode=zipcode;
// }
// let address=new Createaddress('a','b','c');
// console.log(address);

// Check whether objects are same or not

// let address1=new Address('a','b','c');
// let address2=new Address('a','b','c');
// let address3=address1;

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));
// console.log(areSame(address1,address3));

// function Address(street,city,zipcode){
//         this.street=street;
//         this.city=city;
//         this.zipcode=zipcode;
//     }

// function areEqual(address1,address2){
//     return (
//         address1.street===address2.street &&
//         address1.city===address2.city &&
//         address1.zipcode===address2.zipcode
//     )
// }

// function areSame(address1,address2){
//     return address1===address2;
// }


// Creating an blog post object with comments field which is an array of objects

// let post={
//     title:'a',
//     body:'b',
//     author:'c',
//     comments:[{author:'a',body:'b'}
// ,{author:'d',body:'c'}],
// islive:true
// };

// console.log(post);


// Same as above but using constructor function

// function Post(title,body,author){
//     this.title=title;
//     this.body=body;
//     this.author=author;
//     this.view=0;
//     this.comments=[];
//     this.islive=false;
// }

// let post=new Post('a','b','c');
// console.log(post);


// Create an array of objects. e.g price range objects

let priceRange=[
    {label:'$',tooltip:'cheap',min:0,max:10},
    {label:'$$',tooltip:'medium',min:11,max:25},
    {label:'$$$',tooltip:'high',min:25,max:50}
];

let resturant=[
    {averagePerPerson: 5}
];