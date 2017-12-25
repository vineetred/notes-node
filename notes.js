console.log("Starting notes.js!");
var fs = require('fs');
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body,
    };
    //The code below exists in case notes-data.json does not
    try {
        //This basically reads existing notes and parses it
        //into the empty notes array
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
    //Checks if title is duplicate
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        //This pushes the note body and title into notes-data.json file
        notes.push(note);
        // Writing into the file
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }


};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log("Getting note: ", title);
};

var removeNote = (title) => {
    console.log("Removing note: ", title);

};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};