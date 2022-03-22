/*
    * https://www.jschallenger.com/javascript-objects/check-object-has-property-javascript/*

    Write a function that takes an object (a) and a string (b) as argument
    Return true if a has a property with key b
    Return false otherwise

    * Solution
    Use the `hasOwnProperty()` method on the object
*/

function main(a, b) {
    return a.hasOwnProperty(b);
}
