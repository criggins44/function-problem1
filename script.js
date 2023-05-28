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
2. Defined the necessary variable inside the function; created "logWord" and set it to the value if a string element
3. logWord will store longest element as the function loops through the array
4. Beginning with index 0, the function will move along and find the length of each element using the .length property
5. The longest element in the array will be stored as the "longWord" value until all elements are evaluated
6. When called, the function will return the value of "logWord", which is the value of the longest element
*/

console.log(findLongestWord(str));
