//The //forEach() method executes a provided function once for each array element.

const users=[{firstName:"manish",age:22},
{firstName:"sunder",age:23},
{firstName:"manish",age:25},
{firstName:"manish",age:26},
{firstName:"manish",age:27}
]


// users.forEach(function(user){
//     console.log(user.firstName) //anynomus function

// })

// users.forEach((user)=>{
//     console.log(user.firstName) //arrow function
// })


users.forEach((user,index)=>{
         console.log(user.firstName,index) 
     })