const employee = {
    id: 2,
    greet: function () {
        var self = this; // this is employee obj
        console.log(this)
        setTimeout(function () {
            console.log(self.id);
            console.log(this); // underfined/window, because this here refer to setTimeout, not greet
        }, 1000);

    },
    hello: function () {
        console.log(this) // this is employee obj
        setTimeout(() => {
            // Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping"
            console.log(this.id)
        }, 1000);
    }
}
console.log(typeof employee) //object
employee.greet();
employee.hello();