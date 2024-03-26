//long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) { };
    console.log('finished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

/*
events are put in event queue(loop)

events only executed after all the functions are done!!!

finished function
finished execution
click event
*/
