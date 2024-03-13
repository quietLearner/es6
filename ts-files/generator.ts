//generator, pause and resume

function* createGenerator() {
    yield 1;
    console.log('after 1st yield');
    yield 2;
}

let myGen = createGenerator();
console.log(myGen.next()) //done false

console.log(myGen.next()) //done false

console.log(myGen.next()) //done true


let fullname = Symbol();
let person = {
    fname: 'chandler',
    lname: 'bing',
    age: 30,
    [fullname]: 'chandler bing',

}

//https://blog.csdn.net/low666/article/details/105080798
person[Symbol.iterator] = function* () {
    let properties = Object.keys(person);
    for (let t of properties) {
        yield this[t];
    }
}

//person is not iterable
for (let p of person) {
    console.log(p)
}
console.log(person[fullname])




