
var date = new Date();

console.log(date.toDateString());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getTime());


function person (first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = eye;
}

var person1 = new person("Matthew", "Kay", 22, "blue");

console.log(person1.firstName);

var txt = "";
for (x in person1)
{
    txt += person1[x];
}

console.log(txt);

console.log(Math.max(6,7,8));
