console.log("test");
//Using one single line of JavaScript code, complete the following tasks on the array of integers below.
//



//Then output (either in the DOM or the console) the sum of all the resulting numbers.
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var playingWithArrays = integers.sort(function(a,b){return b-a})
.filter(function(lowNumbers){return lowNumbers <= 19})
.map(function(lowNumbers){return (lowNumbers* 1.5)-1})
.reduce(function(a, b){return a + b});


console.log(playingWithArrays);

//    return total + num;
//}
//function myFunction(item) {
//    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
