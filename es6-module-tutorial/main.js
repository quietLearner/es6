//use alias to avoid name conflict
// import { sum as add, sub } from "./calc.js";

import * as calc from "./calc.js";

//import { default as sayMyNanme } from "./whoami.js";
//import { default as sayMyChannelName } from "./whoami.js";

import sayMyNanme from "./whoami.js"; // import default

//console.log(add(2, 3));

console.log(calc.sub(2, 3));

console.log(sayMyNanme());
