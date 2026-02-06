
var name = "Matthew Kay", age = 22, gender = "male";

var newName = "Sherry",
    newAge = 42,
    genderNew = "Female";

console.log(name);
console.log(age);
console.log(gender);
console.log(newName);
console.log(newAge); 
console.log(genderNew);


var myCars = ["Tesla", "Ferrari", "Urus", "BMW"];

console.log("----------------------------------");
console.log("Display the Array:");

for(var i = 0; i < myCars.length; i++)
{
    console.log(myCars[i]);
}

console.log("----------------------------------");

myCars.sort();
console.log("Sort the Array in Alphabetical order:")

for(var i = 0; i < myCars.length; i++)
{
    console.log(myCars[i]);
}

console.log("----------------------------------");

myCars.reverse();
console.log("Reverse the order of the Array:")

for(var i = 0; i < myCars.length; i++)
{
    console.log(myCars[i]);
}