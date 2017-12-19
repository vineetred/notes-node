// var obj = {
//     name: 'Vineet',
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Vineet", "age": "20"}';
// var person = JSON.parse(personString);
// // console.log(typeof(person));

const fs = require('fs');

var originalNote  = {
    title: 'Some Title',
    body: 'Some Body',
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

 console.log(typeof(note));
 console.log(note.title);