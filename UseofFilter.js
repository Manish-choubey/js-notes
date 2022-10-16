const numbers = [1,3,2,6,4,8]
const isEven= function(number){
    return number%2===0
}

const evenNumber=numbers.filter(isEven)
console.log(evenNumber)



const oddnumers = numbers.filter((number)=>{
    return number%2!==0;
})

console.log(oddnumers)


///we can use this same as we use map