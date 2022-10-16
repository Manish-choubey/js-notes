//function declairation



let hapyy= ()=>{
    console.log("happy birtday to yoy")
}

// }

// function twoplusfour(){
//     console.log(2+4)

// }

// twoplusfour()


function sum(number1,number2){
    return number1+number2
}

const total = sum(5,6)
console.log(total)//11

//when value i spass some value in parameter is call argument
//when function take anything as a input is call parameter
// function isEven(number){
//     if(number%2===0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isEven(5))//false
// console.log(isEven(4))//true

// function firstcharecter(string){
//     return string[0]
// }

//console.log(firstcharecter("manish"))//m

//function
//input array, target(number)
//output index of target if target present in Array

function findtarget(array,target){
    for(let i =0; i<array.length; i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}

const myArray = [1,2,4,8]
const ans = findtarget(myArray,8)
console.log(ans)

//function expression
//when we store our function in a variable is called expression


//      const myfunction =function (number1,number2){
//          return number1+number2
//     }

//     console.log(myfunction(8,5))//13

//Aanish singh anjaki




const places = ['delhi', 'gurgaon', 'jaipur', 'pune']

const [firstElem, ...restOfThePlace] = places;
console.log(restOfThePlace);

const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

const updatedNewPlacesArray = [firstElem, ...morePlaces];
console.log(updatedNewPlacesArray);


// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']




// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const [placeOne, placeTwo, placeThree] = places;
const [first, ...remainingElements] = morePlaces;
const updatedArr = [...remainingElements, placeOne, placeTwo, placeThree];
console.log(updatedArr);





const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
//destructure and store pincode into a variable named myPincode


const {
    address: { pinCode: myPincode },
} = myData;
console.log(myPincode)
  
5.
//destructure and store second like into a vaiable named myLike
const {
    likes: [one, myLike],
} = myData;
console.log(myLike)