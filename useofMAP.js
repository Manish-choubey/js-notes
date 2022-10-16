//map always return newaary 
//map alway take input as a callback



const numbers = [3,4,6,1,8]

//method 1

const squire = function(numbers){
    return numbers*numbers
}

console.log(squire([4,5,6]))

// const squirenumber=numbers.map(squire)
// console.log(squirenumber)


////[ 9, 16, 36, 1, 64 ] ans


//method 2

// const squirenumber1=numbers.map(function(numbers){
//     return numbers*numbers
// })

//console.log(squirenumber1)

//method 3


// const squirenumber2=numbers.map((numbers,index)=>{
//     return `index:${index}, ${numbers*numbers}`
// })
// console.log(squirenumber2)


const users=[{firstName:"manish",age:22},
{firstName:"sunder",age:23},
{firstName:"manish",age:25},
{firstName:"manish",age:26},
{firstName:"manish",age:27}
]


const username = users.map((user)=>{
    return user.firstName
})

console.log(username)