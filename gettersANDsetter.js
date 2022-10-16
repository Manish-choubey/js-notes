class person {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
    }
   get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new person("hershit","sharma",5)
console.log(person1.fullName)