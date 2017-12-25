console.log("Starting notes.js!");
var fs = require('fs');

var fetchNotes = () => {
    //The code below exists in case notes-data.json does not
    try {
        //This basically reads existing notes and parses it
        //into the empty notes array
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
var saveNotes = (notes) => {
     // Writing into the file
     fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };
    
    //Checks if title is duplicate
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        //This pushes the note body and title into notes-data.json file
        notes.push(note);
        saveNotes(notes);
        return note;   
    }
    
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log("Getting note: ", title);
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title != title);
    saveNotes(filteredNotes);
    if(notes.length === filteredNotes.length){
        console.log("Could not find note!");
    }
    else {
        console.log(`Removed note with title: "${title}"`);
    }
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};