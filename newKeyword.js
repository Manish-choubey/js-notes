//new keyword

function createuser(firstName,age){
    this.firstName = firstName
    this.age = age
}
createuser.prototype.about = function(){
    console.log(this.firstName,this.age)
}

    const user1=new createuser('harshit',6)
    //new keyword
    //1.empty object tis={}
    //2/return this
    console.log(user1)

    let numbers = [1,2,3,4];
    //console.log(object.getprototybeof(number))
    //console.log(Array.prototypeof(numbers))
    //console.log(numbers)
    function hello(){
        console.log("hello")
    }

    console.log(hello.prototype)
        hello.prototype =[]
        console.log(hello.prototype)
        hello.prototype.push('1')