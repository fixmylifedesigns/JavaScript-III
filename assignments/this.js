/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - binding context of what this is
* 2. Implict binding - object literals
* 3. new binding - constructor functions are meant to build object literals
* 4. Explicit Binding - when js's call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function firstPrinciple(name) {
    console.log(this);
    return name;
}
firstPrinciple("window binding");
// console.log(firstPrinciple());

// Principle 2

// code example for Implicit Binding

const secondPrinciple = {
    sentence: 'This is an example of',
    showExample: function(name) {
        console.log(`${this.sentence} ${name}`);
        console.log(this);
    }
}
secondPrinciple.showExample('Implicit Binding')

// Principle 3

// code example for New Binding

function thirdPrinciple(name) {
    this.sentence = 'whats up'
    this.name = name ;
    this.speak = function() {
        console.log(this.sentence + ' ' + this.name);
    };
}

const thing1 = new thirdPrinciple('thing 2')
const thing2 = new thirdPrinciple('thing 1')

thing1.speak();
thing2.speak();

// Principle 4

// code example for Explicit Binding

function example(persons) {
    this.age = persons.age;
    this.name = persons.name;
    this.hometown = persons.hometown;
    this.speak = function () {
        return `hello, my name is ${this.name} , I am ${this.age} years of age and live in ${this.hometown}.`;
    };
}

const irving = new example({
    age: 26,
    name: 'Irving',
    hometown: 'Brooklyn'
});

const amanda = new example({
    age: 23,
    name: 'Amanda',
    hometown: 'Queens'
});

console.log(irving);
console.log(irving.speak());

console.log(amanda);
console.log(amanda.speak());
