///parameter distructuring

const person = {
    firstName:"hershit",
    gender:"male"
}

// function printDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
// }
function printDetails({firstName,gender}){
        console.log(firstName)
        console.log(gender)
    }

printDetails(person)//hershit
//male