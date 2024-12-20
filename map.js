// const numbersArray = [12, 31, 54 , 87, 41 ,25 ,7, 9, 56];

// function doubleIt(numbersPara) {
//     let emptyArray = []
//     for (const number of numbersPara) {
//         const double = number * 2
//         emptyArray.push(double)

//     }
//     return emptyArray

// }

// const result = doubleIt(numbersArray);
// console.log(result);


// const output = []
// const numbersArray = [12, 31, 54 , 87, 41 ,25 ,7, 9, 56];

// const doubleIt = number => number * 2

// for (const number of numbersArray) {
//  const result = doubleIt(number)
//  output.push(result)

// }
// console.log(output);



/// map using in js ////

//loop through korbe & single element pabo ///

// for each element call a function//

//result for each element and will be store as an array //

//using map to double number ///
const numbersArray = [12, 31, 54, 87, 41, 25, 7, 9, 56];

const output2 = numbersArray.map(number => number * 2);


//console.log(output2);


//  using map to square //


const square = numbersArray.map(x => x * x);
// console.log(square);


const friends = ['kh arafat', 'rizvee rafi', 'salim sadman', 'leader imran']

const friendLength = friends.map(friend => friend.length)
// console.log(friendLength);


// const products = [
//     { name: 'hoodie', price: 450 ,size:['S','M','L','XL','XXL']},
//     { name: 'jacket', price: 550,size:['S','M','L','XL','XXL'] },
//     { name: 'kombol', price: 1050 ,size:['3X4','3X5','5X']},
//     { name: 'lap', price: 1550, size:['3X4','3X5','5X']}
// ]

// products.map(product => console.log(product.name))


/// using map filter ////
// const products = [
//     { name: 'hoodie', price: 450 ,size:['S','M','L','XL','XXL']},
//     { name: 'jacket', price: 550,size:['S','M','L','XL','XXL'] },
//     { name: 'kombol', price: 1050 ,size:['3X4','3X5','5X']},
//     { name: 'lap', price: 1550, size:['3X4','3X5','5X']}
// ]

// const filteringProduct = products.filter(product => product.price > 500 )

// console.log(filteringProduct);

//filter shobgula  select kore  dey condition onujayee//


/// using map find ////


// const products = [
//     { name: 'hoodie', price: 450 ,size:['S','M','L','XL','XXL']},
//     { name: 'jacket', price: 550,size:['S','M','L','XL','XXL'] },
//     { name: 'kombol', price: 1050 ,size:['3X4','3X5','5X']},
//     { name: 'lap', price: 1550, size:['3X4','3X5','5X']}
// ]

// const findableProduct = products.find(product => product.price > 500 )

// console.log(findableProduct);


/// find only ekta output dey condition onujaaye///


const products = [
    { name: 'hoodie', price: 450 ,size:['S','M','L','XL','XXL']},
    { name: 'jacket', price: 550,size:['S','M','L','XL','XXL'] },
    { name: 'kombol', price: 1050 ,size:['3X4','3X5','5X']},
    { name: 'lap', price: 1550, size:['3X4','3X5','5X']}
]

const foreachProduct = products.forEach(product => product.price > 500 )

console.log(foreachProduct);


///ForEach kokkhono return korena///

/* map shobgula dey
filter shobgulai return kore condition onujayee
find ekta return kore..
forEach return korena  */