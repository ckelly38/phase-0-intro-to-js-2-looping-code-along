// Code your solutions in this file
function writeCards(names)
{
    if (names == undefined || names == null) return null;
    else
    {
        var marr = new Array();
        for (var n = 0; n < names.length; n++)
        {
            marr.push("Thank you, " + names[n] + ", for the wonderful surprise gift!");
        }
        return marr;
    }
}

function countDown(n)
{
    for (var x = n; (x > 0 || x == 0) && (x < n || x == n); x--)
    {
        console.log(x);
    }
}