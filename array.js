// Array--> array it is refrences type
//array store the multiple type of element in single variable name or single unit
//ordered colletion of item
//array are mutable.


// let fruits = ['apple' ,'Bananna' , 'mango' ,'cheri']
// console.log(fruits); //display all array
// console.log(fruits[2]); // access perticular element

// let number = [10,20,30,40,50] // we have to store number
// console.log(number)

//  also we have to store the multiple type of data in string...
// let mixed = ['vishal','shinde',10,20.3,null, undefined];
// console.log(mixed);

//  Replace value of array
// console.log(mixed[2]='akshay');
// console.log(mixed);

// fruits[0] = "waterMailon";
// console.log(fruits);
// console.log(typeof fruits); // type of given array like furit is object

// How to find out given object is array or not
// let name =['vishal', 'shinde', 'akshay' ,'pankaj']
// console.log(Array.isArray(name));
// console.log(Array.isArray(fruits));

//Array method()

//pop --> pop method return last element of the array. 
// let fruits = ['mango','apple','banana','watermalon'];
// let newArray = fruits.pop();
//console.log(fruits.pop()) --> its return only removed element.
// console.log(newArray); //if you store pop result in new array so its return the last removed element
// console.log(fruits); // if you print the arry is return remaining array.

// push() --> add a element at ending.
// let arry = ['vishal','shinde','akshay','pankaj']
// let newarray= arry.push('prasad'); //add the element at the end of array
// //if you push the array and store in new array it return length
// console.log(newarray); // it return  length 
// console.log(arry); // if you print origional array it return array element.
                    
//unshift()
//you add the element in the starting
// let arry = ['vishal','shinde','akshay','pankaj'];
// let newarry = arry.unshift("ram"); // if you store in new varialbe it return new length
// console.log(newarry);
// console.log(arry);//return hole array with added element

//Shift() --> Remove the element form starting.
// let arry = ['vishal','shinde','akshay','pankaj'];
//  let newarr=arry.shift(); // if you stored in the new variable it return the removed element
//  console.log(newarr);   //it return removed arr
// console.log(arry); //if you print origional array it return remaining array.

// Note
//1. push and pop is fast as compare to shift() and unshift();












