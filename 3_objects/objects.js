// singleton

// object creation

// Object.create()

const mySym =Symbol("key 1")

const myObject = {
    name: "lokesh",
    age:22,
    [mySym]:"MI"

}

console.log(myObject);

console.log(myObject[mySym]);
