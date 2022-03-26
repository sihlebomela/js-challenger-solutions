/*
	* https://www.jschallenger.com/javascript-basics/extract-first-half-string-javascript

	* Solution(Steps)
	- use slice 'slice()' string method
	- add a.length/2 as second param to get the half of the string 
*/
 
function main(a) {
	return a.slice(0, a.length/2)
}
