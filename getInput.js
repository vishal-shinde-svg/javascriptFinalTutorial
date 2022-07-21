//if you want to give input form user in wab page you used prompt function (it show in alert window)
//prompt get input always string format..
let name=prompt("Enter Name...")
console.log(name);
console.log(typeof name);

//if you want to convert given input form string to number so you can used + operator to Before given function
let RollNo =+prompt("Enter roll no..");
console.log(RollNo);     // before the prompt function you can add + so it given string input 
                        // converted into the number format.
console.log(typeof RollNo);