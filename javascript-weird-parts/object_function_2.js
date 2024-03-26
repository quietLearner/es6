//object and function
// object literal
//var person = {} // the same var person = new Object();

var person = {
    firstname: 'chandler', lastname: 'binig', address: {
        street: '111 main st',
        city: 'New York',
        state: 'NY',
    }
};

function greet(person) {
    console.log('hi ' + person.firstname)
}

console.log(person)
greet(person)


//json and object literal, what is the different?
/*
all json is object literal.

not every object lieteral is json
*/
var objectLiteral = {
    firstname: "chandler",
    isAProgrammer: true,
}
//SON only permits property definition using the "property": value syntax
/*
JSON is a strict subset of the object literal syntax, 
meaning that every valid JSON text can be parsed as an object literal,
*/
console.log(objectLiteral); //{firstname: 'chandler', isAProgrammer: true}

//json.stringify will convert object literal to json
console.log(JSON.stringify(objectLiteral)); //{"firstname":"chandler","isAProgrammer":true}



//json, name in double quotation.
/*
{
    "firstname": "mary",
    "isAProgrammer" : true
}
*/

//convert json to object literal
console.log(JSON.parse(
    `{
        "firstname": "mary",
        "isAProgrammer" : true
    }
    `
));