// string is sequences of character and enclosed in single and double quates.

//String indexing
//in length property spaces are count.

// let firstName="vishal shinde";
// console.log(firstName);
// console.log(firstName.length);
// //accaess particular index character...
// console.log(firstName[9]);

// get last index..
// console.log(firstName.length-1);

//trim() --> remove the white spaces form both side
// let str = "  vishal shinde   ";// string immutable 
// console.log(str);  
// console.log(str.trim()); //remove the white spaces for both side.

//toUpperCase() --> convert string into upperCase latter,
// let firstName="vishal shinde"
// let newString = firstName.toUpperCase();
// console.log(newString);

//toUpperCase() --> convert string into LowerCase latter,
// let firstName="VISHAL SHINDE"
// let newString = firstName.toLowerCase();
// console.log(newString);

//slice(start_index , end_index) --> show the particular sting for given index string like substring...
// let str = "vishal shine";
// let newString = str.slice(1,6); 
// console.log(newString); 

// string concatination
// let firstName = "vishal";
// let lastName = "Shinde";
// let fullName = firstName.concat(lastName);
// console.log(firstName + " " +lastName  );
// console.log(fullName);

//string converted into Number and then perform addigion.

let str1 = "20";
let str2 = "22";
let newString = +str1 + +str2;
console.log(newString);
console.log(typeof(newString));


