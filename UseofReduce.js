// const number = [1,2,3,4,5]


// //aim: sum of all array number

// const sum = number.reduce((accumulator,curretnvalue)=>{
//     return accumulator+curretnvalue
// })
// console.log(sum)


const userCart = [{
    productId:1,productName:"mobile",price:12000,
    productId:2,productName:"laptop",price:15000,
    productId:3,productName:"tv",price:25000,

},]

const totalAmount = userCart.reduce((accumulator,curretnvalue)=>{
    return accumulator + curretnvalue.price
},0)

console.log(totalAmount)//12000

