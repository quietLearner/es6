//default export

const sayMyNanme = () => {
  return "lol";
};

const PI = 3.14159;

/*
only export one thing can use default export, not mutiple 

import { default as sayMyNanme } from "./whoami.js";
import { default as sayMyChannelName } from "./whoami.js";

import sayMyNanme from "./whoami.js";
import sayMyChannelName from './whoami.js';

*/
export default sayMyNanme;
