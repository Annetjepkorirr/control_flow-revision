// Write a function called positive that takes a single parameter num and 
// returns a string that says "positive" if the number is greater than 0, "negative" 
// if it's less than 0, and "zero" if it's equal to 0.

function positive(num){
    if (num>0) {
        return "positive"
    }
    else if (num<0) {
        return "negative"
    }
    else{
        return "zero"
    }
    
    }
    console.log(positive(7));
    console.log(positive(-1));
    console.log(positive(0));

//  Write a function called calculateGrade that takes a single parameter score 
//  (a number) and returns a string that represents the corresponding letter grade
//  based on the following scale:

// 90-100: A,80-89: B, 70-79: C,60-69: D,Below 60: E
function calculateGrade(score){
    if (score >= 90 && score <= 100) {
        return "A";
      } else if (score >= 80 && score < 90) {
        return "B";
      } else if (score >= 70 && score < 80) {
        return "C";
      } else if (score >= 60 && score < 70) {
        return "D";
      } else {
        return "E";
      }
    }
    console.log(calculateGrade(92))
    console.log(calculateGrade(89))
    console.log(calculateGrade(77))
    console.log(calculateGrade(65))
    console.log(calculateGrade(55))

  // iterate over an array backwards using a for loop
let places = ["Nairobi","Mombasa","Kisumu","Nakuru"]
for (let index = places.length -1; index >=0; index--) {
    console.log(places[index])
    
}
//Get all the odd numbers in the range 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; 
    }
    console.log(i);
  }

  //Given the array below, return the elements between index 1 and 3 
  let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

for (let i = 1; i < 4; i++) {
  console.log(fruits[i]);
}
