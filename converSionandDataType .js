//Typeof() operator show the type of given data
// let fName = "vishal shinde";
// let rollNo = 10
// console.log(typeof(fName));
// console.log(typeof(rollNo));
// console.log(typeof(10 + " "))


//covert number to String.
// if you convert any number into String you need to add (or concat ) empty string after number.
var age = 20;
// age = age+" ";
// console.log(typeof age);

// another way

age = String(age);
console.log(age);
console.log(typeof age);

// convert String to number
//if you convert number into string you add the + (plus sign) before the string value or variable.
let age1 = "30";
// let newAge=(+age1);
// console.log(typeof newAge);

// anoter way..
age1 = Number(age1);
console.log(age1)
console.log(typeof age1)

// data type in javascript (it is premitive data type)
//1.String
//2.number

//*3.undefined
//if you defined any variable but not assigned any vlaue it show undefined.
let firstName;
console.log(typeof firstName ,firstName);
firstName ="vishal";
console.log(typeof firstName,firstName)






//4.*null
//if you defined any variable and assigned any value (i.e not assignd value it show null)
let fName = null;
console.log(fName);
fName="vishal";
console.log(typeof fName , fName);

//* Type of null 
// null type is object type. so it is but or error in javascript 
console.log(typeof null);


//5.*BigInt
//The max length of number in javascript is....
console.log(Number.MAX_SAFE_INTEGER); //it show max length of Number but if you want to show 
//the this number more then max safe then you go for BigInt.
// let number =123;
// console.log(number);
let num =BigInt(1234567890345672364484955050);
// also you defined 
let num1 = 123n; // it also show BigInt.
console.log(num);
console.log(num1);
console.log(num1 + num);


//6.*boolean
//it return ture or flase.
console.log(typeof true);

//7.symbol

//8.comparision operator



