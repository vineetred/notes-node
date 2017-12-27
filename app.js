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
//Written this using atom!
console.log('Yargs', argv);

//IF ELSE statements that check for the parameter inputs in the terminal
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note has been created");
        notes.logNote(note);
    } else {
        console.log("Note already exists");
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    var read = notes.getNote(argv.title);
    if(read) {
        notes.logNote(read);
    }
} else {
    console.log("Command not recogonised");
}
