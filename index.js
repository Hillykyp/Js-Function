/*
TYPES OF FUNCTIONS
1. Regular Functions
 function name(param){
     statements
 }
*/
document.write('<h1>Functions</h1>')

function sumAdd(num1, num2) {
    const total = num1 + num2
    document.write(total)
};

sumAdd(5, 7)

document.write('<br>')

function multi1(x, y) {
    const m = x * y
    document.write(m)
}
multi1(3, 5)

document.write('<br>')

function addNumbers(a, b) {
    const tot = a + b
    document.write('The total is : ' + tot)
}
addNumbers(4, 2)

document.write('<br>')



// 2. Function Expression
/*
let name = function(params) {
        statements
    } */


// 3. Arrow Functions Expression
/*
let name = (params) => {
    statements
}*/
let myName = (name, age) => {
    document.write('My name is:' + name + ' ' + age);

}
myName("Hosea", 23);