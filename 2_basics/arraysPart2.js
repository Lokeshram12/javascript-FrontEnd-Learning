// push - add an element or an array to an existing array

// concat - combine 2 arrays  and return a new array

// spread operator

const list = [ 1,2,3,"first list ends here"]

const list2 = ["second list starts here" ,4,5,6]

const newList = [...list, ...list2]

console.log(newList);  //[ 1, 2, 3, 'first list ends here', 'second list starts here', 4, 5, 6 ]

// flat operator

const array = [1,2,3,[4,5,6,7],[8,9],10,[11,12,13,[14,15]]]

const newArray=array.flat(2)

console.log(newArray);
/* [
    1,  2,  3,  4,  5,  6,
    7,  8,  9, 10, 11, 12,
   13, 14, 15
 ]

*/

// from - use to convert into array

let age1=15;
let age2=25;
let age3=35;
// of -use to combine from a different variables
const mixArray = Array.of(age1,age2,age3)

console.log(mixArray); //[ 15, 25, 35 ]


