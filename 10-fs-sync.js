const {readFileSync, writeFileSync} = require('fs');
//const fs =require('fs');
//fs.read
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/third.txt',   //node will create if there is not a file call third.txt
`Here is the result : ${first}, ${second}  Hello World`,   //This will be written in the file
{flag: 'a'} //Node will append this to the file again of the before written statement
);

console.log('done with this task');
console.log('Starting the next one');