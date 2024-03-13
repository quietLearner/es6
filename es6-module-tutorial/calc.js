const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// this is named export, you have to use the same name after importing
/*

import { sum } from "./calc.js";
import { sum, sub } from "./calc.js";


use alias to avoid name conflict
import { sum as add, sub } from "./calc.js";

namesapce import, because there could be many functions, import them one by one is too much typing.
import * as calc from "./calc.js";
calc.sub(2, 3)

*/
export { sum, sub };
