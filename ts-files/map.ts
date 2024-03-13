//map, weekmap?
let map1 = new Map();
map1.set('a', 100);
map1.set('b', 200);


map1.forEach(e => {
    console.log(e);
})



console.log(map1.get('a'));
console.log(map1.size);
console.log(map1.has('a'));

const myMap = new Map([
    [3, 'chandler'],
    [4, 'bing']
]);
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
    console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
    console.log(value);
}
// zero
// one

// destructing
for (const [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

//weak map
let weakmap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakmap.set(obj1, "hello world");
weakmap.set(obj2, "nihao world");

console.log(weakmap.get(obj1))

obj1 = null;
console.log(weakmap)