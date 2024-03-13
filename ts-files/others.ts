//typescript
enum EyeColor {
    Brown = 100,
    Black = 5,
    Blue = 8,
}

let myEyeColor = EyeColor.Black;

console.log(myEyeColor, EyeColor[myEyeColor]); // 5

// arrays, tuples
let arr1: string[] = ['a', 'b'];
let arr2: Array<string> = ['a', 'b'];

let arr3: any[] = ['a', 1];


let myTuple: [string, number] = ['hi', 10];

console.log(myTuple)

myTuple[0] = 'b'
myTuple[1] = 3

//short hand
class Dog {
    // this will create a public class varialbe and private class variable
    constructor(public name: string, age: number) { }
}

let d = new Dog('awang', 10);
console.log(d.name, d)


interface Animial {
    name: string;
    age?: number; //optinal

}

let dog1: Animial = {
    name: 'awang',
    //age: 12
}

console.log(dog1)

