console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//User written modules

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

//IF ELSE statements that check for the parameter inputs in the terminal
if (command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if(command === 'list'){
    notes.getAll();
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else if(command ==='read') {
    notes.getNote(argv.title);
} else {
    console.log("Command not recogonised");
}

 //HI FROM MAC