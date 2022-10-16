function hello(){
    console.log("hello world")
}

//javascript function ===> function+Object
//console.log(hello.name)
//you can add your own properties
hello.myOwnProperty = "very uniq vlue"
console.log(hello.myOwnProperty)//very uniq vlue
//name property----> tells function name
// function provide some more usefull property
//console.log(hello.prototype)//{}
//only function provide prototype property
if(hello.prototype){
    console.log("prototype is present")
}else{
    console.log("prototype is not present")
}

//we can add more property in function
hello.prototype.abe = 'abc'
hello.prototype.xyz='xyz'
console.log(hello.prototype)//{ abe: 'abc', xyz: 'xyz' }


function createUser(firstName,lastName,email,age,address){
const user = Object.create(createUser.prototype)
user.firstName = firstName
user.lastName = lastName
user.email=email
user.age=age
user.address = address
return user
}

createUser.prototype.about = function(){
    return `${this.firstName} is{this.age} year old`
}

createUser.prototype.is18 = function(){
    return this.age>=18;
}
createUser.prototype.sing = function (){
    return "La,La,La"
}
const user1 = createUser('hershit','vaibhav',)
console.log(user1)
console.log(user1.sing)