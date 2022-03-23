/*
	* https://www.jschallenger.com/javascript-arrays/merge-number-of-arrays
 
	* Solution(Steps)
	- use spread operator(...) to access all items in the array
	- concat array method to merge arrays
*/

function main(...arrays) {
	return [].concat(...arrays)
}