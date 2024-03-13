es2015 -> transpiler -> es5

use typescript as transpiler

1. npm install typescript -g

// create a tsconfig.json
2. tsc --init

3. tsc -w

******************************************************************

Module Syntax - es2015
Module Loading - working in progress

es6 with webpack5

Presets
https://babeljs.io/docs/presets

create package.json
1. npm init -y

2.
npm i webpack webpack-cli --save-dev

3.
webpack.config.js

4. handle scss
npm i -D sass style-loader css-loader sass-loader

5. use template.html to genereate index.html and insert js into it
npm i -D html-webpack-plugin

6
npm i -D webpack-dev-server

7.to make the code work with old browser, install babel, es6 -> babel-> es5

without babel, generated bundle.js
const generateJoke = () => {
  return "I don't trust stairs. They're alwasy up to something.";
};

with babel, generated bundle.js
var generateJoke = function generateJoke() {
  return "I don't trust stairs. They're alwasy up to something.";
};


npm i -D @babel/core @babel/preset-env babel-loader


8. handle photos and other assets
https://webpack.js.org/guides/asset-modules/

9 axios
npm i axios

10
npm i -D webpack-bundle-analyzer

11. how to create webpack.common.js, webpack.dev.js, webpack.prod.js???