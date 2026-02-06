
function Multiply()
{
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    document.getElementById("demo4").innerHTML = num1 * num2;
}

function myFunction(a,b)
{
    return a * b;
}

console.log(myFunction(3,4));


function findMax()
{
    var i = 0;
    var max = -Infinity;
    for( i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1, 123, 500, 115, 700, 44, 88));


function sumAll()
{
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(1, 123, 500, 115, 700, 44, 88));


var myObject = {
    firstName:"John",
    lastName:"Smith",
    fullName: function () 
    {
        return this.firstName + " " +  this.lastName;
    }
}

console.log(myObject.fullName());