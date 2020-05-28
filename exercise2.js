//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//
/*
for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}
var i = 0;
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}
*/





/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

/*function sumOf30(n) {
  var sum = 0;
    for (i = 0; i <= 30; i++) {
        sum += i;
    }
    console.log(sumOf30);
}
*/


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// test truthy falsy function
/*
function testTruthyFalsy (val)
{
    return val ? console.log('truthy') : console.log('falsy');
} 
*/
//testTruthyFalsy (20); truthy
// testTruthyFalsy (0); - falsy.  Falsy values are "undefined, null, 0, empty strings, and NaN"
//testTruthyFalsy ("zero"); //truthy- it is a string
//testTruthyFalsy (const zero = 20); //falsey - NaN
//testTruthyFalsy (null) //- Falsy. Falsy values are "undefined, null, 0, empty strings, and NaN"
//testTruthyFalsy ("0") //-Truthy-This is a string. 
//testTruthyFalsy (!""); truthy
//testTruthyFalsy ({}); truthy
//testTruthyFalsy (() => {console.log("hello TEKcamp!")); falsey NaN
//testTruthyFalsy (125) //- truthy
//testTruthyFalsy (undefined) //- Falsy
//testTruthyFalsy ("");// - Falsey - this is an empty sting. 

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:
/*
const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}
*/
/********** commenting out this solution 
const day = 'friday';
switch (day) {
    case 'monday':
        console.log("we got a long week ahead of us...");
        break;
    case 'tuesday':
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case 'wednesday':
        console.log("We are smack dab in the middle of the week");
        break;
    case 'thursday':
        console.log("Thursday night... the mood is right");
        break;
    case 'friday':
        console.log("TGIF.  Friday truly is the best day of the week!")
        break;
    default:
        console.log("It's a weekend!")
*/


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
/*
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
*/
/****** Commenting out solution  
const age = 10;
age > 21 ? console.log("adult") : console.log("minor")

age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager")

age > 65 ? console.log("retired") : console.log("still working...")
*/

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/
/*
let Korey = {
    firstName: 'Korey', 
    age: 34,
    gender: 'male', 
    hobbies: 'playing the piano, coding, traveling, cooking',
    profession: 'Aspiring Software Developer',
    education: 'Masters of City and Regional Planning',
    learn: function(firstName) {
        console.log(this.firstName);
    },
    fun: function(hobbies) {
        console.log(this.hobbies);
    }
};

Korey.learn();
Korey.fun();
//console.log(Korey);


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  
/*
var computer = {
    type: 'laptop',
    brand: 'Apple',
    color: 'Space Gray',
    sizeOfScreen: '13-inch',
    material: 'Aluminum',
    screenType: 'Retina',
    manufacturerDetails: function(material) {
        console.log(this.material);
    },
    nameOfComputer: function(brand) {
        console.log(this.brand);
    }
};
computer.manufacturerDetails();
computer.nameOfComputer();
*/


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

function favDataTypes() {
    const dataType1 = 'strings';
    const dataType2 = 'objects';
    const dataType3 = 'numbers';

console.log('I like ' + dataType1 + ' because they allow me to type messages such as this one');

console.log('I like ' + dataType2 + ' because I can use them to create video games like SimCity');

console.log('I like ' + dataType3 + ' because what is the world without numbers?');
}



/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


