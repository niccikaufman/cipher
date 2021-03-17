let output = prompt("Say something: ");
console.log(output.split(""));
let firstLetter = output.charAt(0);
let lastLetter = output.charAt(output.length-1);
let bookEnd = firstLetter + lastLetter;

function newString(){
  console.log(bookEnd.toUpperCase());
}

function reverseString(){
  let reverse = lastLetter.concat(firstLetter).toUpperCase();
  let result = output.concat(reverse);
  console.log(result);
}

newString();
reverseString();
