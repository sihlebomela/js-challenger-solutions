/*
    * https://www.jschallenger.com/javascript-basics/split-number-into-digits/
    
    Write a function that takes a number (a) as argument
    Split a into its individual digits and return them in an array
    Tipp: you might want to change the type of the number for the splitting

    * Solution (Steps)
    1. Take number and convert to string
    2. Split the string(of numbers) to an array of strings
    3. Convert each item(string) in the 
*/

// method 1
function main(a) {
    a = String(a)
    a = a.split("")
    return a.map((item) => Number(item));  
}

// method 2 (refactor/one liner)
const main2 = (a) => String(a).split("").map((item) => Number(item));