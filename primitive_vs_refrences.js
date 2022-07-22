// primitive type
//Premitive type only store the value not refrences.    
// let num1= 10;
// let num2=num1;
// console.log(num1);
// console.log(num2);
// num1 ++;
// console.log(num1);
// console.log(num2);
 
// Refrences type 
// if you copy one array into another array it contain refrences
// each and every array contain same memory address and stored in heap and pointing to the stak memory 
// in separate Pointer. 
// let arr1 = [20, 30,40,60]
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push(67); //This value updated in both array because it having refrences 
// console.log(arr1);
// console.log(arr2);


//clone array...
//Here 2 array pointing to the same array (or same address having array in heap memory)
// let arr1 = ['item1','item2']
// let arr2 = arr1; // if you change someting in 1st array automatically refelct on 2nd array.
// console.log(arr1);  //so it is not best choice
// console.log(arr2);   

//also you copy array in differetn way
// let arr1=['item1','item2']
// let arr2 = ['item1' ,'Item2'];
// console.log(arr1 === arr2) //--> flase(both array not same because pointing to different address)

//another way to cloning...by using the slice() method.
//i.e if you have some changes in one array does not reflected to the another array.
//let arr=['item1','item2'] //here we have to create 2 separate array in heap
//let arr2 = arr.slice(0);
// if you wnat to add some more element into the array 2 by using following way you can add
// let arr2 = arr.slice(0).concat(["item2","item4"]);

// console.log(arr);
// console.log(arr2);
// console.log(arr === arr2);
// arr.push("item3");
// console.log(arr);
// console.log(arr2); // splic this is one of the best method to clone array.

//3rd way
//here we have to create 2 separate array. in heap
//i.e if you have some changes in one array does not reflected to the another array.
// let arr=['item1','item2']
// let arr2 =[] .concat(arr,["item2","item4"]); //here we create one empty array and stored the elment by using concat method.
// console.log(arr === arr2);
// arr.push("item3");
// console.log(arr);
// console.log(arr2); 


// 4th way spread operator
//by using spread operator we have to create separate address in heap memory 
// 1 st arrAY changes does not reflected to the 2nd array.
// let arr =['vishal', 'shinde','hi','by'] 
// let arr1 = [...arr,"item3" , "item4"];

// console.log(arr);
// console.log(arr1);
// console.log(arr === arr1);

//*How to mearge more then one array by using spread operator
// let arr = ['vishal', 'prathmesh','pankaj','ajinkaya']
// let arr1 = [10,20,30,40,50];
// let arr2=[...arr,...arr1];
// console.log(arr2);

