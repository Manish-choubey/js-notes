//array is collection of iteam

// let fruits = ["apple", "mango","graps"]
// console.log(fruits[0])//apple


// let fruits = ["apple", "mango","graps"]

// // fruits[1] = "banana";// change the value of mongo
// // console.log(typeof fruits)// object
// // console.log(Array.isArray(fruits))// check that is it not array or array
// //arrry method
// fruits.push("banana")//it will add banan element in arraay

// fruits.pop()//remove the last element of array and it will return also


// let popfruits = fruits.pop()
// console.log("popped fruits is", popfruits)//popped fruits is graps


// fruits.unshift("banan")//it will add banana in last

// fruits.shift()// it will remove fruits in starting


//HOW TO CLONE Array

// let fruits = ["apple", "mango","graps"]

// //let fruits2 = [...fruits]
// let fruits2 = fruits.slice(0).concat("iteams3","iteams4")
// console.log(fruits2)
// result 
// [ 'apple', 'mango', 'graps', 'iteams3', 'iteams4' ]





 //USE FOR LOOP IN Array

 //let arraay = [ 'apple', 'mango', 'graps', 'iteams3', 'iteams4' ]

//  arraay.length//length of array
//  for(let i =0; i<arraay.length; i++){
//     console.log(arraay[i])
//  }

//  result 

//  apple
// mango
// graps
// iteams3
// iteams4




// let arraay = [ 'apple', 'mango', 'graps', 'iteams3', 'iteams4' ]
// let arraay2 = []
// for(let i =0;i<arraay.length; i++){
//     arraay2.push(arraay[i].toUpperCase())

// }
// console.log(arraay2)

// result 
// [ 'APPLE', 'MANGO', 'GRAPS', 'ITEAMS3', 'ITEAMS4' ]





 //use of for of in arraay

// const arraay = [ 'apple', 'mango', 'graps', 'iteams3', 'iteams4' ]

// for(arr of arraay){
//     console.log(arr)
// }

// apple
// mango
// graps
// iteams3
// iteams4