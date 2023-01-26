//  Problems_1:Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.

var totalmoney = 1000;

var orange_1kg = 300;
var apple_1kg = 400;

var totalCast = orange_1kg + apple_1kg;

console.log("Total cast: " + totalCast)

var left = totalmoney - totalCast;

console.log("Left_Money: " + left)

// problem_2:Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

var math =75.25;
var bio = 65;
var che = 35.45;
var phy = 80;
var bang = 99.50;

var totalMarks = math + bio + che + phy + bang;
console.log("Total Marks: " + totalMarks)

console.log("Average Marks:" + (totalMarks / 5))

// problems_3:John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.

var firstSentence = 'I am going to be';
var secondSentence = "an awesome web developer";

console.log(firstSentence + " " + secondSentence)

// problems_4:Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.

var number1 = 119;
var number2 = 5;

console.log("The Remainder is:" + (number1 % number2))