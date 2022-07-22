//Destructuring means to break down a complex structure into simpler parts.
//that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//That is, we can extract data from arrays and objects and assign them to variables.

// const arr = ['vishal','ajinkaya','prasad']
// let myarr1 = arr[0];
// let myarr2 = arr[1];
// let myarr3 = arr[2]
// console.log(myarr1);
// console.log(myarr2);
// console. log(myarr3);
// we can extract data form array and assing to the variable but it array provide destruting concept in shortcut way

// const arr = ['vishal','ajinkaya','prasad']
// const [myarr1,myarr2,myarr3] = arr;
// console.log(myarr1);
// console.log(myarr2);
// console.log(myarr3)

//Note
//1. in array having 3 element but you destructuring only tow element so it show only tow element
//2. also in array having the only one element but in array distructuring having more element remaining elements show undefined
// const arr = ['vishal','ajinkaya','prasad']
// const [myarr1, ,myarr2] = arr;  //in destructuring if you want skip some element in arrayDestructuting so empty the space.
// console.log(myarr1);
// console.log(myarr2);

// const arr = ['vishal','ajinkaya','prasad','kartic','pankaj']
//  const [myarr1, ,myarr2] = arr;  //in destructuring if you want skip some element in arrayDestructuting so empty the space.
//  console.log(myarr1);
//  console.log(myarr2);
// if you want having another array form given array so you can used slice metood

// const newarray = arr.splice(2);
// console.log(newarray);

// *instead or that remaining parameter we to get by using Rest Parameter.....
// *The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
//* The ...restParam bundles all the extra parameters into a single array,

const arr = ['vishal','ajinkaya','prasad','kartic','pankaj']
 const [myarr1, ,myarr2,...arguments] = arr;  //in destructuring if you want skip some element in arrayDestructuting so empty the space. and to access the rest of the element you access by using ...rest element.
 
 console.log(myarr1);
 console.log(myarr2);
 console.log(arguments);

 //instructs the computer to add the rest of the user-supplied values into an array. 
