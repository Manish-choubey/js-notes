//while loop

//Loops can execute a block of code as long as a specified condition is true.

let num =10
let total = 0;   
let i = 0;

while(i<=100){
    total = total + i;
    i++;
}

console.log(total)// add 5050


//for loop
// for(let i =0 ; i<9; i++){
//     console.log(i)//12345678 ans
// }

// // let total = 0
// // for(let i=1; i<=100; i++){
// //     total = total + i
    
// // }

// // console.log(total)



for(let i = 0; i<=9; i++){
    if(i==4){
        break
    }
    console.log(i)
}
//this will work till 3




// // for(let i = 0; i<=9; i++){
// //     if(i==4){
// //         continue
// //     }
// //     console.log(i)
// // }

// //it will print ecept 4

// //do while loop
// let i = 0

// do{
//     console.log(i)
//     i++
// }while(i<=9)