//array are good but not sufficient for  stored real word data.
//object come into picture
//object stored in key value pair
//object don't have index.
//object are refrences type.
//javascript key by default data type is stirng.
//create object 
  
// const person = {name:'vishal',  // we create object with curly brackets is called as objet literal.
//                 age:27,
//                 }
                // console.log(person);
                // console.log(typeof person);
// //access data from object
//                 console.log(person.name);
//                 console.log(person.age);

//Alos access the data by using square bracket
                    // console.log(person["name"]);
                    // console.log(person['age']); 
//in inside bracket if you not defined inverted quama so it return undefinde.
                    // console.log(person[name]);

//inside the array we have to stored the array
// const person = {name:'vishal',
//                 age:27,
//                 hobbies:["cricket","kabaddi" ,'kho-kho']
//         }
//                 console.log(person.hobbies);//access the propery of object used . propery
// // add the propery in to the array 
//                     person.Gender="male";
//                     console.log(person);


//you can access the propery of the object by using the . (operator )and bracket [] notation
//i.e .(dot) vs  [] (squar notation)
// const person = {name:'vishal',  
                // age:27,
                // hobbies:["cricket","kabaddi" ,'kho-kho']
//instead of key like hobbies something you wirte my hobbies (it having the space between the my and hobbies so you need to add in inberted quama) Like
                // "my hobbies" :['playing', 'ground','read','travel']
                // } // it is valid.

// id you try to access the propery of the person like hobbies so you write following way
                //console.log(person.my hobbies); //it show error
            //instead of that you have to used suqare bracket
            // console.log(person["my hobbies"]);

//if you add key on object suppose 
// const key = "email"
// const person = {name:'vishal',  
//                  age:27,
//                 hobbies:["cricket","kabaddi" ,'kho-kho']
//                 }
// if you add key in following way it add key not email key
                // console.log(person.key="shindev05@gmail.com)"); // here we add key word not Email key
                // console.log(person);

    //if you add key as email so add in following way.....
                // console.log(person[key]="shindev05@gmail.com");
                // console.log(person)


//How to iterate the objects.
//1.we have to object.key
//2.used for in loop;
const person = [{name:'vishal',  
                age:27,
                 hobbies:["cricket","kabaddi" ,'kho-kho']
                 }]

        // for(let key in person){
        //         //console.log(key);
        //        // console.log(person[key]);
        //         console.log(`${key} : ${person[key]} `);
        //         console.log(key," :",person[key]);
        //     }

//object.key
// console.log(Object.keys(person));

//by using the for of loop with help of object.key();

for(let key of Object.keys(person))
{
document.write(person[key]);
}










        
