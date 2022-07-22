// used const for array
// Note- when you used refrences typd you also used the const type

//here you defined array as const so you can not assigned array again but you can apply the method of the array
// const fruits =['apple', 'banana', 'grapes','Mango'];
// fruits.push("waterMalon"); // newely push the element.
// console.log(fruits);

// in const array you used array method but you can not change i.e we can not assigned.again
const fruits =['apple', 'banana', 'grapes','Mango'];
 let furuits1 =[];
 let i=0;
 while(i<fruits.length)
 {
    furuits1.push(fruits[i]);
        i++;
}
console.log(furuits1);
