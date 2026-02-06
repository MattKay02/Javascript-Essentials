
function increment()
{
    var i = 1;
        while (i <= 10)
        {
            console.log(i);
            if(i==1)
            {
                document.getElementById('demo').innerHTML = i + "<br>"
            }
            else
            {
                document.getElementById('demo').innerHTML += i + "<br>";
            }
            i++;
        }
}

function ArrayLoop()
{
    var cars = ["Urus","Mercedes","Ferarri","G-Wagon"]
        var j = 0;

        while (cars[j])
        {
            if(j == 0)
            {
                document.getElementById('demo2').innerHTML = cars[j] + "<br>";
            }
            else
            {
                document.getElementById('demo2').innerHTML += cars[j] + "<br>";
            }
            j++;
        }
}

function ForLoop()
{
    for (var i = 1; i <= 5; i++)
    {
        if(i == 0)
        {
            document.getElementById("demo3").innerHTML = i + "<br>";
        }
        else
        {
            document.getElementById("demo3").innerHTML += i + "<br>";
        }
    }
}
