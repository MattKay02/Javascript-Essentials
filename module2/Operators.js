
var x = 10;
var y = 2;

x += 5;

console.log(x);


if (x < y)
{
    console.log(x + " is smaller than " + y);
}
else
{
    console.log(y + " is smaller than " + x);
}


var player1 = 500;
var player2 = 600;
var highscore = 0;

if (player1 > player2)
{
    highscore = player1;
}
else
{
    highscore = player2;
}

console.log("The highscore is: " + highscore);

highscore = 0;
highscore = (player1 > player2) ? player1 : player2;
console.log(highscore);