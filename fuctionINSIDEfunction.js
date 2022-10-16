//function inside function

// const app= ()=>{
//     const myFunc= ()=>{
//         console.log("hello from my world")
//     }

//     const addTwo = (num1,num2)=>{
//         return num1+num2
//     }
//     myFunc()
// }
// app()

//hello from my world


//laxical scope
function myApp(){
    const myVar = "value1"
    function myFunc(){
       // const myVar="value59"
        console.log("inside myfunc",myVar)
    }
    console.log(myVar)
    myFunc()
}

myApp()
//result value1
//inside myfunc value1



//rest parameter
function myFunc(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myFunc(3,4,5,6,7,8)
// result a is 3
// b is 4
// c is 5,6,7,8


function addall (...number){
    let total = 0
    for(let i = 0; i<=number; i++){
        total = total+i
    }
    return total
}

const ans = addall(4,4,5,6,)
console.log(ans)