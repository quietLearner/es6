//symbol 表示独一无二的值, https://blog.csdn.net/low666/article/details/105080418
let s = Symbol("first symbol");
console.log(s, typeof s, s.toString())

let s2 = Symbol("test");
let s3 = Symbol("test");

console.log(s2 == s3, s2 === s3) //both false


let s4 = Symbol.for('test 1'); // look for test 1, not found, create a new symbol
let s5 = Symbol.for('test 1'); // look for test 1, found, return the existing symbol
console.log(s4 == s5, s4 === s5); // both true
console.log(Symbol.keyFor(s4), Symbol.keyFor(s5)); //test 1

//usage, 用于对象的属性名，就能保证不会出现同名的属性
let fname = Symbol('firstname'); //garante unique globally
let person = {
    [fname]: "chandler",
};
let lname = Symbol();
person[lname] = 'bing';


console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

//console.log(person['fname']);
//console.log(person.fname);
console.log(person[fname]);
console.log(person[lname]);

let levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color: Symbol) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}

console.log(getComplement(COLOR_RED) === COLOR_GREEN); //true

const ShapeType = {
    triangle: Symbol(), //'Triangle', the value does not matter, as long as it's unique
    square: Symbol(),
};

function getArea(shape: Symbol, options: { width: number, height: number }) {
    var area = 0;
    switch (shape) {
        case ShapeType.triangle:
            area = .5 * options.width * options.height;
            break;
    }
    return area;
}

console.log(getArea(ShapeType.triangle, { width: 100, height: 100 }));

// symbol iterator
let str = 'hello';
let arr = [1, 2, 3];
let num = 5;
let obj = { name: 'chandler' };

console.log("for string", typeof str[Symbol.iterator]); //function
console.log("for array", typeof arr[Symbol.iterator]); //function
//console.log("for number", typeof num[Symbol.iterator]); //undefined
//console.log("for object", typeof obj[Symbol.iterator]); //undefined



