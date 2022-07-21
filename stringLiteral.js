//Template String 
//def- Template literal provide an easy way to interporable variable and expression into string.
//This method is called as string interpolation.
//Template string create string by doing substitution of placesholder.

let firstName="vishal";
let age = 67;
// let abuoutMe = " my name is " + firstName +  " and my age is " + age;
// console.log(abuoutMe); 

//*by using above methos so it is very tedius work so you can used Template string.
// in template string we have to used ${} (This syntax used for substitution of placeholder).
// *main we have to used back tick. template string not applicable for single and boubel quates .

//by using template string

let aboutMe =`my name is ${firstName} and my age is ${age}`;
console.log(aboutMe); 