
//for loop
var i;
for (i = 1; i <= 50; i++){
  console.log(i+" : "+(i%2==0?"Even":"Odd"));
}

//while loop
var str = "madame";
var len = str.length;  
var i = 0;
var rev = "";
while (len>0) {
rev += str.substring(len-1,len)
len--;
} 
console.log(rev)

//do while loop
function isPrime(num) {
  var prime = true;
  for (var i = 2; i <= Math.sqrt(num); i++){
    if (num%i==0) {
      return false;
    }
  }
  return true;
}
let list = [2, 3, 5, 7, 11, 13]
var j = 0;
do {
  console.log(list[j])
}while(!isPrime(list[j]))