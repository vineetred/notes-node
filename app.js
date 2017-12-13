console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Andrew'));
var filteredArray  = _.uniq(['Andrew', 3, 'Andrew', 1,2,3,4]);
console.log(filteredArray);


// var user  = os.userInfo();
// fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.sex}`);
// var res = notes.addNote();
// console.log(res);
// var addition = notes.add(10,27);
// notes.add(9,-2);
