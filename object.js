//object is refrence type

// const person = {
//     name:"manish",
//     age:22
// }

//how to accecdata
// person.name

//how to itrate Object

// for (let key in person){
//     console.log(key)
// }

//result name
//age

// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }


//Object.keys

// console.log(Object.keys(person))


// result 
// [ 'name', 'age' ]


//computed properties

// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 ="myvalue2"

// const Obj={

// }
// Obj.=value1
// Obj[key2]=value2



// { objkey1: 'myvalue1', objkey2: 'myvalue2' }



//spreat operetor in obje


const obj1={
    key1:"value1",
    key3:"value2"
}


const obj2={
    key1:"value1",
    key2:"value2"
}

const newarray= {...obj1,...obj2}
console.log(newarray)
// result 
// { key1: 'value1', key: 'value2', key3: 'value3' }



//object distructuring

// const band = {
//     bandName:"led zeppline",
//     famoussong:"starway to heaven",
//     year:"1968"
// }

// let {bandName :var1,famoussong} = band
// console.log(var1)

// result 

// led zeppline

// const users = [
//     {userId:1,firstName:"Hershit",gender:"male"},
//     {userId:1,firstName:"Manish",gender:"male"},
//     {userId:1,firstName:"amit",gender:"male"}
// ]

// for(let user of users){
//     console.log(user)
// }

// result 
// { userId: 1, firstName: 'Hershit', gender: 'male' }
// { userId: 1, firstName: 'Manish', gender: 'male' }
// { userId: 1, firstName: 'amit', gender: 'male' }



// const arr = [ 1, 2, 5, 2, 2, 5]
//   const arreyfrequensy = function(arr , index){
//     for(let i =0; i<arr.length;i++){
//         if(arr[i]==0){
//             return index
//         }else{
//             return arr[i]
//         }
//     }
//   }

//   console.log(arr)






