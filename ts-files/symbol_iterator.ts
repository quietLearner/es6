let arr = [1, 2, 3];

function createIterator(array: any[]) {
    let count = 0;
    return {
        next() {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    }
}

let myIter = createIterator(arr);

// console.log(myIter.next());
// console.log(myIter.next());
// console.log(myIter.next());
// console.log(myIter.next());

while (true) {
    const result = myIter.next();
    if (result.done) {
        break;
    }
    console.log(result);
}

let fullname = Symbol();
let person = {
    fname: 'chandler',
    lname: 'bing',
    [fullname]: 'chandler bing',
    [Symbol.iterator]() {
        let properties = Object.keys(person);
        let count = 0;
        let isDone = false;
        return {
            next() {
                if (count >= properties.length) {
                    isDone = true;
                }
                return { done: isDone, value: [properties[count++]] };
            }
        }
    },
}

// person[Symbol.iterator] = function () {
//     let properties = Object.keys(person);
//     let count = 0;
//     let isDone = false;
//     let next = () =>  {
//         if (count >= properties.length) {
//             isDone = true;
//         }
//         return { done: isDone, value: this[properties[count++]] };
//     }

//     return {next};
// }

//person is not iterable
for (let p of person) {
    console.log(p)
}
console.log(person[fullname])


