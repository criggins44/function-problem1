const str = "The most beautiful girl on earth"

//console.log(str);
let newArray = str.split(" ");
//console.log(newArray);

findLongestWord = (str) => {
	let newArray = str.split(" ");
	let longWord = 0;
	for (var i = 0; i < newArray.length; i++) {
		if (newArray[i].length > longWord) {
			longWord = newArray[i].length;
		}
	}
	return longWord;
}
console.log(findLongestWord(str));