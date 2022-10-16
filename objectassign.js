const obj = {
    key1: "value1",
    "key2":"value2"
}


//const obj2= {...obj}
obj.key3 = "value"
console.log(obj)
//console.log(obj2)
const obj3= Object.assign({},obj)
console.log(obj3)

//{ key1: 'value1', key2: 'value2', key3: 'value' }
//{ key1: 'value1', key2: 'value2' }

//optional channing

const user = {
    firstName:"harshit"
    //address:{hosenumer:1234}

}
console.log(user?.firstName)
console.log(user?.address?.housenumber)