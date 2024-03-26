//object and function
var person = new Object();

person['firstname'] = 'chandler';
person['lastname'] = 'bing';

var firstNameProperty = 'firstname';

console.log(person)
console.log(person[firstNameProperty])
console.log(person['firstname'])

console.log(person.firstname);

person.address = new Object();
person.address.street = "111 main street";
person.address.city = "New York";
person.address.state = "NY";
console.log(person)
console.log(person["address"]["state"])