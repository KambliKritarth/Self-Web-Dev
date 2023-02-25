console.log('I am excited for this');

// alternate way to run a JS file is by using "node index.js"
/* 

*/

let name = 'Programming'
console.log(name);
// Cannot be a reserved keyword
//should be meaningful
//cannot start with a number(1name)
//cannot contain a space or hyphen (-)
// are case-sensitive

let firstName;/* is different from*/ let FirstName;


//constants
const interestRate = 0.3;
//interestRate = 1;
//uncommenting the above line will give TypeError
console.log(interestRate);


// Primitive Types
firstName = 'Kritarth'; //String Literal
let age = 30;// Number literal
let isApproved = false;//Boolean literal
FirstName = undefined;
let selectedColr = null;

//Dynamic Typing
/*
  unlike static languages the type of the variable will depend on the value it is assigned 

  e.g. name = 'Kritarth'
       output of typeof name in console==> "string"
       name = 3
       output of typeof name in console==> "number"

       typeof FirstName ==> "undefined"
       typeof selectedColr ==> "object"
*/


//Objects


//object literal
/**
  {key:value}
 */
let person = {
  nameID: 'Kritz',
  ageInYears:21
};
/**
  upper lines are equivalent of 

  let nameID = 'Kritz';
  let ageInYears = 21; 
 */

console.log(person);
let selection = 'ageInYears';
console.log("Person's name is " + person.nameID);
console.log("They are " + person[selection] + " years old");


//Arrays
let selectedColours = ['red', 'blue',3];
console.log(selectedColours);
console.log(selectedColours[0]);
console.log(selectedColours[1]);
selectedColours[3] = 5
console.log(selectedColours.length);


//functions
function greet() {
  //body of the function
  for (let i = 0; i < 5; i++){
    var x = i + 1;
    console.log(x);
  }
}

greet();
