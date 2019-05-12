/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


function tipCalc(bill) {
    var percentage;
    var tips = new Array();
    for(var i = 0; i<bill.length ; i++)
    {
        if (bill[i] < 50) {
            tips[tips.length] = 0.2*bill[i];
        } else if (bill[i] >= 50 && bill[i] < 200) {
            tips[tips.length] = 0.15*bill[i];
        } else {
            tips[tips.length] = 0.1*bill[i];
        }
    }
        return tips;
}

var bill = [124, 48, 268];
var tips = tipCalc(bill)
var finalArr = [bill[0] + tips[0],bill[1] + tips[1],bill[2] + tips[2]];
console.log(tips, finalArr);
