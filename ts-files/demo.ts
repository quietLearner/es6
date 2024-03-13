console.log('hello world')

// var is not working
for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, (i + 1) * 1000)
}

const PI = 3.1415926

const getValue = (m) => {
    return 10 * m;
}

const getVal = (n, m) => 10 * n + m;

console.log(getVal(5, 10))


// rest convert to array
let displayColors = function (message, ...colors) {
    console.log(message)
    // for (let i in arguments) {
    //     console.log(arguments[i]);
    // }
    for (let i in colors) {
        console.log(colors[i]);
    }
}

displayColors('lol', 'red');
displayColors('haha', 'red', 'blue');

let colors = ['red', 'blue']

for (let color of colors) {
    console.log(color);
}

let letters = "ABC"

for (let l of letters) {
    console.log(l);
}


