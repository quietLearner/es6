//object, fucntion and this
console.log(this) //global object which in browser is window

function a() {
    console.log(this); //window
}

a();