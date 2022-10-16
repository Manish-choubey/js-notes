const array = [[14,21,23,64], [33,46,51,65]]


// for(let i = 0; i<practiceData.length;i++){
//     for(let j= 0; j<practiceData.length; j++){
        
//     }

// }

// let number = practiceData[i,j]
// console.log(number)


function outerFun(array) {
    function innerFunc(innerElem) {
    return innerElem + 1;
    }
    const innerArray = array.map(innerFunc);
    return innerArray;
    }

    const result = array.map(outerFun);
    console.log(result)

    const practiceData = [[14,21,23,64], [33,46,51,65]]


    const incrementedArray = practiceData.map((outerArray) =>
outerArray.map(innerElement => innerElement + 1)
);
console.log(incrementedArray);
    