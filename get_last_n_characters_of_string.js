/*
	* https://www.jschallenger.com/javascript-basics/get-last-characters-string-javascript

	* Solution(Steps)
	- use slice method 
	- use string length
*/
 
function main(str) {
	return str.slice(str.length - 3, str.length)
}