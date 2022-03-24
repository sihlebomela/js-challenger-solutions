/*
	* https://www.jschallenger.com/javascript-basics/get-nth-character-string-javascript
 
	* Solution(Steps)
	- use 'charAt' property to access the character from string by index 
	- minus one on the index argument to make it seem one-index based
*/

function main(a, n) {
	return a.charAt(n - 1);
}