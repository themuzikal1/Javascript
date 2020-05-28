//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.
/******* Commented out problem 1 
let currentTemp = 72; //sets the current temp in F
function tempConverter(temp) { //function to convert from F to C
}
let celsius = (currentTemp-32) * (5/9);

console.log('The current temperature is '  + celsius + ' degrees Celsius.'); //outputs the current temp in F and C


// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 
function celsiusTempConverter (celsius) { //converts celsius back to F
}
    let fahrenheit = (celsius * (9/5)) + 32;

console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit');
*/




/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"
/*********
 * Commenting out Problem 2
 
function calculateAge(birthYear) {
    return 2020 - birthYear;
}
let ageKorey = calculateAge(1986);
if (ageKorey >= 18) {
       console.log('Yes, you are old enough to vote');
    } else {
        console.log('No, you are not old enough to vote.');
   }
*/ 
/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.
/**** Commenting out problem 3
let str = "The five boxing wizards jump quickly."
console.log(str);
let res = str.split(" ");
console.log(str.split(" "));
res.join();
console.log(res.join());
*/
/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

let phoneNum = "2146794777";
console.log(phoneNum);
let num = phoneNum.split("");
console.log(phoneNum.split(""));
num.join();
console.log(num.join());
let n = num.toString();
console.log(num.toString());
num.reverse(); 
console.log (num);


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.
/* commenting out Problem 5
let car = {
    make: 'Mazda',
    model: '3 Hatchback',
    year: 2019,
    color: 'Machine Grey Metallic'
};
function carInformation(make, model, year, color) {
}
console.log(car);
*/
/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.
/* Commenting out Problem 6
var i;
for (i=0; i < 16; i++) {
    if (i % 2 == 0 && i != 0) {
        console.log(i+ ' The number is even!');
    } else if 
        (i === 0) {
        console.log(i + ' The number is zero');
        } else
        console.log(i + ' The number is odd!');
    }
*/

/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

/****** Commenting out Problem 7
var i;
for (i=3; i < 101; i++) {
    if (i % 3 === 0) {
        console.log('TEK'); //for any number that is not a multiple of 3 or 5, print number
    } else if (i % 5 === 0) {
        console.log('camp');
    } else 
        console.log(i);
}
*/

/************************************************************* */
// Problem 8:
//const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
/* Commenting out Problem 8
let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (i=0; i < nums.length; i += 3) {
    console.log(i);
}
 */   
 /*************************************************************  



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];


//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

//const obj = {school: 'TEKcamp'};
    const str = 'school';
    console.log(str);

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".
foodArray.pop();
foodArray.push('school');

foodArray.forEach((num1, index)=> {
    const num2 = adjectiveArray[index];

    console.log(num1 + ' are ' + num2);
    console.log(num1 + ' is ' + num2);


});
*/






/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
//const operations = [];
//function doMath() {};


