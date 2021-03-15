function reverseString(str){
  // First, the string elements are split up as individual arrays using the split() method. str.split("")
  const arrayStrings = str.split("");
  // Second, the string elements are reversed using the reverse() method. arrayStrings.reverse()
  const reverseArray = arrayStrings.reverse();
  // Third, the reversed string elements are joined into a single string using the join() method. reverseArray.join("")
  const joinArray = reverseArray.join("");
  return joinArray;
}

const string = prompt('enter a sentence: ');
const result = reverseString(string);
alert(result);
