/*
	* random(will add link soon)

	* Solution(Steps)
	- create a array of alphabets
	- loop through the given string(arg)
	- get index of letter on the alphabet array but increment by one to get next letter
*/
 
function main(str) {
	let fixedString = "";
	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	
	str.split("").forEach(letter => {
		fixedString += alphabet[alphabet.indexOf(letter)+1]
	})

	return fixedString;
}
