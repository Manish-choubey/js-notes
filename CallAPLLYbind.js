const user1 = {
    firstName:"manish",
    age:8,
    
}
user1.about()
//manish 8

const user2 = {
    firstName:"sonu",
    age:8,

}

 function about(hobby,fevorite){
    console.log(this.firstName,this.age,hobby,fevorite)
}

about.call(user2)
about.apply(user2,["game","food"])

const user4 = {
    firstName : "hershit",
    lastName:"choubey",
    email:"manishchoubey@gmail.com",
    age:2,
    address:"house no ,colony , pincode,state",
    about:function(){
        return `${this.firstName} is ${this.age} `
    }
}