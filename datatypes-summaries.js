// primitive -call by value

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt


//Dynamic types 

// non primitive/reference type

// Array,Objects,Functions


const id=Symbol('12')

const anotherId=Symbol('12')

console.log(id === anotherId); //false

const heros=["a","b","c"]

let myObj={
    name:"ram",
    age:22
}


const myFunction=function(){
console.log("hii");
}

()
console.log(myFunction);

// Stack(primitive ) and heap(Non-primitive) memory



