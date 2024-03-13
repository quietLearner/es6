let firstname = 'lol';
let lastname = 'haha';

//object literal
let person = {
    // firstname: firstname,
    // lastname: lastname,

    firstname,
    lastname,
}

console.log(person)

//short hand notation
function createPerson(firstname, lastname, age) {
    let fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname,
        fullname,
        // isSenior: function () {
        //     return age > 65;
        // }
        isSenior() {
            return age > 65;
        }
    };
}

let p = createPerson('aaa', 'bbb', 32);
console.log(p.fullname)
console.log(p.isSenior())

let ln = 'last name'
let student = {
    "first name": "Sam",
    [ln]: 'Wu' // variable name
}

console.log(student["first name"], student['last name']);


//deconstruct array
let employee = ["chandler", "bing", "male", 32];

let [fname, lname, gender] = employee;

console.log(fname, lname, gender)

let [, , , age] = employee;
console.log(age)

let dog = ["awang", "bitch", 2];
let [dname, ...elements] = dog
console.log(dname, elements[0])


//descontruct object
let emp = {
    aname: "chander",
    bname: "bing",
    sex: "male",
}

let { aname: a, bname: b, sex: s } = emp;
console.log(a)

