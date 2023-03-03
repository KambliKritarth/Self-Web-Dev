console.log("DOM");

/* document.getElementById
document.getElementsByTagName
document.getElementsByClassName */
console.log(document.getElementById('magic'))
console.log(document.getElementsByTagName('p')[1])
console.log(document.getElementsByClassName('container'))
/**
 These lads are only interested in returning the first element
 document.querySelector - NodeList
 document.querySelectorAll - NodeList
 */

console.log(document.querySelector('#magic'))
console.log(document.querySelector('.container'))