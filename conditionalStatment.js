//if else statment
// var age = 17;
// if(age >=18){
//     console.log("you are able to vote..")
// }else{
//     console.log("you are not able to vote..")
// }


// let num=17;
// if(num%2==0)
// {
//     console.log("given number is even number");

// }
// else{
//     console.log("given number is odd number");
// }

//nested if else....
let WinningGess = 27;
let userGess= +prompt("user Guess Number...")
if(userGess == WinningGess){
    console.log("you gessign write Number...")
}else{
    if(userGess < WinningGess)
    {
        console.log("Given number is too low ..." + userGess)
    }
    else{
        console.log("given number is too high !!"  + userGess)
    }
}

// if else-if, else-if else
//check the condition for multiple sithuation.if not satisfied with any condition.
let temprature = 46;
if(temprature < 0)
{
    console.log("exstremely cold outside");
}else if(temprature < 16)
{
    console.log("it is cold outside")
}else if(temprature < 25)
{
    console.log("weather is ok");
}else if(temprature < 35)
{
    console.log("lets go for swim");
}else if(temprature < 45)
{
    console.log(" open the ac");
}else{
console.log("too hot !!!!");
}
console.log("Good Bye..");

//----------switch statment---------

let day =2;
switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break;
    case 5:
        console.log("Friday")
    case 6:
        console.log("Saturday")
    default:
        console.log("invalid input")
}


 