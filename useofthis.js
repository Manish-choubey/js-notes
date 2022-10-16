const user = {
    firstName:"manish",
    age:8,
    about:function(){
        console.log(`person name is ${this.firstName},and age is${this.age}`)
    }

}
user.about()

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)

}



const user1 = {
    firstName: "harsh",
    age: 8,
    about:personInfo
}



const user2 = {
    firstName: "manish",
    age: 8,
    about:personInfo
}



const user3 = {
    firstName: "harsh",
    age: 8,
    about:personInfo
}