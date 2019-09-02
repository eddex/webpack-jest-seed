const PersonClass = require('./classes').personClass;
const PersonFunction = require('./classes').personFunction;

let outputData = "";
storeLog = inputs => (outputData += inputs);
console["log"] = jest.fn(storeLog);

test('should say hello', () =>  {
    outputData = "";
    let person = new PersonClass('Patrick');
    person.sayHello();
    expect(outputData).toBe('Hello Patrick');
});

test('should say hello too', () =>  {
    outputData = "";
    let person = new PersonFunction('Patrick');
    person.sayHello();
    expect(outputData).toBe('Hello Patrick');
});