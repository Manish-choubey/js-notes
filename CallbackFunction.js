// function myFunc2(){
//     console.log("inside app")
// }


// function myfun(a){
//     a()
// }

// myfun(myFunc2)

// //jab ham ek function ek ander kisi dusre function ko as argument pass karte h 
// //to use call backfunction kahte h

// function myFunc2(name){
//     console.log("inside app")
//     console.log("your name is",name)
// }







// function myfun(callback){
//     console.log("hello there i am a func and i can")
//     callback("hershit")
// }


///result

// hello there i am a func and i can
// inside app
// your name is hershit
// hello there i am a func and i can
// inside app
// your name is hershit

//function returning function
myfun(myFunc2)


function myFunc (){
    function hello(){
        return "hello word"

    }
    return hello
}

const ans = myFunc()
console.log(ans())