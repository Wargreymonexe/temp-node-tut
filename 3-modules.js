//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi= require('./5-utils')
const date = require('./6-alternative-flavor')
require('./7-mind-grenade')


 console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(date.items[0]);
console.log(date.singlePerson.name);

