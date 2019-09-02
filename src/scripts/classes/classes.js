class Person {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

module.exports.personClass = Person;

function Person2(name) {
    this.name = name;
}

Person2.prototype.sayHello = function() {
    console.log(`Hello ${this.name}`);
}

module.exports.personFunction = Person2;