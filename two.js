console.log("Hello")


let myData = {
    "name" : "Smith",
    "num" :75,
    "city" :"peshawar",
    "grade" : "C",
    "car" : "Aston Martin"
}
// Two methods to get the value of an object

// first method
console.log(myData["grade"]);

// second method
console.log(myData.name);
console.log(myData.num);

// Third way to getting all the value from an object
for(let i in myData){
    console.log(i , myData[i]);
}

// ARITHMETIC OPERATORS

let a = 3;
let b = 2;

console.log("The sum of a+b is : " , a+b);
console.log("The sub of a-b is : " , a-b);
console.log("The mul of a*b is : " , a*b);
console.log("The div of a/b is : " , a/b);
console.log("The modulus of a%b is : " , a%b);


