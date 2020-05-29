//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 
/**** Commenting out problem 1
function checkEmpty(string) {
    const value = '';
    if (value == null || value == undefined || value.length == 0) {
        console.log('The is an empty string');
    } else {
        console.log('This is not a empty string');
    }
}
checkEmpty();
*/




/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 
/**** Commenting out Problem 2
const str = 'Learning JavaScript is fun!'
const res = str.replace ('fun', 'cool!');
console.log(str);
console.log(res);
*/



/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 
 /*commenting out Problem 3
const array1 = [1, 2, 3, 4, 5];

const map1 = array1.map(x => x * x);
console.log(map1);


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.
/*
const array1 = [1, 3, 5, 7, 9, 1, 3, 5];
//const map1 = array1.map;
console.log(array1.map(x => x > 3)) ;
*/





/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 
/* commenting out problem 5
const array1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
*/


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

    
//const string = 'GCTA';
//console.log(Array.from(string));






/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
/*
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

   function maxNumber(numbers) {
    
} 


//numbers = numbers.replace(/\D/g,'');
//console.log(numbers);



// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

//function sortNums(numbers,desc=false) {
    //your code...
//};


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
/* Commenting out this problem
const mapObj = new Map()


mapObj.set('company','TEKsystems'), //"object"); //refactored this object. and commented out the "object" 
mapObj.set({name : "Korey"},"string");
mapObj.set({age: "34"},"number");
mapObj.set({isMarried : "false"},"boolean");
mapObj.set({grades : "[92, 98, 88, 76]"},"array");
for (const [key, value] of mapObj) {
    console.log(key, value);
} 
*/


//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.
/*
console.log(mapObj.has('company','TEKsystems'));//refactored
console.log('Object maps are a key/value pair.  as shown before, the word, object caused this to not be a key/value pair.  Also, corrected the format by changing to single quotes with a comma between the key/value pair');
*/

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 9:
/*
let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];

let numbers = ones.slice(0, 10);
console.log(ones.slice(0,10).reverse()); //sliced the array and reversed the slice.  the original array is intact.
console.log(ones);

//reverse the array, without modifying the ones array.
*/

/************************************************************* */
//Problem 10:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.
/*
function performer(cb) {
    alert('Hello ' + cb + ' Welcome to our website'); 
}
function processUserInput(callback) {
    var cb = prompt('Please enter your name. ');
    callback(cb);
}
processUserInput(performer);

*/
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.