const str = "The most beautiful girl on earth"
//Created a string to be used as a parameter

let newArray = str.split(" ");
//Used .split() to turn the above string into a new array that will be used in the function

findLongestWord = (str) => {
	let newArray = str.split(" ");
	let longWord = "" ;
	for (var i = 0; i < newArray.length; i++) {
		if (newArray[i].length > longWord.length) {
			longWord = newArray[i];
		}
	}
	return longWord;
}
/* 
1. Used arrow function form to set "str" as the parameter
2. Defined the necessary variable inside the function; created "logWord" and set it to the value of an element in th new array
3. longWord will store an element in the array
4. the function will loop through each element in the array evaluating the length
5. if the legnth of the next element is longer than the previous element, that element will now become the value of longWord
6. the function will return the the actual word stored in longWord when called
*/

console.log(findLongestWord(str));
