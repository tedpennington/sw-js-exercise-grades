console.log("hello js");

// The Grades JS Exercise:

// Array of scores provided, which I augmented to give me some that occur more than once.
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 82, 82, 95, 98, 98, 98, 98, 55];

// Created object with keys of grade letter and values of empty arrays (to be filled by loop below)
var grades = {
    A: [],
    B: [],
    C: [],
    D: [],
    F: [],
}

// Wrote typical for loop that uses if statement to selectively PUSH each set of values that meets the conditions into the arrays in my object above

for(var i = 0; i < scores.length; i++) {
    if(scores[i] <= 60) {
        grades.F.push(scores[i]);
    }   else if(scores[i] > 60 && scores[i] <= 70) {
            grades.D.push(scores[i]);
        }
        else if(scores[i] > 71 && scores[i] <= 80) {
            grades.C.push(scores[i]);
        }
        else if(scores[i] > 81 && scores[i] <= 90) {
            grades.B.push(scores[i]);
        }
        else if(scores[i] > 90 && scores[i] <= 100) {
            grades.A.push(scores[i]);
        }

}

// Here's one (older) way to get around the fact that the Math.max function won't take an array that's referred to by its variable name (it requries you to manually type out the entire array).  Uses apply, which takes the arguments 'this' and the arrary.  So you set the first argument to null.  Basically gives you a workaround to get it done.
// var highestGrade = Math.max.apply(null, scores);
// var lowestGrade = Math.min.apply(null, scores);

// Found a better ES6 way of doing this using "spread" syntax of "..."
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// http://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/

var highestGrade = Math.max(...scores);
var lowestGrade = Math.min(...scores);


console.log("Number of A Grades: ", grades.A.length)
console.log("Number of B Grades: ", grades.B.length)
console.log("Number of C Grades: ", grades.C.length)
console.log("Number of D Grades: ", grades.D.length)
console.log("Number of F Grades: ", grades.F.length)
console.log("The higest grade was a ", highestGrade)
console.log("The lowest grade was a ", lowestGrade)
// EXERCISE REQUIREMENTS COMPLETE


// Went on further with this exercise to reinforce technique for passing info to the DOM:

document.getElementById("gradesA").innerHTML = "<p>The number of A grades was: " + grades.A.length + "</p>";
document.getElementById("gradesB").innerHTML = "<p>The number of B grades was: " + grades.B.length + "</p>";
document.getElementById("gradesC").innerHTML = "<p>The number of C grades was: " + grades.C.length + "</p>";
document.getElementById("gradesD").innerHTML = "<p>The number of D grades was: " + grades.D.length + "</p>";
document.getElementById("gradesF").innerHTML = "<p>The number of F grades was: " + grades.F.length + "</p>";
document.getElementById("highest").innerHTML = "<p>The higest grade was: " + highestGrade + "</p>";
document.getElementById("lowest").innerHTML = "<p>The lowest grade was: " + lowestGrade + "</p>";

// END of EXERCISE












































// One way to try to do this...
// var dataset = [2, 2, 4, 2, 6, 4, 7, 8];
// var counts = {}, i, value;
// for (i = 0; i < dataset.length; i++) {
//     value = dataset[i];
//     if (typeof counts[value] === "undefined") {
//         counts[value] = 1;
//     } else {
//         counts[value]++;
//     }
// }
// console.log(counts);
// Object {
//    2: 3,
//    4: 2,
//    6: 1,
//    7: 1,
//    8: 1
//}
