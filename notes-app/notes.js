const fs = require('fs');
// Lesson 3.10
const getNotes = function () {
    return 'Your notes...';
};


// Lesson 4.19
const addNote = (title, body) => {
    let notes = loadNotes();
    if (notes.length === 0) {
        notes = [];
    }
    const duplicateNotes = notes.filter((note)=> {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(notes)
        console.log('New note added!');
    } else {
        console.log('Note title "' + title + '" is already taken!');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log('There are currently no notes to remove ... ');
        return;
    }
    const newNotes = notes.filter((note)=> {
        return note.title !== title;
    });
    if (newNotes.length === notes.length) {
        console.log('Notes titled "' + title + '" does not exist. Nothing removed.');
    } else {
        saveNotes(newNotes);
        console.log(newNotes)
        console.log('Note "' + title + '"removed.');
    }
};


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    };
};

 module.exports = {
     getNotes: getNotes,
     addNote: addNote,
     removeNote: removeNote
 };