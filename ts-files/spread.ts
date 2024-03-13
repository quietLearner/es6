let showColors = function (message, ...colors) {
    console.log(message)
    // for (let i in arguments) {
    //     console.log(arguments[i]);
    // }
    for (let i in colors) {
        console.log(colors[i]);
    }
}

let colorArray = ['orange', 'yellow'];

// convert list to 
showColors('lol', ...colorArray)