// Exercise 1: 
let myAlphabet = ['A', 'B', 'C', 'D', 'F', 'G'];

// What is the length of the array?
// Write a function called myAlphabetLength which console.logs the length of the array
// Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4


console.log(myAlphabet.length);

function myAlphabetLength() {
    console.log(myAlphabet.length)
    if(myAlphabet.length < 4){
        console.log('This array\'\s items are less than 4')
    } else {
        console.log('This array has more than 4 items')
    }
};
console.log(myAlphabetLength());


//Exercise 2:
// Declare a function checkFunc that takes a string and a boolean as parameters
// Call the function using 2 arguments

function checkFunc(string, boolean){};
checkFunc('Luisfer', true);

//Exercise 3
// Declare and initialize an array called Planets with 5 string values
// console.log each item in the array
// Also console.log the index in each iteration

const Planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Pluto'];
for(let i = 0; i < Planets.length; i++){
    const Planet = Planets[i];
    console.log(Planets[i] + ', ' +  i)
}
 

//Exercise 4
// Declare and initialize an array called
// wowDatatypes
// The array must have 5 different data types (NOT objects)
// Iterate over the array and console.log each item in the array + it’s index and data type in the array


const wowDatatypes = ['string', 25, true, null, undefined];
for(let i =0; i < wowDatatypes.length; i++){
    console.log(wowDatatypes[i] + ', ' + i + ', ' + typeof (wowDatatypes[i]));
}

//Exercise 5 
//console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
   myArr.forEach(item => console.log(item));

//Exercise 6
//Loop over the 2 arrays and if there are any common courses, if so console.log them
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for(let i = 0; i < student1Courses.length; i++){
    for(let j=0; j <student2Courses.length; j++){
        if(student1Courses[i] === student2Courses[j]){
            console.log('The common course: ' +student1Courses[i])
        }
    }
};

//Exercise 7
//compare the 2 arrays and find common food if any
let food = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

for( let i  in food){
    for(let j in food){
        if(food[i] === food2[j]){
            console.log(food2[j])}  
    }
}
//Exercise 8 
//compare the 3 arrays and find any common elements

let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];

const result = [];

values1.forEach((val1) => {
  values2.forEach((val2) => {
    if (val1 === val2) {
      if (!result.includes(val2)) {
        result.push(val2);
      } 
    }

    values3.forEach((val3) => {
      if (val1 === val3) {
        if (!result.includes(val3)) {
          result.push(val3);
        } 
      }
      if (val2 === val3) {
        if (!result.includes(val3)) {
          result.push(val3);
        } 
      }
    });
  });
});

console.log(result);



//Exercise 9 
//For each item in this array console.log the letters in each item

let furniture = ['Table', 'Chairs','Couch'];
furniture.forEach(fitment => console.log(fitment.split('')))





