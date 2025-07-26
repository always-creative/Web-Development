// Returns the function's name
function myCallback() {
    () => {
        return console.log("hello !");
    }
}
console.log(myCallback.name); // "myCallback"
// Returns the number of parameters expected
function cb(a, b) { }
console.log(cb.length); // 2
// Returns the function's source code
console.log(myCallback.toString());