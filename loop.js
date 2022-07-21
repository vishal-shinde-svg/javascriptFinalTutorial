//while loop*******************
// var num=10;
// while(num<=20)
// {
//     console.log(num);
//     num++;
// }

// 2md example

// let num1 =10;
// let sum =0;
// while(num1 <= 100)
// {
//     sum = sum + num1;
//     num1 ++;
// }
// console.log(sum);

// without while loop 
// let total= (num1 * (num1+1))/2
// console.log(total);


//**************for loop

// for(let i=0;i<10;i++){
//     console.log(i)

// }
// console.log(i);//if you defined outside the block it does not access because it haveing block scop using let

// for(var i=0;i<=10;i++)
// {
//     console.log(i);
// }
// console.log(i); //if you defined varialb with var it show the outside the block because it having the global scope

// *sum of first 10 natural number using for loop;
let num=10;
let sum = 0;
for(let i=0;i<=num;i++)
{
sum = sum +  i;
}
console.log(sum);